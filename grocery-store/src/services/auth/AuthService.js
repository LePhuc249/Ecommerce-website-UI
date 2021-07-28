import axios from "axios";

const API_URL = "http://localhost:8080/grocerystore/api/auth/";

const register = (username, password, fullname, email, phone) => {
  return axios.post(API_URL + "signup", {
    username,
    password,
    fullname,
    email,
    phone
  });
};

const login = (username, password) => {
  return axios
    .post(API_URL + "signin", {
      username,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const AuthService = {
  register,
  login,
  logout,
}

export default AuthService;