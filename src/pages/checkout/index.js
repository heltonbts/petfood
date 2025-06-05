import { Header } from "../../components/header/index.js";
import { Product } from "../../components/product/list/index.js";

import "./styles.css";

export const Checkout = () => {
  return (
    <div classname="h-100">
      <Header />
      <div className="container mt-4">
        <div className="row">
          <div className="col-6">
            <span className="section-title">Dados de Entregas</span>
            <div className="row mb-3">
              <div className="col-12">
                <input
                  type="text"
                  placeholder="CEP"
                  className="form-control form-control-lg"
                ></input>
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-9">
                <input
                  type="text"
                  placeholder="Cidade"
                  className="form-control form-control-lg"
                ></input>
              </div>
              <div className="col-3 pl-0">
                <input
                  type="text"
                  placeholder="UF"
                  className="form-control form-control-lg"
                ></input>
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-9">
                <input
                  type="text"
                  placeholder="Lougradouro"
                  className="form-control form-control-lg"
                ></input>
              </div>
              <div className="col-3 pl-0">
                <input
                  type="text"
                  placeholder="Nº"
                  className="form-control form-control-lg"
                ></input>
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-6">
                <input
                  type="text"
                  placeholder="Bairro"
                  className="form-control form-control-lg"
                ></input>
              </div>
              <div className="col-6 pl-0">
                <input
                  type="text"
                  placeholder="Complemento"
                  className="form-control form-control-lg"
                ></input>
              </div>
            </div>

            <span className="section-title">Dados de Entregas</span>
            <div className="row mb-3">
              <div className="col-12">
                <input
                  type="text"
                  placeholder="Numero do Cartão"
                  className="form-control form-control-lg"
                ></input>
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-6">
                <input
                  type="text"
                  placeholder="Validade"
                  className="form-control form-control-lg"
                ></input>
              </div>
              <div className="col-6 pl-0">
                <input
                  type="text"
                  placeholder="CVV"
                  className="form-control form-control-lg"
                ></input>
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-6">
                <input
                  type="text"
                  placeholder="Nome do Titular"
                  className="form-control form-control-lg"
                ></input>
              </div>
              <div className="col-6 pl-0">
                <input
                  type="text"
                  placeholder="CPF/CNPJ do Titular"
                  className="form-control form-control-lg"
                ></input>
              </div>
            </div>

            <div className="row mt-4 ">
              <div className="col-12 d-flex justify-content-between align-items-center">
                <b>Total</b>
                <h3>R$30,00</h3>
              </div>

              <div className="col-12">
                <button className="btn btn-block btn-lg btn-primary w-100">
                  Finalizar Pedido
                </button>
              </div>
            </div>
          </div>

          <div className="col-6">
            <div className="box col mb-4">
              <h5>Minha Sacola (3)</h5>

              <div className="row products">
                <Product />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
