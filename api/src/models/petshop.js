import mongoose from "mongoose";
const { Schema } = mongoose;

const petshopSchema = new Schema({
  nome: String,
  logo: String,
  categoria: String,
  destaque: Number,
  location: Object,
  recipient_id: String,
});

const Petshop = mongoose.model("Petshop", petshopSchema);

export default Petshop;
