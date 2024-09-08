// src/components/Mapa.js
import React from 'react';
import { LoadScript, GoogleMap } from '@react-google-maps/api';

const Mapa = () => {
  const mapContainerStyle = {
    height: "400px",
    width: "100%"
  };

  const center = {
    lat: -23.55052, // Latitude inicial
    lng: -46.633308  // Longitude inicial
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyD-29cySZiYVntaVsZ9I9hv0HSez_0EblM">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={10}
      >
        {/* Outros componentes e marcadores do mapa */}
      </GoogleMap>
    </LoadScript>
  );
}

export default Mapa;
