import React, { Component } from "react";

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">Navbar</span>
        <span className="badge badge-secondary badge-pill">
          {props.totalCount}
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
