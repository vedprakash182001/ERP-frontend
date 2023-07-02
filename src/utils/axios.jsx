import axios from "axios";

const api="http://localhost:7001/api/user";
// const api = "https://flixclone-backend.onrender.com/api/user";

const axiosIntance = axios.create({
  baseURL: api,
});

export default axiosIntance;

