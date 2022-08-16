import { useEffect, useState } from "react";
import AxiosInstance from "../../Axios";
import ProductItem from "./productItem";
// import styled from "styled-components";

export default function ProductCard({ productData }) {
  return (
    <ul>
      {productData.map((item) => {
        return (
          <ProductItem
            key={item.product_id}
            productName={item.product_name}
            image={item.image}
            price={item.price}
            productInfo={item.products_info}
          />
        );
      })}
    </ul>
  );
}
