import React from "react";
import { createRoot } from "react-dom/client";
import "./styles/global.css";

import { Signup } from "./pages/signup";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Signup />
  </React.StrictMode>
);
