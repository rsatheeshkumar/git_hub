import React, { useEffect } from "react";
import { connect } from "react-redux";
import Repo from "./Repo";

import { getRepo } from "./repoAction";

import "./repositories.scss";

const Repositories = ({ repos, onGetRepo, login }) => {
  // console.log(repos);
  useEffect(() => {
    onGetRepo(login);
  }, [onGetRepo, login]);
  return (
    <div className="page-inner">
      <div className="page-section">
        <div className="masonry-layout">
          {/* <Repo /> */}
          {repos.map((repo) => {
            return <Repo key={repo.id} repo={repo} />;
          })}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ repoReducer }) => {
  // console.log(repoReducer);
  return {
    repos: repoReducer.userRepo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetRepo: (login) => dispatch(getRepo(login)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Repositories);
