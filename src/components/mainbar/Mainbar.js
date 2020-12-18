import React from "react";
import { withRouter } from "react-router-dom";

import UserDetails from "../userdetail/UserDetails";

import "./mainbar.scss";

const Mainbar = ({ match }) => {
  // console.log({ match });
  return (
    <div className="wrapper">
      <UserDetails login={match.params.login} />
    </div>
  );
};

export default withRouter(Mainbar);
