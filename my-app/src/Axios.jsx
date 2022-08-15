import axios from "axios";
import { getCookie } from "./Cookie";

const AxiosInstance = axios.create({
  baseURL: "https"
    ? "https://openmarket.weniv.co.kr/"
    : "http://13.209.150.154:8000/",
  headers: {
    Authorization: getCookie("refreshToken"),
  },
});
export default AxiosInstance;
