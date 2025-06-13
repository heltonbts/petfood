// Arquivo: src/pages/Signup/index.js

import { Header } from "../../components/header/index.js";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setCustom } from "../../store/modules/shop/actions.js";
import Illustration from "../../assets/illustration.png";

export const Signup = () => {
  const dispatch = useDispatch();

  // ✅ PASSO 1: O NOME DA FUNÇÃO FOI ALTERADO AQUI PARA "setCustomerData"
  const [customer, setCustomerData] = useState({
    external_id: new Date().getTime().toString(),
    name: "",
    type: "individual",
    country: "br",
    email: "",
    documents: [
      {
        type: "cpf",
        number: "",
      },
    ],
    phone_numbers: "",
    birthday: "",
  });

  // ✅ PASSO 3: O DISPATCH AGORA FUNCIONARÁ CORRETAMENTE
  const goToCheckout = () => {
    dispatch(setCustom(customer));
  };

  return (
    <div className="container-fluid h-100 bg-primary">
      <Header whiteVersion hasSidebar />
      <div className="row">
        <div className="col-6 text-right my-auto">
          <img src={Illustration} className="img-fluid" alt="Illustration" />
        </div>
        <div className="col-6">
          <div className="box col-8">
            <h2 className="text-center">
              Falta pouco para fazer o seu pet feliz
            </h2>
            <br />
            <br />
            {/* ✅ PASSO 2: USAR "setCustomerData" EM TODOS OS INPUTS */}
            <input
              type="text"
              className="form-control form-control-lg mb-3"
              placeholder="Nome Completo"
              onChange={(e) => {
                setCustomerData({ ...customer, name: e.target.value });
              }}
            />
            <input
              type="text"
              className="form-control form-control-lg mb-3"
              placeholder="E-mail"
              onChange={(e) => {
                setCustomerData({ ...customer, email: e.target.value });
              }}
            />
            {/* ... E ASSIM POR DIANTE PARA OS OUTROS INPUTS ... */}
            <input
              type="text"
              className="form-control form-control-lg mb-3"
              placeholder="Telefone"
              onChange={(e) => {
                setCustomerData({
                  ...customer,
                  phone_numbers: [e.target.value],
                });
              }}
            />
            <input
              type="text"
              className="form-control form-control-lg mb-3"
              placeholder="CPF"
              onChange={(e) => {
                setCustomerData({
                  ...customer,
                  documents: [
                    {
                      type: "cpf",
                      number: e.target.value,
                    },
                  ],
                });
              }}
            />
            <input
              type="date"
              className="form-control form-control-lg mb-3"
              placeholder="dd/mm/aaaa"
              onChange={(e) => {
                setCustomerData({ ...customer, birthday: e.target.value });
              }}
            />
            <button
              onClick={goToCheckout}
              className="btn btn-lg btn-block btn-secondary w-100"
            >
              Finalizar Pedido
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
