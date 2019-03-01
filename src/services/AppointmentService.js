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
  getAppointments() {
    return apiClient.get("/appointments");
  },
  getAppointment(id) {
    return apiClient.get("/appointments/" + id);
  },
  postAppointment(params) {
    return apiClient.post("/appointments/", params);
  },
  patchAppointment(id, params) {
    return apiClient.patch("/appointments/" + id, params);
  },
  deleteAppointment(id) {
    return apiClient.delete("/appointments/" + id);
  }
};
