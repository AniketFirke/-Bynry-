import React, { useState } from "react";
import Loader from "./Loader";

const AdminPanel = ({ profiles, setProfiles }) => {
  const [newProfile, setNewProfile] = useState({
    id: null,
    name: "",
    photo: "",
    description: "",
    address: "",
    details: "",
  });

  const [editingId, setEditingId] = useState(null);
  const [formError, setFormError] = useState("");
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    if (!newProfile.name) return "Name is required.";
    if (!newProfile.photo) return "Photo URL is required.";
    if (!newProfile.address) return "Address is required.";
    if (!newProfile.description) return "Description is required.";
    return null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const error = validateForm();
    if (error) {
      setFormError(error);
      return;
    }

    setLoading(true); // Start loading
    setFormError("");

    setTimeout(() => {
      if (editingId) {
        setProfiles((prevProfiles) =>
          prevProfiles.map((profile) =>
            profile.id === editingId ? { ...profile, ...newProfile } : profile
          )
        );
        setEditingId(null);
      } else {
        setProfiles((prevProfiles) => [
          ...prevProfiles,
          { ...newProfile, id: Date.now() },
        ]);
      }
      setNewProfile({ id: null, name: "", photo: "", description: "", address: "", details: "" });
      setLoading(false); // Stop loading
    }, 500); // Simulate network delay
  };

  const handleEdit = (profile) => {
    setEditingId(profile.id);
    setNewProfile(profile);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this profile?")) {
      setProfiles((prevProfiles) => prevProfiles.filter((profile) => profile.id !== id));
    }
  };

  return (
    <div className="admin-panel">
      <h2>{editingId ? "Edit Profile" : "Add Profile"}</h2>
      {formError && <p style={{ color: "red" }}>{formError}</p>}
      {loading ? (
        <Loader />
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={newProfile.name}
            onChange={(e) => setNewProfile({ ...newProfile, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Photo URL"
            value={newProfile.photo}
            onChange={(e) => setNewProfile({ ...newProfile, photo: e.target.value })}
          />
          <input
            type="text"
            placeholder="Description"
            value={newProfile.description}
            onChange={(e) => setNewProfile({ ...newProfile, description: e.target.value })}
          />
          <input
            type="text"
            placeholder="Address"
            value={newProfile.address}
            onChange={(e) => setNewProfile({ ...newProfile, address: e.target.value })}
          />
          <textarea
            placeholder="Details"
            value={newProfile.details}
            onChange={(e) => setNewProfile({ ...newProfile, details: e.target.value })}
          />
          <button type="submit">{editingId ? "Update Profile" : "Add Profile"}</button>
        </form>
      )}
      <ul>
        {profiles.map((profile) => (
          <li key={profile.id}>
            <strong>{profile.name}</strong>
            <button onClick={() => handleEdit(profile)}>Edit</button>
            <button onClick={() => handleDelete(profile.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPanel;
