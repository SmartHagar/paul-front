/** @format */

import axios from "axios";
// base url
const baseUrl = "https://admin.paulbaru.com/api/";
// create an instance of axios
const instance = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});
// export the instance
export default instance;
