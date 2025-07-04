import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

// Container style for the map
const containerStyle = {
  width: "100%",
  height: "400px",
};

// Center position for the map
const center = {
  lat: 28.6139, // Example: New Delhi
  lng: 77.209,  // Example: New Delhi
};

const MapComponent = () => {
  return (
    <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        {/* Marker at center */}
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
