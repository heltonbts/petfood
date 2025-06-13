import "./styles.css";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Header } from "../../components/header";
import { Places } from "../../components/places";
import { Maps } from "../../components/maps";

import { requestPetshops } from "../../store/modules/shop/actions";

export const Home = () => {
  const shopState = useSelector((state) => state.shop);
  const dispatch = useDispatch();
  const { petshops } = useSelector((state) => state.shop);

  useEffect(() => {
    dispatch(requestPetshops());
  }, []);

  console.log('ESTADO ATUAL DO "SHOP" NO MOMENTO DA RENDERIZAÇÃO:', shopState);

  return (
    <div className="h-100 home-cont">
      <Header />
      <div className="container-fluid petshop-list-container">
        <div className="col-12 px-4 text-center">
          <h5>Mais próximos de você ({petshops.petshops.length})</h5>
        </div>
        <ul className="col-12 petshop-list">
          {petshops.petshops.map((p) => (
            <Places />
          ))}
        </ul>
      </div>
      <Maps />
    </div>
  );
};
