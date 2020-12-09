import React from "react";

import { FiSearch } from "react-icons/fi";
import "./searchfield.scss";

const SearchField = () => (
  <form className="mb-6">
    <div className="input-group align-items-center">
      <input
        type="text"
        className="form-control form-control-lg"
        placeholder="Search for users..."
        aria-label="Search for users..."
      />
      <div className="input-group-append">
        <button
          className="btn btn-lg btn-icon bg-white border-right border-top border-bottom"
          type="submit"
        >
          <FiSearch />
        </button>
      </div>
    </div>
  </form>
);

export default SearchField;
