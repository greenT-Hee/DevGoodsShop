import axios from "axios";
import { getCookie } from "./Cookie";

const cookie = getCookie("refreshToken");
const AxiosInstance = axios.create({
  baseURL: "https"
    ? "https://openmarket.weniv.co.kr/"
    : "http://13.209.150.154:8000/",
  headers: {
    Authorization: cookie,
  },
  withCredentials: true,
});
export default AxiosInstance;
