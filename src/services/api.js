import axios from "axios";

const API = axios.create({
  baseURL: "https://book-management-system-qrby.onrender.com",
});

export default API;
