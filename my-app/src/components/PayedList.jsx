import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AxiosInstance from "../Axios";
import { getCookie } from "../Cookie";
import { payedProductList } from "../redux/actions/productsAction";

export default function PayedList() {
  const payedProduct = useSelector((state) => state.payedProduct.products);
  const dispatch = useDispatch();
  const cookie = getCookie("refreshToken");
  console.log(payedProduct, "주문리덕스💖");
  console.log(cookie, "🍪🍪");

  const getPayedList = async () => {
    try {
      const response = await AxiosInstance.get("/order/", {
        headers: { Authorization: cookie },
      });
      dispatch(payedProductList(response.data.results));
      console.log(response.data.results, "😎주문내역응답");
    } catch {
      console.log("error");
    }
  };

  useEffect(() => {
    getPayedList();
  }, []);

  return (
    <section>
      <h2>주문 내역</h2>
      <ul></ul>
    </section>
  );
}
