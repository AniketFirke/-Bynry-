import React from "react";
import { useParams } from "react-router-dom";
import { profiles } from "../services/mockData";

const ProfileDetails = () => {
  const { id } = useParams();
  const profile = profiles.find((p) => p.id === parseInt(id));

  if (!profile) return <p>Profile not found!</p>;

  return (
    <div className="profile-details">
      <h2>{profile.name}</h2>
      <img src={profile.photo} alt={profile.name} />
      <p><strong>Description:</strong> {profile.description}</p>
      <p><strong>Details:</strong> {profile.details}</p>
      <p><strong>Address:</strong> {profile.address}</p>
      <p><strong>Contact:</strong></p>
      <ul>
        <li>Email: {profile.contact.email}</li>
        <li>Phone: {profile.contact.phone}</li>
      </ul>
      <p><strong>Interests:</strong></p>
      <ul>
        {profile.interests.map((interest, index) => (
          <li key={index}>{interest}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProfileDetails;
