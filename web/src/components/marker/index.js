import "./styles.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import MarkerIcon from "../../assets/marker-white.png";
import MarketIconSelect from "../../assets/marker.png";

export const Marker = ({ petshop }) => {
  const { petshopMapSelected } = useSelector((state) => state.shop);
  console.log("teste", petshopMapSelected);

  return (
    <Link to={`/petshop/${petshop._id}`} className="marker-link">
      <div className="">
        <img
          src={
            petshopMapSelected === petshop._id ? MarketIconSelect : MarkerIcon
          }
        />
        <img src={petshop.logo} className="img-marker" />
      </div>
    </Link>
  );
};
