import { useState } from "react";
import { useLocation } from "react-router";
import styled from "styled-components";
import AxiosInstance from "../../Axios";
import { getCookie } from "../../Cookie";

const ShippingSection = styled.section`
  width: 1280px;
  margin: 156px auto 70px;
`;

const H2 = styled.h2`
  position: relative;
  font-weight: 500;
  font-size: 24px;
  padding-bottom: 18px;
  border-bottom: 2px solid #c4c4c4;
`;

const InfoSection = styled.section`
  margin-top: 40px;
`;

const InfoH3 = styled.h3`
  position: relative;
  font-weight: 500;
  font-size: 18px;
  margin-bottom: 8px;

  &::after {
    display: block;
    position: absolute;
    content: "";
    width: 1280px;
    height: 2px;
    background-color: #c4c4c4;
    bottom: -8px;
  }
`;

const WrapInputDiv = styled.div`
  display: flex;
  align-items: center;
  padding: 18px 0;
  border-bottom: 1px #c4c4c4 solid;
`;

const Label1 = styled.label`
  width: 170px;
`;

const Input = styled.input`
  width: 334px;
  height: 40px;
  border: 1px solid #c4c4c4;
`;

const SelectPayWaySection = styled.section`
  width: 1280px;
  margin: 0 auto 70px;
`;

const PayWayLayoutDiv = styled.div`
  width: 760px;
`;

const PayWayForm = styled.form`
  padding: 18px 0;
  border-bottom: 2px solid #c4c4c4;
`;

const Label2 = styled.label`
  margin-right: 10px;
`;

export default function Shipping() {
  const location = useLocation();
  const productId = location.state.productId;
  const orderNum = location.state.orderNum;
  const price = location.state.price;
  const totalPrice = parseInt(orderNum * price);

  const [receiver, setReceiver] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");
  const [payment, setPayment] = useState("");

  const handleReceiver = (e) => {
    setReceiver(e.target.value);
  };
  const handlePhoneNum = (e) => {
    setPhoneNum(e.target.value);
  };
  const handleAddress = (e) => {
    setAddress(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };
  const handlePayment = (e) => {
    setPayment(e.target.value);
  };

  const orderReq = {
    product_id: productId,
    quantity: orderNum,
    order_kind: "direct_order", // 바로주문하기일 경우에는 direct_order여야 합니다.

    reciever: receiver,
    reciever_phone_number: phoneNum,
    address: address,
    address_message: message,
    payment_method: payment, //CARD, DEPOSIT, PHONE_PAYMENT, NAVERPAY, KAKAOPAY 중 하나 선택
    total_price: totalPrice, // 총 금액(total_price)은 자동계산되나, 유효성검사를 위해 받아와야 합니다.
  };

  console.log(receiver, phoneNum, address, message, payment);
  console.log(productId, orderNum, price, totalPrice, "🎉location");
  const order = async () => {
    try {
      const response = await AxiosInstance.post("order/", orderReq);
      console.log(response);
    } catch {
      console.error("error");
    }
  };

  const submitOrder = (e) => {
    e.preventDefault();
    order();
  };

  return (
    <>
      <ShippingSection>
        <H2>배송 정보</H2>
        <InfoSection>
          <InfoH3>주문자 정보</InfoH3>
          <form>
            <WrapInputDiv>
              <Label1 first htmlFor="username">
                이름
              </Label1>
              <Input type="text" id="username" />
            </WrapInputDiv>
            <WrapInputDiv>
              <Label1 htmlFor="phoneNum">휴대폰</Label1>
              <Input type="text" id="phoneNum" />
            </WrapInputDiv>
            <WrapInputDiv>
              <Label1 htmlFor="email">이메일</Label1>
              <Input type="text" id="email" />
            </WrapInputDiv>
          </form>
        </InfoSection>

        <InfoSection>
          <InfoH3>배송지 정보</InfoH3>
          <form onSubmit={submitOrder}>
            <WrapInputDiv>
              <Label1 htmlFor="receiver">수령인</Label1>
              <Input
                type="text"
                id="receiver"
                onChange={handleReceiver}
                required
              />
            </WrapInputDiv>
            <WrapInputDiv>
              <Label1 htmlFor="yourPhoneNum">휴대폰</Label1>
              <Input
                type="text"
                id="yourPhoneNum"
                onChange={handlePhoneNum}
                required
              />
            </WrapInputDiv>
            <WrapInputDiv>
              <Label1 last htmlFor="location">
                배송 주소
              </Label1>
              <Input
                type="text"
                id="location"
                onChange={handleAddress}
                required
              />
            </WrapInputDiv>
            <WrapInputDiv>
              <Label1 last htmlFor="message">
                배송 메세지
              </Label1>
              <Input
                type="text"
                id="message"
                onChange={handleMessage}
                required
              />
            </WrapInputDiv>
          </form>
        </InfoSection>
      </ShippingSection>

      <SelectPayWaySection>
        <PayWayLayoutDiv>
          <H2>결제 수단</H2>
          <PayWayForm onSubmit={submitOrder}>
            <input
              type="radio"
              id="credit"
              name="pay"
              value="CARD"
              onChange={handlePayment}
              defaultChecked
            />
            <Label2 htmlFor="credit">신용/체크카드</Label2>
            <input
              type="radio"
              id="cash"
              name="pay"
              value="DEPOSIT"
              onChange={handlePayment}
            />
            <Label2 htmlFor="cash">무통장 입금</Label2>
            <input
              type="radio"
              id="phonePay"
              name="pay"
              value="PHONE_PAYMENT"
              onChange={handlePayment}
            />
            <Label2 htmlFor="phonePay">휴대폰 결제</Label2>
            <input
              type="radio"
              id="naverPay"
              name="pay"
              value="NAVERPAY"
              onChange={handlePayment}
            />
            <Label2 htmlFor="naverPay">네이버페이</Label2>
            <input
              type="radio"
              id="kakaoPay"
              name="pay"
              value="KAKAOPAY"
              onChange={handlePayment}
            />
            <Label2 htmlFor="kakaoPay">카카오페이</Label2>
          </PayWayForm>
          <form onSubmit={submitOrder}>
            <button>결제하기</button>
          </form>
        </PayWayLayoutDiv>
      </SelectPayWaySection>
    </>
  );
}
