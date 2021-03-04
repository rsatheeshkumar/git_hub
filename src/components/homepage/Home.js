import React from "react";

import { Route, Switch } from "react-router-dom";

import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";
import Mainbar from "../mainbar/Mainbar";

import "./home.scss";

const Home = () => (
  <div className="layout">
    <Navbar />
    <Sidebar />
    <Switch>
      <Route path="/users/:login" component={Mainbar} />
    </Switch>
  </div>
);

export default Home;
