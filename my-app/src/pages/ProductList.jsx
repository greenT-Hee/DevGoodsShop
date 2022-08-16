import React from "react";
import Banner from "../components/Banner";
import { ProductListHeader } from "../components/Header";
import ProductCard from "../components/products/ProductCard";
import AxiosInstance from "../Axios";
import { useState, useEffect } from "react";

export default function ProductList() {
  const [productData, setProductData] = useState("");

  const getProductList = async () => {
    try {
      const response = await AxiosInstance.get("products/");
      setProductData(response.data.results);
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
      <ProductListHeader />
      <Banner />
      <ProductCard productData={productData} />
    </>
  );
}
