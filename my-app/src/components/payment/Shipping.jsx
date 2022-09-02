import { useState } from "react";
import { useLocation } from "react-router";
import styled from "styled-components";
import AxiosInstance from "../../Axios";
import { getCookie } from "../../Cookie";

const ShippingSection = styled.section`
  width: 1280px;
  margin: 156px auto 70px;
  overflow: hidden;
`;

const H2 = styled.h2`
  position: relative;
  font-weight: 500;
  font-size: 24px;
  padding-bottom: 18px;
  border-bottom: 2px solid ${(props) => props.theme.color.gray2};
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
    background-color: ${(props) => props.theme.color.gray2};
    bottom: -8px;
  }
`;

const WrapInputDiv = styled.div`
  display: flex;
  align-items: center;
  padding: 18px 0;
  border-bottom: 1px ${(props) => props.theme.color.gray2} solid;
`;

const Label1 = styled.label`
  width: 170px;
`;

const Input = styled.input`
  width: 334px;
  height: 40px;
  border-radius: 5px;
  border: 1px solid ${(props) => props.theme.color.gray2};
`;

const SelectPayWaySection = styled.section`
  width: 1280px;
  margin: 70px auto 0;
`;

const PayWayLayoutDiv = styled.div`
  width: 760px;
`;

const PayWayForm = styled.form`
  padding: 18px 0;
  border-bottom: 2px solid ${(props) => props.theme.color.gray2};
`;

const Label2 = styled.label`
  margin-right: 10px;
`;

const CheckSection = styled.section`
  float: right;
  margin-top: -105px;
`;

const CheckWrapDiv = styled.div`
  width: 480px;
  box-sizing: border-box;
  border: 3px solid ${(props) => props.theme.color.main};
  border-radius: 10px;
`;

const CheckDiv1 = styled.div`
  position: relative;
  padding: 34px 30px 0;

  &::before {
    position: absolute;
    display: block;
    content: "";
    width: 432px;
    height: 1px;
    left: 22px;
    top: 143px;
    background-color: ${(props) => props.theme.color.gray2};
  }
`;

const CheckH3 = styled.h3`
  font-size: 24px;
  padding-bottom: 18px;
`;

const CheckDiv2 = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${(props) => (props.cost ? "49px" : "15px")};
`;

const CheckP1 = styled.p`
  font-weight: 700;
  font-size: 18px;

  color: ${(props) => (props.last ? `${props.theme.color.point}` : "#000")};
`;

const CheckSpan = styled.span`
  font-size: 14px;
  font-weight: 400;
  padding-left: 4px;
`;

const CheckForm = styled.form`
  background-color: ${(props) => props.theme.color.gray1};
  border-radius: 0 0 10px 10px;
  padding: 30px;
`;

const CheckButton = styled.button`
  display: block;
  margin: 30px auto 0;
  width: 220px;
  height: 68px;
  background-color: ${(props) =>
    props.able ? `${props.theme.color.main}` : `${props.theme.color.gray2}`};
  color: ${(props) => props.theme.color.white};
  border-radius: 5px;
  font-weight: 700;
  font-size: 24px;
`;

export default function Shipping() {
  const cookie = getCookie("refreshToken");
  const location = useLocation();
  const productId = location.state.productId;
  const orderNum = location.state.orderNum;
  const price = location.state.price;
  const shippingFee = location.state.shippingFee;
  const totalPrice = parseInt(orderNum * price + shippingFee);

  const [reciever, setReceiver] = useState("");
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
    order_kind: "direct_order",

    receiver: reciever,
    receiver_phone_number: phoneNum,
    address: address,
    address_message: message,
    payment_method: payment,
    total_price: totalPrice,
  };

  console.log(cookie);

  console.log(reciever, phoneNum, address, message, payment);
  console.log(productId, orderNum, price, totalPrice, "🎉location");
  const order = async () => {
    try {
      const response = await AxiosInstance.post("/order/", orderReq, {
        headers: { Authorization: cookie },
      });
      console.log(response);
    } catch {
      console.log("error");
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
                placeholder=" - 없이 작성해주세요"
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
                value="KAKAOPAY "
                onChange={handlePayment}
              />
              <Label2 htmlFor="kakaoPay">카카오페이</Label2>
            </PayWayForm>
          </PayWayLayoutDiv>
        </SelectPayWaySection>

        <CheckSection>
          <CheckH3>최종 결제 정보</CheckH3>
          <CheckWrapDiv>
            <CheckDiv1>
              <CheckDiv2>
                <p>- 상품금액</p>
                <CheckP1>
                  {price} <CheckSpan>원</CheckSpan>
                </CheckP1>
              </CheckDiv2>
              <CheckDiv2>
                <p>- 할인금액</p>
                <CheckP1>
                  0<CheckSpan>원</CheckSpan>
                </CheckP1>
              </CheckDiv2>
              <CheckDiv2 cost>
                <p>- 배송비</p>
                <CheckP1>
                  {shippingFee}
                  <CheckSpan>원</CheckSpan>
                </CheckP1>
              </CheckDiv2>
              <CheckDiv2>
                <p>- 결제금액</p>
                <CheckP1 last>
                  {totalPrice}
                  <CheckSpan>원</CheckSpan>
                </CheckP1>
              </CheckDiv2>
            </CheckDiv1>
            <CheckForm onSubmit={submitOrder}>
              <p>
                <input type="checkbox" required />
                주문 내용을 확인하였으며, 정보 제공 등에 동의합니다.
              </p>
              {(reciever &&
                phoneNum &&
                address &&
                phoneNum &&
                message &&
                payment && <CheckButton able>결제하기</CheckButton>) || (
                <CheckButton disabled>결제하기</CheckButton>
              )}
            </CheckForm>
          </CheckWrapDiv>
        </CheckSection>
      </ShippingSection>
    </>
  );
}
