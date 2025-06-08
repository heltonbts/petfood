import "dotenv/config";

// Mock do Payment Service para testes
export const processPaymentTest = async (paymentData) => {
  try {
    console.log("🧪 TESTANDO PAGAMENTO - Dados recebidos:");
    console.log("💰 Valor:", paymentData.amount);
    console.log("🏷️ Token:", paymentData.token);
    console.log("📧 Email:", paymentData.payer.email);
    console.log("💳 Método:", paymentData.payment_method_id);

    // Cenários de teste baseados no token
    const mockScenarios = {
      APPROVED: {
        status: "approved",
        detail: "accredited",
        message: "✅ Pagamento APROVADO",
      },
      REJECTED_FUNDS: {
        status: "rejected",
        detail: "cc_rejected_insufficient_amount",
        message: "❌ Cartão sem limite",
      },
      REJECTED_CARD: {
        status: "rejected",
        detail: "cc_rejected_bad_filled_card_number",
        message: "❌ Número do cartão inválido",
      },
      PENDING: {
        status: "pending",
        detail: "pending_waiting_payment",
        message: "⏳ Pagamento PENDENTE",
      },
      REJECTED_CVV: {
        status: "rejected",
        detail: "cc_rejected_bad_filled_security_code",
        message: "❌ CVV inválido",
      },
    };

    // Define cenário baseado no token
    let scenario;
    if (paymentData.token.includes("APPROVED")) {
      scenario = mockScenarios.APPROVED;
    } else if (paymentData.token.includes("REJECTED_FUNDS")) {
      scenario = mockScenarios.REJECTED_FUNDS;
    } else if (paymentData.token.includes("REJECTED_CARD")) {
      scenario = mockScenarios.REJECTED_CARD;
    } else if (paymentData.token.includes("PENDING")) {
      scenario = mockScenarios.PENDING;
    } else if (paymentData.token.includes("REJECTED_CVV")) {
      scenario = mockScenarios.REJECTED_CVV;
    } else {
      // Cenário padrão - APROVADO
      scenario = mockScenarios.APPROVED;
    }

    console.log("🎯 Cenário selecionado:", scenario.message);

    // Simular delay da API real
    console.log("⏱️ Simulando delay da API...");
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const result = {
      success: true,
      paymentId: `test_payment_${Date.now()}`,
      status: scenario.status,
      detail: scenario.detail,
      approved: scenario.status === "approved",
      amount: paymentData.amount,
      installments: paymentData.installments,
      method: paymentData.payment_method_id,
    };

    console.log("📋 RESULTADO:");
    console.log("🆔 Payment ID:", result.paymentId);
    console.log("📊 Status:", result.status);
    console.log("📝 Detalhe:", result.detail);
    console.log("✅ Aprovado:", result.approved);

    return result;
  } catch (error) {
    console.error("❌ Erro no teste:", error);
    return {
      success: false,
      error: error.message,
    };
  }
};

// Cenários de teste pré-definidos
export const testScenarios = {
  approved: {
    token: "TOKEN_APPROVED_123",
    amount: 100.5,
    installments: 1,
    payment_method_id: "visa",
    payer: {
      email: "approved@test.com",
      identification: {
        type: "CPF",
        number: "12345678901",
      },
    },
    description: "Teste Pagamento Aprovado",
  },

  rejectedFunds: {
    token: "TOKEN_REJECTED_FUNDS_456",
    amount: 1000.0,
    installments: 1,
    payment_method_id: "visa",
    payer: {
      email: "rejected@test.com",
      identification: {
        type: "CPF",
        number: "12345678901",
      },
    },
    description: "Teste Sem Limite",
  },

  pending: {
    token: "TOKEN_PENDING_789",
    amount: 50.0,
    installments: 1,
    payment_method_id: "bolbradesco",
    payer: {
      email: "pending@test.com",
      identification: {
        type: "CPF",
        number: "12345678901",
      },
    },
    description: "Teste Boleto Pendente",
  },
};

// Função para testar todos os cenários
export const runAllTests = async () => {
  console.log("🚀 INICIANDO TESTES DE PAGAMENTO");
  console.log("==========================================");

  for (const [scenarioName, data] of Object.entries(testScenarios)) {
    console.log(`\n🧪 TESTANDO: ${scenarioName.toUpperCase()}`);
    console.log("------------------------------------------");

    const result = await processPaymentTest(data);

    console.log("✨ TESTE CONCLUÍDO\n");
  }

  console.log("🏁 TODOS OS TESTES FINALIZADOS");
};

// Se executar o arquivo diretamente, roda os testes
if (import.meta.url === `file://${process.argv[1]}`) {
  runAllTests();
}
