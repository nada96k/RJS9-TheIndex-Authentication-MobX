import { decorate, observable } from "mobx";

import axios from "axios";
import jwt_decode from "jwt-decode";

class AuthStore {
  user = null;
  setUser = token => {
    axios.defaults.headers.common.Authorization = `JWT ${token}`;
    const decodeUser = jwt_decode(token);
    this.user = decodeUser;
  };

  signup = async userData => {
    try {
      const res = await axios.post(
        "https://the-index-api.herokuapp.com/signup/",
        userData
      );
      const user = res.data;
      console.log(jwt_decode(user));
      this.setUser(user.token);
      // history.replace("/");
    } catch (err) {
      console.log(err.response.data);
    }
  };

  login = async userData => {
    try {
      const res = await axios.post(
        "https://the-index-api.herokuapp.com/login/",
        userData
      );
      const user = res.data;
      this.setUser(user.token);
    } catch (err) {
      console.error(err.response.data);
    }
  };
}
decorate(AuthStore, {
  user: observable
});
const authStore = new AuthStore();
export default authStore;
