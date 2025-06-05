import { useState, useEffect } from "react";
import { Dock } from "react-dock";

import "./styles.css";
import { Product } from "../../components/product/list/index.js";

export const Sidebar = () => {
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
        <h5>Minha Sacola (5)</h5>
        <div className="row products-cards">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((p) => (
            <Product key={p} />
          ))}
        </div>
      </div>
    </Dock>
  );
};
