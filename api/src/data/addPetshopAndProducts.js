import Petshop from "../models/petshop.js";
import Product from "../models/product.js";
import petshops from "./petfood.json" with { type: "json" };
import connectDB from "../database.js";



const addPetshopAndProducts = async () => {
  try {
    await connectDB();
    console.log("Conectado, iniciando script...");

    for (let petshop of petshops) {
      const recipient = await createRecipients(petshop.nome);

      if (!recipient.error) {
        const newPetshop = await new Petshop({
          ...petshop,
          recipient_id: recipient.data.id,
        }).save();

        await Product.insertMany(
          petshop.produtos.map((p) => ({
            ...p,
            petshop_id: newPetshop._id,
            recipient_id: recipient.data.id
          }))
        );

        console.log(`✅ ${petshop.nome} criado com recipient: ${recipient.data.id}`);
      } else {
        console.log(`❌ Erro no ${petshop.nome}:`, recipient.message);
      }
    }

    console.log("🎉 Script finalizado!");
  } catch (err) {
    console.log("❌ Erro geral:", err);
  }
};

addPetshopAndProducts();
