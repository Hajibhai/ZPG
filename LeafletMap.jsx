import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix for default marker icon in React + Webpack/Vite
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

// Dubai coordinates
const dubaiPosition = [25.276987, 55.296249];

const LeafletMap = () => {
  return (
    <MapContainer
      center={dubaiPosition}
      zoom={2} // 🔍 Zoomed out to show most of the world
      scrollWheelZoom={false}
      style={{ height: "600px", width: "100%" }} // taller map
    >
      <TileLayer
        attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={dubaiPosition}>
        <Popup>📍 Welcome to Dubai</Popup>
      </Marker>
    </MapContainer>
  );
};

export default LeafletMap;
