import React from "react";
import { observer } from "mobx-react";

import authStore from "./stores/authStore";

const Logout = () => {
  return (
   <NavLink to="/logout">LOGOUT from {authStore.user.username}</NavLink>
  );
};

export default observer(Logout);
