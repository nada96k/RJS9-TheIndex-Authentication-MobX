import React from "react";
import { observer } from "mobx-react";

import authStore from "./stores/authStore";

const logout = () => {
  return (
    <button className="btn btn-danger" onClick={() => alert("LOGOUT!!")}>
      LOGOUT {authStore.user.username}
    </button>
  );
};

export default observer(Logout);
