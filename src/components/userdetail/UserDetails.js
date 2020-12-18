import React, { useEffect, useState } from "react";

// import { Switch, Route, useRouteMatch, Link } from "react-router-dom";
import { Spinner, Alert } from "reactstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import UserDetailCard from "./userdetailcard/UserDetailCard";
import UserDetailNav from "./user-detail-nav/UserDetailNav";
// import Repos from "../userdetailpage/Repos";
import CurrentPage from "./CurrentPage";

import { getDetail } from "./actions";

import "./userDetails.scss";

const UserDetails = ({ login, getDetail, userDetail, loading, error }) => {
  const [currentPage, setCurrentPage] = useState("profile");

  // console.log(userDetail);

  const navigateTo = (newPage) => {
    setCurrentPage(newPage);
  };

  useEffect(() => {
    getDetail(login);
  }, [getDetail, login]);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center p-5">
        <Spinner color="primary" />
      </div>
    );
  }
  if (error) {
    return (
      <Alert color="danger" className="text-center">
        Something went wrong
      </Alert>
    );
  }

  return (
    <div className="page">
      <UserDetailCard userDetail={userDetail} />
      <UserDetailNav navigateTo={navigateTo} />
      <CurrentPage currentPage={currentPage} />
    </div>
  );
};

UserDetails.propTypes = {
  userDetail: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  getDetail: PropTypes.func.isRequired,
};

const mapStateToProps = ({ detailReducer }) => {
  return {
    userDetail: detailReducer.userDetail,
    loading: detailReducer.loading,
    error: detailReducer.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getDetail: (login) => dispatch(getDetail(login)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserDetails);
