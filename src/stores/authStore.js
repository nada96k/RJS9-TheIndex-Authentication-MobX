import { decorate, observable } from "mobx";
import axios from "axios";
import jwt_decode from "jwt-decode";

class AuthStore {
  user = null;

  setUser = token => {
    if (token) {
      localStorage.setItem("Token", token);
      axios.defaults.headers.common.Authorization = `JWT ${token}`;
      const decodeUser = jwt_decode(token);
      this.user = decodeUser;
      console.log("USER", decodeUser);
    } else {
      localStorage.removeItem("Token");
      delete axios.defaults.headers.common.Authorization;
      this.user = null;
    }
  };

  signup = async userData => {
    try {
      const res = await axios.post(
        "https://the-index-api.herokuapp.com/signup/",
        userData
      );
      const user = res.data;
      this.setUser(user.token);
      // history.replace("/");
    } catch (err) {
      console.log(err.response);
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
      console.log(err.response.data);
    }
  };

  logout = () => {
    this.setUser();
  };

  checkForToken = () => {
    const token = localStorage.getItem("Token");
    if (token) {
      const CurrentTime = Date.now() / 1000;
      const decodedToken = jwt_decode(token);
      if (decodedToken.exp >= CurrentTime) {
        this.setUser(token);
      } else {
        this.setUser();
      }
    }
  };
}

decorate(AuthStore, {
  user: observable
});

const authStore = new AuthStore();
authStore.checkForToken();
export default authStore;
