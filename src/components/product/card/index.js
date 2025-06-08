import "./styles.css";

export const ProductCard = () => {
  return (
    <div className="product-card">
      <div className="image-container">
        <img
          src="https://m.media-amazon.com/images/I/81pj-xtGXsL._AC_UF1000,1000_QL80_.jpg"
          className="img-fluid"
        />
        <button className="add-btn">+</button>
      </div>
      <h4>
        <label className="badge badge-primary">R$90,80</label>
      </h4>
      <small>
        <b>Ração Pedigree Raças Pequenas Adulto - 10,1KG</b>
      </small>
    </div>
  );
};
