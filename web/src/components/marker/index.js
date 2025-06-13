import "./styles.css";

import MarkerIcon from "../../assets/marker-white.png";
import MarketIconSelect from "../../assets/marker.png";

export const Marker = ({ petshop }) => {
  return (
    <div className="">
      <img src={MarkerIcon} />
      <img src={petshop.logo} className="img-marker" />
    </div>
  );
};
