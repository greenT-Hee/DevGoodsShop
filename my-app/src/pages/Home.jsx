import HomeHeader from "../components/Header";
import Banner from "../components/productList/Banner";
import AxiosInstance from "../Axios";
import { useEffect } from "react";

const Home = () => {
  const getProductList = async () => {
    try {
      const response = await AxiosInstance.get("products/");
      console.log(response);
    } catch {
      console.error("Error");
    }
  };
  useEffect(() => {
    getProductList();
  }, []);

  return (
    <>
      <HomeHeader />
      <Banner />
    </>
  );
};

export default Home;
