import "dotenv/config";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import main from "./routes/main.js";
import paymentRoutes from "./routes/payment.js";
import checkoutRouter from "./routes/checkout.js";
import petshops from "./routes/petshops.js";
import productRoutes from "./routes/products.js";

import connectDB from "./database.js";

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use("/", main);
app.use("/api/payment", paymentRoutes);
app.use("/api/checkout", checkoutRouter);
app.use("/petshops", petshops);
app.use("/products", productRoutes);

connectDB().then(() => {
  app.listen(1309, () => {
    console.log("server up");
  });
});
