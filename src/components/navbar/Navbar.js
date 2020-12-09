import React from "react";
import { FiUsers, FiTrendingUp } from "react-icons/fi";
import { Link } from "react-router-dom";
import "./navbar.scss";

const Navbar = () => (
  <div className="navigation navbar navbar-light  justify-content-start">
    <Link to="/" className="mb-6">
      <img
        src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
        alt="logo"
        width="46"
        height="46"
      />
    </Link>
    <ul className="nav navbar-nav flex-column">
      <li className="nav-item">
        <Link className="nav-link" to="/">
          <FiUsers />
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/trending">
          <FiTrendingUp />
        </Link>
      </li>
    </ul>
  </div>
);
export default Navbar;
