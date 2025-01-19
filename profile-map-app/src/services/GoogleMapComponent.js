import React, { useEffect, useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { geocodeAddress } from "../services/mapService";
import Loader from "./Loader"; // Import the loader component

const containerStyle = {
  width: "100%",
  height: "400px",
};

const GoogleMapComponent = ({ address }) => {
  const [coordinates, setCoordinates] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (address) {
      setLoading(true);
      setError(null);
      geocodeAddress(address)
        .then(({ lat, lng }) => setCoordinates({ lat, lng }))
        .catch((err) => setError(err.message))
        .finally(() => setLoading(false));
    }
  }, [address]);

  return (
    <div>
      {loading && <Loader />}
      {error && (
        <p style={{ color: "red" }}>
          Error: {error}. Please check the address and try again.
        </p>
      )}
      {!loading && !error && coordinates && (
        <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
          <GoogleMap mapContainerStyle={containerStyle} center={coordinates} zoom={12}>
            <Marker position={coordinates} />
          </GoogleMap>
        </LoadScript>
      )}
    </div>
  );
};

export default GoogleMapComponent;
