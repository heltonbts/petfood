import "./styles.css";

import MarkerIcon from "../../assets/marker-white.png";
import MarketIconSelect from "../../assets/marker.png";

export const Marker = () => {
  return (
    <div className="">
      <img src={MarkerIcon} />
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVzcc036XRmOP3HcN3sXuC2mBQcCzWWTCPjw&s"
        className="img-marker"
      />
    </div>
  );
};
