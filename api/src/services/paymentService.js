import { MercadoPagoConfig, Preference } from "mercadopago";

// Configuração do Mercado Pago
const client = new MercadoPagoConfig({
  accessToken: process.env.MP_ACCESS_TOKEN,
  options: { timeout: 5000, idempotencyKey: "abc" },
});

const preference = new Preference(client);

export const createPreference = async (orderData) => {
  try {
    console.log("🛒 Criando preferência MP...", orderData);

    const preferenceData = {
      items: orderData.items.map((item) => ({
        id: item.id || item.nome,
        title: item.nome || item.title,
        description: item.descricao || item.description || "",
        quantity: item.quantidade || item.quantity || 1,
        unit_price: item.preco || item.price || item.unit_price, // ← Adicionar unit_price
        currency_id: "BRL",
        picture_url: item.capa || item.picture_url,
      })),

      payer: {
        name: orderData.customer?.nome || orderData.customer?.name,
        email: orderData.customer?.email,
        identification: {
          type: orderData.customer?.cpf ? "CPF" : "RG",
          number: orderData.customer?.cpf || orderData.customer?.rg || "",
        },
        address: orderData.customer?.endereco
          ? {
              street_name: orderData.customer.endereco.rua,
              street_number: orderData.customer.endereco.numero,
              zip_code: orderData.customer.endereco.cep,
            }
          : undefined,
      },

      back_urls: {
        success: "https://httpbin.org/get",
        failure: "https://httpbin.org/get",
        pending: "https://httpbin.org/get",
      },

      notification_url: "https://httpbin.org/post",

      external_reference: orderData.orderId || `order_${Date.now()}`,

      expires: true,
      expiration_date_from: new Date().toISOString(),
      expiration_date_to: new Date(
        Date.now() + 24 * 60 * 60 * 1000
      ).toISOString(), // 24h

      payment_methods: {
        excluded_payment_methods: [],
        excluded_payment_types: [],
        installments: orderData.maxInstallments || 12,
      },

      metadata: {
        marketplace: "petfood",
        version: "1.0",
        customer_id: orderData.customer?.id,
        order_type: orderData.tipo || "purchase",
      },
    };

    console.log(
      "📋 Dados da preferência:",
      JSON.stringify(preferenceData, null, 2)
    );

    const result = await preference.create({ body: preferenceData });

    console.log("✅ Preferência criada:", result.id);

    return {
      success: true,
      preferenceId: result.id,
      initPoint: result.init_point,
      sandboxInitPoint: result.sandbox_init_point,
      checkoutUrl: result.sandbox_init_point || result.init_point,
    };
  } catch (error) {
    console.error("❌ Erro ao criar preferência:", error);
    return {
      success: false,
      error: error.message,
      details: error.cause,
    };
  }
};

export const getPreference = async (preferenceId) => {
  try {
    const result = await preference.get({ preferenceId });
    return {
      success: true,
      preference: result,
    };
  } catch (error) {
    console.error("❌ Erro ao buscar preferência:", error);
    return {
      success: false,
      error: error.message,
    };
  }
};
