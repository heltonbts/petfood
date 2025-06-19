import "./styles.css";

import { useDispatch, useSelector } from "react-redux";
import { toggleCartProduct } from "../../../store/modules/shop/actions";

export const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.shop);
  const added = cart.findIndex((item) => item._id === product._id) !== -1;

  return (
    <div className="product-card">
      <div className="image-container">
        <img
          src={product.capa}
          className="img-fluid"
          alt={product.name}
          referrerPolicy="no-referrer"
        />
        <button
          onClick={() => dispatch(toggleCartProduct(product))}
          className={`add-btn btn-${added ? "secondary" : "primary"}`}
        >
          {added ? "-" : "+"}
        </button>
      </div>
      <h4>
        <label className="badge badge-primary">
          R${parseFloat(product.preco).toFixed(2).replace(".", ",")}
        </label>
      </h4>
      <small>
        <b>{product.nome}</b>
      </small>
    </div>
  );
};
