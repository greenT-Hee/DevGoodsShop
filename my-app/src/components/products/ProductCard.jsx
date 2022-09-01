import { useEffect, useState } from "react";
import AxiosInstance from "../../Axios";
import ProductItem from "./productItem";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../redux/actions/productsAction";

const CardUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 1280px;
  box-sizing: border-box;
  gap: 70px;
  margin: 80px auto;
`;

export default function ProductCard() {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();

  const getProductList = async () => {
    try {
      const response = await AxiosInstance.get("products/");
      console.log(products);
      console.log("에효 :", response.data.results);
      dispatch(setProducts(response.data.results));
    } catch {
      console.error("Error");
    }
  };
  useEffect(() => {
    getProductList();
  }, []);

  return (
    <CardUl>
      <ProductItem />
    </CardUl>
  );
}
