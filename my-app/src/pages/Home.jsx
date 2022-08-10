import Header from "../components/header/Header";
import Banner from "../components/productList/Banner";
import axios from "axios";
import { useEffect } from "react";

const Home = () => {
  // const baseURL = "https"
  //   ? "https://openmarket.weniv.co.kr/"
  //   : "http://13.209.150.154:8000/";

  const getProductList = async () => {
    try {
      const response = await axios.get(
        "https://openmarket.weniv.co.kr/products/"
      );
      console.log(response);
    } catch {
      console.error("비상!!🛒");
    }
  };
  useEffect(() => {
    getProductList();
  }, []);

  return (
    <>
      <Header />
      <Banner />
    </>
  );
};

export default Home;
