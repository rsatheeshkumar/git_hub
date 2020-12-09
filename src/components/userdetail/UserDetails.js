import React, { useEffect } from "react";

import "./userDetails.scss";
import { connect } from "react-redux";
import { getDetail } from "./actions";

const UserDetails = ({ login, getDetail, userDetail }) => {
  useEffect(() => {
    getDetail(login);
  }, [getDetail, login]);
  // console.log(userDetail);
  return (
    <div className="chat-body">
      <div className="chat-header border-bottom py-4 py-lg-6 px-lg-8">
        <div className="container-xxl">
          <div className="media text-center text-xl-left">
            <div className="avatar">
              <img
                className="avatar-img"
                src={userDetail.avatar_url}
                alt={userDetail.name}
              />
            </div>

            <div className="media-body align-self-center text-truncate">
              <h6 className="text-truncate mb-n1">{userDetail.name}</h6>
            </div>
          </div>
        </div>
      </div>
      <div className="chat-content px-lg-8">
        <div className="card">
          <img className="card-img" src={userDetail.avatar_url} alt="..." />
          <div className="card-body">
            <h5 className="card-title">Details</h5>
            <p className="card-text">
              events url :{" "}
              <a href="{userDetail.events_url}">{userDetail.events_url}</a>
            </p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              {" "}
              followers :{userDetail.followers}
            </li>
            <li className="list-group-item">
              following :{userDetail.following}
            </li>
            <li className="list-group-item">
              {" "}
              GitHub Url :<a href="{userDetail.url}">{userDetail.url}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ detailReducer }) => {
  // console.log(detailReducer);
  return {
    userDetail: detailReducer.userDetail,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getDetail: (login) => dispatch(getDetail(login)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserDetails);
