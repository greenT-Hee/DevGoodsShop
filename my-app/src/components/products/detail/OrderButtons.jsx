import React from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { getCookie } from "../../../Cookie";
import { useSelector } from "react-redux";

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
  color: ${(props) => props.theme.color.white};
  background-color: ${(props) =>
    props.soldout ? props.theme.color.gray2 : props.theme.color.main};
`;

export default function OrderButtons() {
  const product = useSelector((state) => state.detailProduct);
  const { stock } = product;

  const nav = useNavigate();
  const cookie = getCookie("refreshToken");
  const GoPaymentPage = () => {
    if (cookie) {
      nav("/payment");
    } else if (!cookie) {
      alert("로그인이 필요합니다. 😥");
    }
  };

  return (
    <WrapBuyDiv>
      {stock > 0 && (
        <DirectBuyBtn onClick={GoPaymentPage}>바로 구매</DirectBuyBtn>
      )}
      {stock === 0 && (
        <DirectBuyBtn soldout disabled onClick={GoPaymentPage}>
          품절
        </DirectBuyBtn>
      )}
    </WrapBuyDiv>
  );
}
