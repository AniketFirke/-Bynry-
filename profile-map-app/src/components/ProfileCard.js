import React from "react";
import { Link } from "react-router-dom";

const ProfileCard = ({ profile }) => {
  return (
    <div className="profile-card">
      <img src={profile.photo} alt={`${profile.name}`} />
      <h3>{profile.name}</h3>
      <p>{profile.description}</p>
      <Link to={`/profile/${profile.id}`}>
        <button>View Details</button>
      </Link>
    </div>
  );
};

export default ProfileCard;
