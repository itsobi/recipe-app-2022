import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [term, setTerm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/searched/" + term);
    setTerm("");
  };

  return (
    <div>
      <form className="ui huge form" onSubmit={handleSubmit}>
        <div className="six wide field">
          <input
            type="text"
            placeholder="Search for recipe..."
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
