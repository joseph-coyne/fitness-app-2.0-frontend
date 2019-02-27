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
  getTrainers() {
    return apiClient.get("/trainers");
  },
  getTrainerMe() {
    return apiClient.get("/trainers/me");
  },
  getTrainer(id) {
    return apiClient.get("/trainers/" + id);
  },
  patchTrainer(id, params) {
    return apiClient.patch("/trainers/" + id, params);
  },
  postTrainer(params) {
    return apiClient.post(params);
  },
  loginTrainer(params) {
    return apiClient.post("trainer_sessions", params);
  }
};
