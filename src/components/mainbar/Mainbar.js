import React from "react";
import { withRouter } from "react-router-dom";

import UserDetails from "../userdetail/UserDetails";

import "./mainbar.scss";

const Mainbar = ({ match }) => {
  // console.log({ match });
  return (
    <div className="main w-100">
      <UserDetails login={match.params.login} />
    </div>
  );
};

export default withRouter(Mainbar);
