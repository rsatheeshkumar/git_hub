import React from "react";
import { Link } from "react-router-dom";

import "./userCard.scss";

const UserCard = ({ user }) => (
  <nav className="nav d-block mb-n6">
    <div className="text-reset nav-link p-0 mb-6">
      <div className="card">
        <div className="card-body">
          <Link to={`/users/${user.login}`}>
            <div className="avatar">
              <img
                className="avatar-img"
                src={user.avatar_url}
                alt={user.login}
              />
              <h6 className="text-truncate mb-0 mr-auto text-dark">
                {user.login}
              </h6>
            </div>
          </Link>
        </div>
      </div>
    </div>
  </nav>
);

export default UserCard;
