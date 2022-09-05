import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AxiosInstance from "../../Axios";
import { getCookie } from "../../Cookie";
import { payedProductList } from "../../redux/actions/productsAction";
import styled from "styled-components";
import PayedList from "./PayedList";

const Section = styled.section`
  width: 1280px;
  margin: 70px auto;
`;

const H2 = styled.h2`
  font-weight: 700;
  font-size: 36px;
  text-align: center;
  padding-bottom: 54px;
`;

const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export default function PayedCard() {
  const payedProduct = useSelector((state) => state.payedProduct.products);
  const dispatch = useDispatch();

  const cookie = getCookie("refreshToken");

  const getPayedList = async () => {
    try {
      const response = await AxiosInstance.get("/order/", {
        headers: { Authorization: cookie },
      });
      dispatch(payedProductList(response.data.results));
    } catch {
      console.log("error");
    }
  };

  useEffect(() => {
    getPayedList();
  }, []);

  return (
    <Section>
      <H2>결제 내역</H2>
      <Ul>
        <PayedList />
      </Ul>
    </Section>
  );
}
