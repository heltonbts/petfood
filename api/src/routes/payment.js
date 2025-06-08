import express from "express";
import {
  createCheckout,
  getCheckoutStatus,
  handleWebhook,
} from "../controllers/paymentController.js";
import {
  createPurchase,
  getPurchaseProducts,
} from "../controllers/purchase.js";

const router = express.Router();

router.post("/checkout/create", createCheckout);
router.get("/checkout/:preferenceId", getCheckoutStatus);
router.post("/webhook", handleWebhook);

router.post("/purchase/create", createPurchase);
router.post("/purchase/products", getPurchaseProducts);

export default router;
