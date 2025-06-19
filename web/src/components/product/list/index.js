import "./styles.css";
import { useSelector, useDispatch } from "react-redux";
import { toggleCartProduct } from "../../../store/modules/shop/actions";

export const Product = ({ product }) => {
  const dispath = useDispatch();

  return (
    <div className="product-list col-12">
      <div className="row align-items-center">
        {" "}
        <div className="col-3">
          <img src={product.capa} className="img-fluid" alt={product.nome} />
        </div>
        <div className="col-6">
          <h6>
            <span className="badge bg-primary">
              R${parseFloat(product.preco).toFixed(2).replace(".", ",")}
            </span>{" "}
          </h6>
          <small>
            <b>{product.nome}</b>
          </small>
        </div>
        <div className="col-3 d-flex justify-content-center">
          {" "}
          <button
            onClick={() => dispath(toggleCartProduct(product))}
            className="btn btn-secondary rounded-circle"
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
};
