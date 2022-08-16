import React from "react";
import Banner from "../components/Banner";
import { ProductListHeader } from "../components/Header";
import ProductCard from "../components/products/ProductCard";
import AxiosInstance from "../Axios";
import { useState, useEffect } from "react";

export default function ProductList() {
  return (
    <>
      <ProductListHeader />
      <Banner />
      <ProductCard />
    </>
  );
}
