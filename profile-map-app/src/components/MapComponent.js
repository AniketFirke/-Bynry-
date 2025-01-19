import React, { useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import { geocodeAddress } from "../services/mapService";

mapboxgl.accessToken = "YOUR_MAPBOX_ACCESS_TOKEN";

const MapComponent = ({ address }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-74.006, 40.7128], // Default center (New York City)
      zoom: 10,
    });

    if (address) {
      geocodeAddress(address)
        .then(({ longitude, latitude }) => {
          // Add marker and adjust map
          new mapboxgl.Marker()
            .setLngLat([longitude, latitude])
            .addTo(map);
          map.setCenter([longitude, latitude]);
          map.setZoom(12);
          setLoading(false);
        })
        .catch((err) => {
          setError("Unable to load the map for this address.");
          setLoading(false);
          console.error(err);
        });
    }

    return () => map.remove(); // Cleanup
  }, [address]);

  return (
    <div>
      {loading && <p>Loading map...</p>}
      <div id="map" style={{ width: "100%", height: "400px" }}></div>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default MapComponent;
