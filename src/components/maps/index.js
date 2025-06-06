import "./styles.css";
import GoogleMapReact from "google-map-react";
import { Marker } from "../marker";

export const Maps = () => {
  return (
    <div className="container-map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBiZIDfKa-Ch1o6n9dkSybQkC5AKemD4sE" }}
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
