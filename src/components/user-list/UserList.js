import React, { useEffect } from "react";
import { connect } from "react-redux";

import UserCard from "../user-card/UserCard";
import { getUsers } from "./actions";

const UserList = ({ users, getUsers }) => {
  useEffect(() => {
    getUsers();
  }, [getUsers]);

  return (
    <nav className="nav d-block mb-n6">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </nav>
  );
};

const mapStateToProps = (state) => ({
  users: state.userReducer.users,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getUsers: () => dispatch(getUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
