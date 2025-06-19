import express from "express";
import Product from "../models/product.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const { petshop_id } = req.query;

    const query = petshop_id ? { petshop_id } : {};
    const products = await Product.find(query);

    res.json({ error: false, products });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: true,
      message: "Erro ao buscar produtos",
    });
  }
});

export default router;
