import { useLocation } from "react-router";
import styled from "styled-components";
import BuyingItmes from "./BuyingItmes";

const PayingSection = styled.section`
  width: 1280px;
  margin: 0 auto;
`;

const PayingH2 = styled.h2`
  font-weight: 700;
  font-size: 36px;
  text-align: center;
  padding: 54px 0 52px;
`;

const NavUl = styled.ul`
  display: flex;
  align-items: center;
  height: 60px;
  background-color: ${(props) => props.theme.color.gray1};
  text-align: center;
`;

const NavItemLi1 = styled.li`
  width: 615px;
`;
const NavItemLi2 = styled.li`
  width: calc((1280px - 615px) / 3);
`;

const WrapTotalCostDiv = styled.div`
  float: right;
  margin-top: 30px;
`;

const TotalCostP = styled.p`
  font-size: 18px;
  font-weight: 500;
  display: inline;
`;
const TotalCostSpan = styled.span`
  font-weight: 700;
  font-size: 24px;
  color: ${(props) => props.theme.color.point};
  display: inline;
  padding-left: 10px;
`;

export default function PayingList() {
  const location = useLocation();
  const orderNum = location.state.orderNum;
  const price = location.state.price;
  const shippingFee = location.state.shippingFee;
  const totalCost = parseInt(price * orderNum + shippingFee);

  console.log(orderNum, "payingList");
  return (
    <PayingSection>
      <PayingH2>주문/결제하기</PayingH2>
      <NavUl>
        <NavItemLi1>상품정보</NavItemLi1>
        <NavItemLi2>할인</NavItemLi2>
        <NavItemLi2>배송비</NavItemLi2>
        <NavItemLi2>주문금액</NavItemLi2>
      </NavUl>
      <ul>
        <BuyingItmes />
      </ul>
      <WrapTotalCostDiv>
        <TotalCostP>
          총 주문 금액 <TotalCostSpan>{totalCost}원</TotalCostSpan>
        </TotalCostP>
      </WrapTotalCostDiv>
    </PayingSection>
  );
}
