import Product from "../models/product.js";
import Petshop from "../models/petshop.js";
import { createPreference } from "../services/paymentService.js";

export const createPurchase = async (req, res) => {
  try {
    const {
      items, // [{ product_id, quantity }]
      customer,
    } = req.body;

    // Validações básicas
    if (!items || !Array.isArray(items) || items.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Items são obrigatórios",
      });
    }

    if (!customer || !customer.email) {
      return res.status(400).json({
        success: false,
        message: "Dados do cliente são obrigatórios",
      });
    }

    console.log("🛒 Criando purchase para:", customer.email);
    console.log("📦 Items solicitados:", items);

    // Buscar produtos do banco
    const productIds = items.map((item) => item.product_id);
    const products = await Product.find({ _id: { $in: productIds } }).populate(
      "petshop_id"
    );

    if (products.length !== productIds.length) {
      return res.status(404).json({
        success: false,
        message: "Alguns produtos não foram encontrados",
      });
    }

    // Montar items para o MP
    const mpItems = [];
    let totalAmount = 0;
    const orderSummary = [];

    for (const requestItem of items) {
      const product = products.find(
        (p) => p._id.toString() === requestItem.product_id
      );
      const quantity = requestItem.quantity || 1;
      const itemTotal = parseFloat(product.preco) * quantity;

      mpItems.push({
        id: product._id.toString(),
        title: product.nome,
        description: `Produto de ${product.petshop_id.nome}`,
        quantity: quantity,
        unit_price: parseFloat(product.preco), // ← Converter para número
        currency_id: "BRL",
        picture_url: product.capa,
      });

      orderSummary.push({
        product_id: product._id,
        product_name: product.nome,
        petshop_name: product.petshop_id.nome,
        unit_price: parseFloat(product.preco),
        quantity: quantity,
        total: itemTotal,
        recipient_id: product.petshop_id.recipient_id,
      });

      totalAmount += itemTotal;
    }

    console.log("💰 Total do pedido:", totalAmount);
    console.log("🏪 Resumo:", orderSummary);

    // Calcular comissão do marketplace (8%)
    const marketplaceFee = totalAmount * 0.08;
    const sellerAmount = totalAmount - marketplaceFee;

    console.log(`💼 Comissão marketplace: R$ ${marketplaceFee.toFixed(2)}`);
    console.log(`🏪 Valor para vendedores: R$ ${sellerAmount.toFixed(2)}`);

    // Criar preferência do MP
    const orderData = {
      items: mpItems,
      customer: {
        nome: customer.nome || customer.name,
        email: customer.email,
        cpf: customer.cpf,
        endereco: customer.endereco,
      },
      orderId: `order_${Date.now()}`,
      maxInstallments: 12,
    };

    const mpResult = await createPreference(orderData);

    if (mpResult.success) {
      // TODO: Salvar order no banco de dados aqui

      res.json({
        success: true,
        preferenceId: mpResult.preferenceId,
        checkoutUrl: mpResult.checkoutUrl,
        orderId: orderData.orderId,
        summary: {
          items: orderSummary,
          total: totalAmount,
          marketplace_fee: marketplaceFee,
          items_count: items.length,
        },
        message: "Purchase criada com sucesso",
      });
    } else {
      res.status(400).json({
        success: false,
        message: "Erro ao criar checkout",
        error: mpResult.error,
      });
    }
  } catch (error) {
    console.error("❌ Erro no controller de purchase:", error);
    res.status(500).json({
      success: false,
      message: "Erro interno do servidor",
      error: error.message,
    });
  }
};

export const getPurchaseProducts = async (req, res) => {
  try {
    const { productIds } = req.body;

    if (!productIds || !Array.isArray(productIds)) {
      return res.status(400).json({
        success: false,
        message: "Product IDs são obrigatórios",
      });
    }

    const products = await Product.find({ _id: { $in: productIds } })
      .populate("petshop_id", "nome")
      .select("nome preco capa avaliacoes petshop_id");

    res.json({
      success: true,
      products: products.map((p) => ({
        id: p._id,
        nome: p.nome,
        preco: p.preco,
        capa: p.capa,
        avaliacoes: p.avaliacoes,
        petshop: p.petshop_id.nome,
      })),
    });
  } catch (error) {
    console.error("❌ Erro ao buscar produtos:", error);
    res.status(500).json({
      success: false,
      message: "Erro interno do servidor",
    });
  }
};
