import axios from "axios";
import applyCaseMiddleware from "axios-case-converter";


export const apiClient = applyCaseMiddleware(
  axios.create({
    baseURL: "http://192.168.1.44:8989/api/v1",
    headers: {
      "Content-Type": "application/json",
    },
  })
);


export default apiClient;
