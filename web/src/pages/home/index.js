import "./styles.css";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Header } from "../../components/header";
import { Places } from "../../components/places";
import { Maps } from "../../components/maps";

import {
  requestPetshops,
  setMapCenter,
  setShopMapSelected,
} from "../../store/modules/shop/actions";

export const Home = () => {
  const dispatch = useDispatch();
  const { petshops } = useSelector((state) => state.shop);

  useEffect(() => {
    dispatch(requestPetshops());
  }, [dispatch]);

  const handlePetshopClick = (petshop) => {
    dispatch(setShopMapSelected(petshop));
    dispatch(setMapCenter(petshop.location));
  };

  if (!petshops || !petshops.petshops || petshops.petshops.length === 0) {
    return (
      <div className="h-100 home-cont">
        <Header />
        <div className="container-fluid d-flex justify-content-center align-items-center">
          <p>Carregando petshops...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-100 home-cont">
      <Header />
      <div className="container-fluid petshop-list-container">
        <div className="col-12 px-4 text-center">
          <h5>Mais próximos de você ({petshops.petshops.length})</h5>
        </div>
        <ul className="col-12 petshop-list">
          {petshops.petshops.map((p) => (
            <Places key={p._id} petshop={p} onClick={handlePetshopClick} />
          ))}
        </ul>
      </div>
      <Maps petshops={petshops.petshops} />
    </div>
  );
};
