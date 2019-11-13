import React from "react";
import { observer } from "mobx-react";

import authStore from "./stores/authStore";

const Logout = () => {
  return (
    <button className="btn btn-danger" onClick={authStore.logout}>
      LOGOUT {authStore.user.username}
    </button>
  );
};

export default observer(Logout);
