// import { array } from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

import DropDown from "./DropDown";

import "./repo.scss";

const Repo = ({ repo }) => {
  // console.log(repo);
  return (
    <div className="masonry-item col-lg-6">
      <div className="card card-fluid">
        <div className="card-body">
          <div className="d-flex flex-row">
            <Link
              to="page-team.html"
              className="user-avatar user-avatar-lg mr-3"
            >
              <img src="assets/images/avatars/team4.jpg" alt="" />
            </Link>
            <div className="media-body">
              <h3 className="card-title">
                <Link to="page-team.html">{repo.name.toUpperCase()}</Link>
              </h3>
              <h6 className="card-subtitle text-muted"> {repo.language} </h6>
            </div>
            <div className="drop-down">
              <DropDown repo={repo} />
            </div>
          </div>
          <p>
            We make stunning and cool responsive web and app design which
            suitable for any project purpose for your business.
          </p>

          <div className="card-footer">
            <Link
              to="#"
              className="card-footer-item card-footer-item-bordered text-muted"
            >
              <strong>{repo.default_branch}</strong>
              <span className="d-block">Branch</span>
            </Link>
            <Link
              to="#"
              className="card-footer-item card-footer-item-bordered text-muted"
            >
              <strong>{repo.forks}</strong>
              <span className="d-block">Forks</span>
            </Link>
            <Link
              to="#"
              className="card-footer-item card-footer-item-bordered text-muted"
            >
              <strong>{repo.watchers}</strong>
              <span className="d-block">Watchers</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Repo;
