import { useState, useEffect } from "react";
import { Dock } from "react-dock";
import { useSelector } from "react-redux";

import "./styles.css";
import { Product } from "../../components/product/list/index.js";

export const Sidebar = () => {
  const { cart } = useSelector((state) => state.shop);
  const total = cart.reduce((acc, product) => {
    return acc + parseFloat(product.preco);
  }, 0);
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    const handleOpenCart = () => {
      setOpened(true);
    };
    window.addEventListener("openCart", handleOpenCart);
    return () => {
      window.removeEventListener("openCart", handleOpenCart);
    };
  }, []);

  return (
    <Dock
      position="right"
      isVisible={opened}
      onVisibleChange={(visible) => {
        setOpened(visible);
      }}
    >
      <div className="container-fluid h-100 pt-4 sidebar">
        <h5>Minha Sacola ({cart.length})</h5>
        <div className="row products-cards">
          {cart.map((p) => (
            <Product key={p._id} product={p} />
          ))}
        </div>
        <div className="row footer align-items-end">
          <div className="col-12 d-flex justify-content-between align-items-center">
            <b className="d-inline-block">Total</b>
            <h3 className="d-inline-block">
              R$ {total.toFixed(2).replace(".", ",")}
            </h3>
          </div>
          <button className="btn btn-block btn-lg btn-primary rounded-0 h-50 align-items-center">
            Finalizar Comprar
          </button>
        </div>
      </div>
    </Dock>
  );
};
