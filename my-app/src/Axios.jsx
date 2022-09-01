import axios from "axios";
import { getCookie } from "./Cookie";

//API 백엔드 서버와 연결 에러 발생
const cookie = getCookie("refreshToken");
const AxiosInstance = axios.create({
  baseURL: "https://openmarket.weniv.co.kr/",
  headers: {
    "Content-Type": "application/json",
    Authorization: cookie,
  },
});
export default AxiosInstance;
