import "./styles.css";
import GoogleMapReact from "google-map-react";
import { Marker } from "../marker";

export const Maps = () => {
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_KEY;
  return (
    <div className="container-map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: apiKey }}
        center={{
          lat: -4.5619444444444,
          lng: -37.77,
        }}
        defaultZoom={15}
      >
        <Marker lat={-4.5619444444444} lng={-37.77} />
      </GoogleMapReact>
    </div>
  );
};
