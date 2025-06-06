import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./styles/global.css";

import { Signup } from "./pages/signup";
import { Sidebar } from "./components/sidebar";
import { Checkout } from "./pages/checkout";
import { Petshop } from "./pages/petshop";
import { Home } from "./pages/home";

export const AppRoutes = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/petshop/:id" element={<Petshop />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/cadastro" element={<Signup />} />
        </Routes>
        <Sidebar />
      </Router>
    </>
  );
};
