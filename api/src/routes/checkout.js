import { Router } from "express";
import {
  createCheckout,
  getCheckoutStatus,
  handleWebhook,
} from "../controllers/paymentController.js";

const router = Router();

router.post("/create", createCheckout);
router.get("/:preferenceId", getCheckoutStatus);
router.post("/webhook", handleWebhook);

export default router;
