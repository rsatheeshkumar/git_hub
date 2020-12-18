import React from "react";
import { GoRepo } from "react-icons/go";
import { BsBook } from "react-icons/bs";
import { AiFillProject } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";

// import { Link } from "react-router-dom";
import "./userDetailNav.scss";

const UserDetailNav = ({ navigateTo }) => {
  return (
    <nav className="page-navs">
      <div className="nav-scroller">
        <div className="nav nav-center nav-tabs">
          <div
            className="nav-link_details"
            onClick={() => navigateTo("profile")}
          >
            <span className="badge">
              <CgProfile />
            </span>
            Profile
          </div>
          <div
            className="nav-link_details"
            onClick={() => navigateTo("overview")}
          >
            <span className="badge">
              <BsBook />
            </span>
            Overview
          </div>
          <div className="nav-link_details" onClick={() => navigateTo("repos")}>
            <span className="badge">
              <GoRepo />
            </span>
            Repositories
          </div>
          <div
            className="nav-link_details"
            onClick={() => navigateTo("projects")}
          >
            <span className="badge">
              <AiFillProject />
            </span>
            Projects
          </div>
        </div>
      </div>
    </nav>
  );
};
export default UserDetailNav;
