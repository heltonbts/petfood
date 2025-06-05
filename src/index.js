import React from "react";
import { createRoot } from "react-dom/client";
import "./styles/global.css";

import { Signup } from "./pages/signup";
import { Sidebar } from "./components/sidebar";
import { Checkout } from "./pages/checkout";
import { Petshop } from "./pages/petshop";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Sidebar />
    <Petshop />
  </React.StrictMode>
);
