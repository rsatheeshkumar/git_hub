import React from "react";
import { connect } from "react-redux";

import Profile from "./curren-page/Profile";
import Repositories from "./curren-page/Repositories";

// `users/${userDetail.mojombo}/repos`

const Overview = ({ userDetail }) => <h1>Overview PAge</h1>;
const Project = ({ userDetail }) => <h1>Project PAge</h1>;

const CurrentPage = ({ currentPage, userDetail }) => {
  console.log(userDetail);
  switch (currentPage) {
    case "profile":
      return <Profile userDetail={userDetail} />;
    case "overview":
      return <Overview userDetail={userDetail} />;
    case "repos":
      return <Repositories login={userDetail.login} />;
    case "projects":
      return <Project userDetail={userDetail} />;
    default:
      return <Profile userDetail={userDetail} />;
  }
};

const mapStateToProps = ({ detailReducer }) => {
  return {
    userDetail: detailReducer.userDetail,
  };
};

export default connect(mapStateToProps)(CurrentPage);
