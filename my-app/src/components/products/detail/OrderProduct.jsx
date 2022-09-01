import styled from "styled-components";
import plus from "../../../assets/icon-plus-line.svg";
import minus from "../../../assets/icon-minus-line.svg";
import { useState } from "react";
import CalulatePrice from "./CalulatePrice";
import OrderButtons from "./OrderButtons";
import { useSelector } from "react-redux";

const WrapOrderNumDiv = styled.div`
  width: 630px;
`;

const OrderNumUl = styled.ul`
  position: relative;
  display: flex;
  width: fit-content;
  height: 50px;
  border-radius: 5px;
  border: 1px solid ${(props) => props.theme.color.gray2};

  &::after {
    position: absolute;
    content: "";
    width: 630px;
    height: 2px;
    top: -30px;
    left: 0;
    background-color: ${(props) => props.theme.color.gray2};
  }

  &::before {
    position: absolute;
    content: "";
    width: 630px;
    height: 2px;
    bottom: -30px;
    left: 0;
    background-color: ${(props) => props.theme.color.gray2};
  }
`;

const OrderNumLi = styled.li`
  width: 50px;
  text-align: center;
  line-height: ${(props) => (props.middle ? "3.2" : "3.7")};

  border-left: ${(props) =>
    props.middle ? `1px solid ${props.theme.color.gray2}` : ""};
  border-right: ${(props) =>
    props.middle ? `1px solid ${props.theme.color.gray2}` : ""};
`;

export default function OrderNum() {
  const product = useSelector((state) => state.detailProduct);
  const { stock, price } = product;
  const [orderNum, setOrderNum] = useState(1);
  console.log("🎉", product);

  const minusOrder = () => {
    if (stock) {
      setOrderNum(parseInt(orderNum - 1));
    }
  };

  const plustOrder = () => {
    if (orderNum < stock) setOrderNum(parseInt(orderNum + 1));
  };

  return (
    <>
      <WrapOrderNumDiv>
        <OrderNumUl>
          <OrderNumLi>
            <button onClick={minusOrder}>
              <img src={minus} alt="주문 수량 빼기" />
            </button>
          </OrderNumLi>
          <OrderNumLi middle>
            <span>{orderNum}</span>
          </OrderNumLi>
          <OrderNumLi>
            <button onClick={plustOrder}>
              <img src={plus} alt="주문 수량 추가" />
            </button>
          </OrderNumLi>
        </OrderNumUl>
      </WrapOrderNumDiv>
      {/* 총 수량, 총 가격 */}
      <CalulatePrice orderNum={orderNum} price={price} />
      {/* 구매 버튼 */}
      <OrderButtons orderNum={orderNum} />
    </>
  );
}
