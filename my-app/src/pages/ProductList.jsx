import React from "react";
import Banner from "../components/banner/Banner";
import Footer from "../components/Footer";
import { ProductListHeader } from "../components/Header";
import ProductCard from "../components/products/ProductCard";

export default function ProductList() {
  return (
    <>
      <ProductListHeader />
      <Banner />
      <ProductCard />
      <Footer />
    </>
  );
}
