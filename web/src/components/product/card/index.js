import "./styles.css";

export const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className="image-container">
        <img
          src={product.capa}
          className="img-fluid"
          alt={product.name}
          referrerPolicy="no-referrer"
        />
        <button className="add-btn">+</button>
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
