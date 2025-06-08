import "./styles.css";

export const Product = () => {
  return (
    <div className="product-list col-12">
      <div className="row align-items-center">
        {" "}
        <div className="col-3">
          <img
            src="https://images.petz.com.br/fotos/1658430805995.jpg"
            className="img-fluid"
            alt="Produto"
          />
        </div>
        <div className="col-6">
          <h6>
            <span className="badge bg-primary">R$30,00</span>{" "}
          </h6>
          <small>
            <b>Nome do Produto</b>
          </small>
        </div>
        <div className="col-3 d-flex justify-content-center">
          {" "}
          <button className="btn btn-secondary rounded-circle">-</button>
        </div>
      </div>
    </div>
  );
};
