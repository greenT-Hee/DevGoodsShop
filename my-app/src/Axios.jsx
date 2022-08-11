import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: "https"
    ? "https://openmarket.weniv.co.kr/"
    : "http://13.209.150.154:8000/",
});
export default AxiosInstance;
