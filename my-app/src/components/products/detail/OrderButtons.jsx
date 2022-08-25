import React from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";

const WrapBuyDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 22px;
  font-size: 18px;
  font-weight: 700;
  float: right;
`;

const DirectBuyBtn = styled.button`
  width: 416px;
  height: 60px;
  border-radius: 5px;
  color: #fff;
  background-color: #21bf48;
`;

export default function OrderButtons({
  productId,
  orderNum,
  image,
  price,
  productName,
  productInfo,
}) {
  const nav = useNavigate();
  const GoPaymentPage = () => {
    nav("/payment", {
      state: {
        productId: productId,
        orderNum: orderNum,
        price: price,
        image: image,
        productName: productName,
        productInfo: productInfo,
      },
    });
  };

  return (
    <WrapBuyDiv>
      <DirectBuyBtn onClick={GoPaymentPage}>바로 구매</DirectBuyBtn>
    </WrapBuyDiv>
  );
}
