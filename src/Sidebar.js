import React from "react";
import { NavLink } from "react-router-dom";
import { observer } from "mobx-react";

// Logo
import logo from "./assets/theindex.svg";
import authStore from "./stores/authStore";

const Sidebar = () => {
  return (
    <div id="sidebar">
      <img src={logo} className="logo" alt="the index logo" />
      <section>
        <h4 className="menu-item active">
          <NavLink to="/authors">AUTHORS</NavLink>
        </h4>
        <h4 className="menu-item">
          <NavLink to="/books">BOOKS</NavLink>
        </h4>
        <h4 className="menu-item ">
          <NavLink to="/login">LOG IN</NavLink>
        </h4>
        <h4 className="menu-item">
          <NavLink to="/signup">SIGN UP</NavLink>
        </h4>
        <button className="btn btn-danger" onClick={authStore.logout}>
          Logout {authStore.user}
        </button>
      </section>
    </div>
  );
};

export default observer(Sidebar);
