import Cookies from "universal-cookie";

const cookies = new Cookies();

const setRefreshTokenToCookies = (refreshToken) => {
  cookies.set("refreshToken", refreshToken, { sameSite: "strict" });
};
