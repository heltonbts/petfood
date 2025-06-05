import React from "react";
import { createRoot } from "react-dom/client";
import "./styles/global.css";

import { Signup } from "./pages/signup";
import { Checkout } from "./pages/checkout";
import { Petshop } from "./pages/petshop";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Checkout />
  </React.StrictMode>
);
