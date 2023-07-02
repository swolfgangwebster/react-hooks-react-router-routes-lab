import React from "react";
import ReactDOM from "react-dom";
/* Add NavLink to import */
import { BrowserRouter, Route, NavLink, Switch } from "react-router-dom";

function NavBar() {
  return <div className="navbar">
    <NavLink to="/">Home</NavLink>
    <NavLink to="/Actors">Actors</NavLink>
    <NavLink to="/Directors">Directors</NavLink>
    <NavLink to="/Movies">Movies</NavLink>
  </div>;
}

export default NavBar;
