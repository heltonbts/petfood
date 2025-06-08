import { createPreference, getPreference } from "../services/paymentService.js";

export const createCheckout = async (req, res) => {
  try {
    const { items, customer, orderId, maxInstallments } = req.body;

    // Validações
    if (!items || !Array.isArray(items) || items.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Items são obrigatórios",
      });
    }

    if (!customer || !customer.email) {
      return res.status(400).json({
        success: false,
        message: "Email do cliente é obrigatório",
      });
    }

    // Validar items
    for (const item of items) {
      if (!item.nome && !item.title) {
        return res.status(400).json({
          success: false,
          message: "Nome do item é obrigatório",
        });
      }
      if (!item.preco && !item.price) {
        return res.status(400).json({
          success: false,
          message: "Preço do item é obrigatório",
        });
      }
    }

    console.log("🛒 Criando checkout para:", customer.email);

    const orderData = {
      items,
      customer,
      orderId: orderId || `order_${Date.now()}`,
      maxInstallments: maxInstallments || 12,
    };

    const result = await createPreference(orderData);

    if (result.success) {
      res.json({
        success: true,
        preferenceId: result.preferenceId,
        checkoutUrl: result.checkoutUrl,
        orderId: orderData.orderId,
        message: "Checkout criado com sucesso",
      });
    } else {
      res.status(400).json({
        success: false,
        message: "Erro ao criar checkout",
        error: result.error,
      });
    }
  } catch (error) {
    console.error("❌ Erro no controller de checkout:", error);
    res.status(500).json({
      success: false,
      message: "Erro interno do servidor",
    });
  }
};

export const getCheckoutStatus = async (req, res) => {
  try {
    const { preferenceId } = req.params;

    if (!preferenceId) {
      return res.status(400).json({
        success: false,
        message: "Preference ID é obrigatório",
      });
    }

    const result = await getPreference(preferenceId);

    if (result.success) {
      res.json({
        success: true,
        preference: result.preference,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "Preferência não encontrada",
        error: result.error,
      });
    }
  } catch (error) {
    console.error("❌ Erro ao buscar status:", error);
    res.status(500).json({
      success: false,
      message: "Erro interno do servidor",
    });
  }
};

// Webhook para receber notificações do MP
export const handleWebhook = async (req, res) => {
  try {
    console.log("🔔 Webhook recebido:", req.body);

    const { type, data } = req.body;

    if (type === "payment") {
      console.log("💳 Notificação de pagamento:", data.id);

      // TODO: Buscar detalhes do pagamento e atualizar pedido
      // const payment = await mp.payment.findById(data.id);
      // await updateOrderStatus(payment.external_reference, payment.status);
    }

    // Sempre responder 200 para o MP
    res.status(200).json({ received: true });
  } catch (error) {
    console.error("❌ Erro no webhook:", error);
    res.status(200).json({ received: false }); // Ainda assim responde 200
  }
};
