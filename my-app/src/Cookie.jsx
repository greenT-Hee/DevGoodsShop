import { Cookies } from "react-cookie";
const cookies = new Cookies();

export const setCookies = (name, value, option) => {
  return cookies.set(name, value, { ...option });
};

export const getCookie = (name) => {
  return cookies.get(name);
};

export const logout = (name) => {
  console.log("logout 성공!!", new Date());
  return cookies.remove(name);
};
