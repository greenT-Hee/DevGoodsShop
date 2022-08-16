import { useEffect, useState } from "react";
import AxiosInstance from "../../Axios";
import ProductItem from "./productItem";
// import styled from "styled-components";

export default function ProductCard() {
  const [productData, setProductData] = useState([]);

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

  console.log(productData);
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
