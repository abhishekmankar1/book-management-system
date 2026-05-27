import axios from "axios";

const API = axios.create({
  baseURL: "https://6a1686661b90031f81b11e0a.mockapi.io/books",
});

export default API;