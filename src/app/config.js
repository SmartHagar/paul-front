/** @format */

import axios from "axios";
// base url
const baseUrl = "http://127.0.0.1:8000/api/";
// create an instance of axios
const instance = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});
// export the instance
export default instance;
