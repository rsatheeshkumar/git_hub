import React from "react";
import { Link } from "react-router-dom";
import "./userDetailCard.scss";

const UserDetailCard = ({ userDetail }) => {
  return (
    <header className="page-cover">
      <div className="text-center">
        <a href="user-profile.html" className="user-avatar user-avatar-xl">
          <img
            src={userDetail.avatar_url}
            className="user-avatar img"
            alt="{userDetail.name}"
          />
        </a>
        <h2 className="h4 mt-2 mb-0"> {userDetail.name}</h2>

        <p className="text-muted"> </p>
        <p>
          <a href="website">{userDetail.blog}</a>
        </p>

        <div className="cover-controls cover-controls-bottom">
          <Link
            to="#"
            className="btn btn-light"
            data-toggle="modal"
            data-target="#followersModal"
          >
            {userDetail.followers} Followers
          </Link>
          <Link
            to="#"
            className="btn btn-light"
            data-toggle="modal"
            data-target="#followingModal"
          >
            {userDetail.following} Following
          </Link>
        </div>
      </div>
    </header>
  );
};

export default UserDetailCard;
