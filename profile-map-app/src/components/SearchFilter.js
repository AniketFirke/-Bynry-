import React, { useState } from "react";

const SearchFilter = ({ onSearch }) => {
  const [filters, setFilters] = useState({
    name: "",
    location: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedFilters = { ...filters, [name]: value };
    setFilters(updatedFilters);
    onSearch(updatedFilters); // Pass updated filters to parent
  };

  return (
    <div className="search-filter">
      <input
        type="text"
        name="name"
        placeholder="Search by name..."
        value={filters.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="location"
        placeholder="Search by location..."
        value={filters.location}
        onChange={handleChange}
      />
      <select name="role" value={filters.role} onChange={handleChange}>
        <option value="">All Roles</option>
        <option value="engineer">Engineer</option>
        <option value="designer">Designer</option>
        <option value="lead">Lead</option>
      </select>

    </div>
  );
};

export default SearchFilter;
