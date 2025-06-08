import express from "express";
import Petshop from "../models/petshop.js";
import Product from "../models/product.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const petshops = await Petshop.find();
    res.json({ error: false, petshops });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: true, message: "Erro ao buscar petshops" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const petshop = await Petshop.findById(req.params.id);
    if (!petshop) {
      return res
        .status(404)
        .json({ error: true, message: "Petshop não encontrado" });
    }

    const produtos = await Product.find({ petshop_id: req.params.id });

    res.json({
      error: false,
      petshop,
      produtos,
    });
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ error: true, message: "Erro ao buscar petshop e produtos" });
  }
});

export default router;
