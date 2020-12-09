import React from "react";

// import { FiSearch } from "react-icons/fi";
// import UserCard from "../usercard/UserCard";

import SearchField from "../search/SearchField";
import UserList from "../user-list/UserList";

import "./sidebar.scss";

const Sidebar = () => (
  <div className="sidebar">
    <div className="tab-content h-100">
      <div className="d-flex flex-column h-100">
        <div className="hide-scrollbar">
          <div className="container-fluid">
            <h2 className="font-bold mb-6">Users</h2>
            <SearchField />
            <UserList />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Sidebar;
