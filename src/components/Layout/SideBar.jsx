import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const SideBar = ({ id }) => {
  return (
    <div className="sidebar_links">
      <NavLink to={`/product/table/${id}`}>{id}</NavLink>
    </div>
  );
};

export default SideBar;
