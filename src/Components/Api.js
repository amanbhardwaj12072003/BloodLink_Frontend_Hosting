import axios from "axios";

const baseURL = "https://bloodlink-backend-zmyu.onrender.com";

export default axios.create({ baseURL: baseURL });
