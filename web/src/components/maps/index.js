import "./styles.css";
import GoogleMapReact from "google-map-react";
import { Marker } from "../marker";
import { useSelector } from "react-redux";

export const Maps = ({ petshops }) => {
  const { mapCenter } = useSelector((state) => state.shop);

  const apiKey = process.env.REACT_APP_GOOGLE_MAPS_KEY;
  return (
    <div className="container-map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: apiKey }}
        center={mapCenter}
        defaultZoom={15}
      >
        {petshops.map((p) => (
          <Marker
            petshop={p}
            key={p._id}
            lat={p.location.lat}
            lng={p.location.lng}
          />
        ))}
      </GoogleMapReact>
    </div>
  );
};
