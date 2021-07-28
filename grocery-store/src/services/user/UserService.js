import axios from "axios";
import AuthHeader from '../auth/AuthHeader';

const API_URL = "http://localhost:8080/api/test/";

const getPublicContent = () => {
  return axios.get(API_URL + "all");
};

const getCustomerBoard = () => {
  return axios.get(API_URL + "Customer", { headers: AuthHeader() });
};

const getManagerBoard = () => {
  return axios.get(API_URL + "Manager", { headers: AuthHeader() });
};

const getAdminBoard = () => {
  return axios.get(API_URL + "Admin", { headers: AuthHeader() });
};

const UserService = {
  getPublicContent,
  getCustomerBoard,
  getManagerBoard,
  getAdminBoard,
}

export default UserService;