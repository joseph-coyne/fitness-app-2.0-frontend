import axios from "axios";

const apiClient = axios.create({
  baseURL: `http://localhost:3000/api`,
  withCredentials: false, // This is the default
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

export default {
  getUserMe() {
    return apiClient.get("/users/me");
  },
  getUser(id) {
    return apiClient.get("/users/" + id);
  },
  patchUser(id, params) {
    return apiClient.patch("/users/" + id, params);
  },
  postUser(params) {
    return apiClient.post(params);
  },
  loginUser(params) {
    return apiClient.post("user_sessions", params);
  }
};
