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
  getTrainer(id) {
    return apiClient.get("/trainers/" + id);
  }
};
