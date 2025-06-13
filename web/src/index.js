import React from "react";
import { createRoot } from "react-dom/client";
import { AppRoutes } from "./routes";
import { Provider } from "react-redux";
import store from "./store/index.js";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <AppRoutes />
    </React.StrictMode>
  </Provider>
);
