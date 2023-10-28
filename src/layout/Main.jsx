import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

const Main = () => {
  return (
    <div className="container">
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
