import React from "react";

export default function search(props) {
  const { handleSearchFilter } = props;

  function handleChange(e) {
    const value = e.target.value;
    handleSearchFilter(value);
  }
  return (
    <div>
      <div className="search-bar">
        <span role="img" aria-label="search-icon">
          🔍
        </span>
        <input
          className="search-bar"
          placeholder="Search for Products..."
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
