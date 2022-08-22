import styled from "styled-components";

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
  return (
    <>
      <ShippingSection>
        <H2>배송 정보</H2>
        <InfoSection>
          <InfoH3>주문자 정보</InfoH3>
          <form action="">
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
          <form action="">
            <WrapInputDiv>
              <Label1 htmlFor="receiver">수령인</Label1>
              <Input type="text" id="receiver" />
            </WrapInputDiv>
            <WrapInputDiv>
              <Label1 htmlFor="yourPhoneNum">휴대폰</Label1>
              <Input type="text" id="yourPhoneNum" />
            </WrapInputDiv>
            <WrapInputDiv>
              <Label1 last htmlFor="location">
                배송 주소
              </Label1>
              <Input type="text" id="location" />
            </WrapInputDiv>
            <WrapInputDiv>
              <Label1 last htmlFor="message">
                배송 메세지
              </Label1>
              <Input type="text" id="message" />
            </WrapInputDiv>
          </form>
        </InfoSection>
      </ShippingSection>

      <SelectPayWaySection>
        <PayWayLayoutDiv>
          <H2>결제 수단</H2>
          <PayWayForm>
            <input type="radio" id="credit" />
            <Label2 htmlFor="credit">신용/체크카드</Label2>
            <input type="radio" id="cash" />
            <Label2 htmlFor="cash">무통장 입금</Label2>
            <input type="radio" id="phonePay" />
            <Label2 htmlFor="phonePay">휴대폰 결제</Label2>
            <input type="radio" id="naverPay" />
            <Label2 htmlFor="naverPay">네이버페이</Label2>
            <input type="radio" id="kakaoPay" />
            <Label2 htmlFor="kakaoPay">카카오페이</Label2>
          </PayWayForm>
        </PayWayLayoutDiv>
      </SelectPayWaySection>
    </>
  );
}
