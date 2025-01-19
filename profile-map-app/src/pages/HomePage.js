import React, { useState } from "react";
import ProfileList from "../components/ProfileList";
import GoogleMapComponent from "../components/MapComponent";
import SearchFilter from "../components/SearchFilter";
import AdminPanel from "../components/AdminPanel";
import Loader from "../components/Loader";
import { profiles as mockProfiles } from "../services/mockData";

const HomePage = () => {
  const [profiles, setProfiles] = useState(mockProfiles);
  const [filteredProfiles, setFilteredProfiles] = useState(mockProfiles);
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [showAdminPanel, setShowAdminPanel] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSearch = (filters) => {
    setLoading(true); // Start loading
    const { name, location } = filters;

    const filtered = profiles.filter((profile) => {
      const matchesName = name
        ? profile.name.toLowerCase().includes(name.toLowerCase())
        : true;
      const matchesLocation = location
        ? profile.address.toLowerCase().includes(location.toLowerCase())
        : true;
      return matchesName && matchesLocation;
    });

    setTimeout(() => {
      setFilteredProfiles(filtered);
      setLoading(false); // Stop loading
    }, 500); // Simulate network delay
  };

  const handleSummaryClick = (profile) => {
    setSelectedProfile(profile);
  };

  return (
    <div className="container">
      <button onClick={() => setShowAdminPanel(!showAdminPanel)}>
        {showAdminPanel ? "Hide Admin Panel" : "Show Admin Panel"}
      </button>

      {showAdminPanel ? (
        <AdminPanel profiles={profiles} setProfiles={setProfiles} />
      ) : (
        <>
          <SearchFilter onSearch={handleSearch} />
          {loading ? (
            <Loader />
          ) : filteredProfiles.length > 0 ? (
            <ProfileList
              profiles={filteredProfiles}
              onSummaryClick={handleSummaryClick}
            />
          ) : (
            <p>No profiles found. Try a different search.</p>
          )}
          {selectedProfile && (
            <>
              <div className="profile-summary">
                <h3>Profile Summary</h3>
                <p><strong>Name:</strong> {selectedProfile.name}</p>
                <p><strong>Description:</strong> {selectedProfile.description}</p>
                <p><strong>Details:</strong> {selectedProfile.details}</p>
                <p><strong>Address:</strong> {selectedProfile.address}</p>
              </div>
              <GoogleMapComponent address={selectedProfile.address} />
            </>
          )}
        </>
      )}
    </div>
  );
};

export default HomePage;
