import axios from "axios";

const GOOGLE_MAPS_API_KEY = "YOUR_GOOGLE_MAPS_API_KEY";

/**
 * Geocode an address using Google Maps Geocoding API.
 * @param {string} address - The address to geocode.
 * @returns {Promise<object>} - The coordinates (latitude and longitude) of the address.
 */
export const geocodeAddress = async (address) => {
  try {
    if (!address) {
      throw new Error("Address cannot be empty.");
    }

    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/geocode/json`,
      {
        params: {
          address,
          key: GOOGLE_MAPS_API_KEY,
        },
      }
    );

    if (response.data.status === "ZERO_RESULTS") {
      throw new Error("No results found for the given address.");
    } else if (response.data.status !== "OK") {
      throw new Error(`Geocoding error: ${response.data.status}`);
    }

    const location = response.data.results[0]?.geometry?.location;
    if (!location) {
      throw new Error("Unable to extract location data.");
    }

    return { lat: location.lat, lng: location.lng };
  } catch (error) {
    console.error("Geocoding Error:", error.message);
    throw error; // Re-throw error for handling in the calling component
  }
};
