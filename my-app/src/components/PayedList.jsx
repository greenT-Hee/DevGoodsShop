import React from "react";
import { useEffect } from "react";
import AxiosInstance from "../Axios";
import { getCookie } from "../Cookie";

export default function PayedList() {
  const cookie = getCookie("refreshToken");
  console.log(cookie, "🍪🍪");
  const getPayedList = async () => {
    try {
      const response = await AxiosInstance.get("/order/", {
        headers: { Authorization: cookie },
      });
      console.log(response.data.results, "😎주문내역응답");
    } catch {
      console.log("error");
    }
  };

  useEffect(() => {
    getPayedList();
  }, [cookie]);

  return (
    <section>
      <h2>주문 내역</h2>
      <ul></ul>
    </section>
  );
}
