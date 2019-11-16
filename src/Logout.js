import React from "react";
import { observer } from "mobx-react";

import authStore from "./stores/authStore";

const logout = () => {
  return (
    <button className="btn btn-danger" onClick={authStore.logout}>
      LOGOUT from {authStore.user.username}
    </button>
  );
};

export default observer(logout);
