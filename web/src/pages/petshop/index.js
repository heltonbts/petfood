import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { requestPetshop } from "../../store/modules/shop/actions.js";

import { Header } from "../../components/header/index.js";
import { ProductCard } from "../../components/product/card/index.js";
import "./styles.css";

export const Petshop = ({ match }) => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { petshop } = useSelector((state) => state.shop);

  useEffect(() => {
    if (id) {
      dispatch(requestPetshop(id));
    }
  }, [dispatch, id]);
  return (
    <div className="h-100">
      <Header />

      <div className="container">
        <div className="row">
          <div className="col-2">
            <img
              src={petshop.logo}
              className="img-fluid petshop-image"
              alt="PetLove"
            />
            <b>{petshop.nome}</b>
            <div className="petshop-infos">
              <span className="mdi mdi-star"></span>
              <span>
                <b>2,8</b>
              </span>
              <span className="mdi mdi-cash"></span>
              <span>$$$</span>
              <span className="mdi mdi-crosshairs-gps"></span>
              <span>2,8km</span>
            </div>
            <label className="badge badge-primary">Frete Grátis</label>
          </div>
          <div className="col-10">
            <h5>Produtos</h5>
            <div className="row">
              {petshop?.products?.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
              {console.log(petshop, "petshop completo")}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
