import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import styled from "styled-components";

const Li = styled.li`
  width: 100%;
  padding: 20px;
  border-radius: 5px;
  box-sizing: border-box;
  border: solid 1px ${(props) => props.theme.color.gray2};
  margin-bottom: 10px;
`;

const P1 = styled.p`
  color: ${(props) => props.theme.color.main};
  font-size: 18px;
  font-weight: 700;
  padding-bottom: 16px;
`;

const P2 = styled.p`
  font-weight: 700;
  padding-bottom: 8px;
`;

const Span = styled.span`
  color: ${(props) =>
    props.total ? `${props.theme.color.point}` : `${props.theme.color.gray3}`};
`;

const Button = styled.button`
  display: block;
  width: 100px;
  height: 30px;
  background-color: ${(props) => props.theme.color.point};
  color: #fff;
  border-radius: 5px;
  float: right;
  margin-top: -35px;
  font-size: 14px;
`;

export default function PayedList() {
  const payedProduct = useSelector((state) => state.payedProduct.products);
  const nav = useNavigate();

  const renderList = payedProduct.map((item) => {
    const {
      created_at,
      total_price,
      order_number,
      receiver,
      receiver_phone_number,
      payment_method,
      order_quantity,
      address,
      address_message,
    } = item;
    const goPayedDetail = () => {
      nav(`/payedDetail/${order_number}`, {
        state: {
          order_number: order_number,
          receiver: receiver,
          receiver_phone_number: receiver_phone_number,
          total_price: total_price,
          payment_method: payment_method,
          order_quantity: order_quantity,
          address: address,
          address_message: address_message,
          created_at: created_at,
        },
      });
    };

    return (
      <Li key={order_number}>
        <P1>결제 완료</P1>
        <P2>
          결제 일시:{" "}
          <Span>
            {created_at.split("T")[0]} ({created_at.split("T")[1].split(".")[0]}
            )
          </Span>
        </P2>
        <P2>
          주문 번호: <Span> {order_number}</Span>
        </P2>
        <P2>
          주문 수량: <Span> {order_quantity}</Span>
        </P2>

        <P2>
          결제 금액:
          <Span total> {total_price}원</Span>
        </P2>
        <Button onClick={goPayedDetail}>상세 보기</Button>
      </Li>
    );
  });

  return <>{renderList}</>;
}
