import { useLocation } from "react-router";
import styled from "styled-components";

const Section = styled.section`
  width: 600px;
  margin: 50px auto 0;
  box-sizing: border-box;
  padding: 35px;
  border: 1px solid ${(props) => props.theme.color.gray2};
  border-radius: 10px;
`;

const Div1 = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: ${(props) => (props.last ? "32px" : "16px")};
  border-bottom: ${(props) =>
    props.last ? `1px solid ${props.theme.color.gray3}` : ""};
`;

const P = styled.p`
  font-weight: 700;

  font-size: ${(props) => (props.total ? "20px" : "")};
  color: ${(props) => (props.total ? `${props.theme.color.point}` : "")};
  padding-top: ${(props) => (props.last ? "32px" : "")};
  text-align: ${(props) => (props.last ? "right" : "")};
`;

const Span = styled.span`
  width: 230px;
  display: block;
  overflow: hidden;
  white-space: normal;
  text-overflow: ellipsis;
  word-break: keep-all;
  text-align: right;
  color: ${(props) => props.theme.color.gray3};
`;

const Span2 = styled.span`
  color: ${(props) => props.theme.color.gray3};
  font-weight: 400;
`;

const Div2 = styled.div`
  width: 600px;
  margin: 0 auto;
  margin-top: 70px;
  text-align: center;
`;

const P2 = styled.p`
  font-size: 18px;
  padding-bottom: 10px;
`;

export default function PayedDetail() {
  const location = useLocation();

  const {
    prodcuct_price,
    shippingFee,
    total_price,
    order_number,
    order_quantity,
    receiver,
    receiver_phone_number,
    payment_method,
    address,
    address_message,
  } = location.state;

  console.log(shippingFee, prodcuct_price, "👀");

  return (
    <>
      <Div2>
        <P2>이용해주셔서 감사합니다 💜</P2>
        <P2>
          문제 발생 시 사업자 번호 010-0000-0000으로 연락부탁드립니다. :){" "}
        </P2>
      </Div2>
      <Section>
        <h2 className="ir">결제 내역 상세 페이지</h2>
        <Div1>
          <P>수령인</P>
          <Span>{receiver}</Span>
        </Div1>
        <Div1>
          <P>수령인 휴대폰</P>
          <Span>{receiver_phone_number}</Span>
        </Div1>
        <Div1>
          <P>배송 주소</P>
          <Span>{address}</Span>
        </Div1>
        <Div1>
          <P>배송 메세지</P>
          <Span>{address_message}</Span>
        </Div1>
        <Div1 last>
          <P>결제 수단</P>
          <Span>{payment_method}</Span>
        </Div1>

        <Div1>
          <P last>
            주문번호 <Span2>{order_number}</Span2> | 주문 수량{" "}
            <Span2>{order_quantity}</Span2>
          </P>
          <P total last>
            최종 금액: {total_price} 원
          </P>
        </Div1>
      </Section>
    </>
  );
}
