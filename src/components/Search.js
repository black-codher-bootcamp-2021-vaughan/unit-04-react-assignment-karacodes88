import React, { useState } from "react";

const Search = (props) => {
  const [keyword, setKeyword] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    props.findProducts(keyword);
  };
  return (
    <div className = "searchBar">
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>
          Search:
          <input
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
        </label>

        <button> Search </button>

        <p style={{ color: "orange" }}>
          <em>{keyword && "Keywords Typed: " + keyword}</em>
        </p>
      </form>
    </div>
  );
};

export default Search;
