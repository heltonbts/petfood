import { Header } from "../../components/header/index.js";

import Illustration from "../../assets/illustration.png";

export const Signup = () => {
  return (
    <div className="container-fluid h-100 bg-primary">
      <Header />
      <div className="row">
        <div className="col-6 text-right my-auto">
          <img src={Illustration} className="img-fluid" />
        </div>
        <div className="col-6">
          <div className="box col-8">
            <h2 className="text-center">
              Falta pouco para fazer o seu pet feliz
            </h2>
            <br></br>
            <br></br>
            <input
              type="text"
              className="form-control form-control-lg mb-3"
              placeholder="Nome Completo"
            ></input>
            <input
              type="text"
              className="form-control form-control-lg mb-3"
              placeholder="E-mail"
            ></input>
            <input
              type="text"
              className="form-control form-control-lg mb-3"
              placeholder="Telefone"
            ></input>
            <input
              type="text"
              className="form-control form-control-lg mb-3"
              placeholder="CPF"
            ></input>
            <input
              type="date"
              className="form-control form-control-lg mb-3"
              placeholder="dd/mm/aaaa"
            ></input>

            <button className="btn btn-lg btn-block btn-secondary w-100">
              Finalizar Pedido
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
