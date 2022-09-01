import axios from "axios";

//API 백엔드 서버와 연결 에러 발생
const AxiosInstance = axios.create({
  baseURL: "https://openmarket.weniv.co.kr/",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});
export default AxiosInstance;
