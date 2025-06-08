import mongoose from "mongoose";
const { Schema } = mongoose;

const productSchema = new Schema({
  petshop_id: {
    type: Schema.Types.ObjectId,
    ref: "Petshop",
  },
  nome: String,
  capa: String,
  preco: String,
  avaliacoes: Number,
});

const Product = mongoose.model("Product", productSchema);

export default Product;
