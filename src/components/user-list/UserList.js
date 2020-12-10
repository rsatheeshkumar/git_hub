import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Spinner, Alert } from "reactstrap";
import PropTypes from "prop-types";

import UserCard from "../user-card/UserCard";
import { getUsers } from "./actions";

const UserList = ({ users, loading, error, getUsers }) => {
  useEffect(() => {
    getUsers();
  }, [getUsers]);

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
    <nav className="nav d-block mb-n6">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </nav>
  );
};

UserList.propTypes = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  getUsers: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    users: state.userReducer.users,
    loading: state.userReducer.loading,
    error: state.userReducer.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUsers: () => dispatch(getUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
