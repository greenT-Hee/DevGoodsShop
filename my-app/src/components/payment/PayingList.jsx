// import { useLocation } from "react-router";
import styled from "styled-components";
import testImg from "../../assets/test.png";

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
  background-color: #f2f2f2;
  text-align: center;
`;

const NavItemLi1 = styled.li`
  flex-grow: 3.05;
`;
const NavItemLi2 = styled.li`
  flex-grow: 1;
`;

const PayListLi = styled.li`
  display: flex;
  align-items: center;
  padding: 8px 0 18px 8px;
`;

const WrapItemsDiv = styled.div`
  display: flex;
  flex-grow: 1.8;
`;

const PayListImg = styled.img`
  width: 104px;
  height: 104px;
  object-fit: cover;
  border-radius: 10px;
  margin-right: 36px;
`;

const PayListInfoP = styled.p`
  font-size: 14px;
  color: #767676;

  padding-top: ${(props) => (props.first ? "20px" : "")};
`;
const PayListNameP = styled.p`
  padding: 6px 0 10px;
  font-size: 18px;
`;

const FontP1 = styled.p`
  font-size: 18px;
  text-align: center;
  flex-grow: 1;
  color: ${(props) => (props.price ? "#000" : "#767676")};
  font-weight: ${(props) => (props.price ? "700" : "400")};
`;

export default function BuyingList() {
  // const location = useLocation();
  // console.log(location.state);

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
        <PayListLi>
          <WrapItemsDiv>
            <PayListImg src={testImg} alt="구매 상품 사진" />
            <div>
              <PayListInfoP first>백엔드글로벌</PayListInfoP>
              <PayListNameP>딥러닝 개발자 무릎 담요</PayListNameP>
              <PayListInfoP>
                수량: <span>1</span>개
              </PayListInfoP>
            </div>
          </WrapItemsDiv>
          <FontP1 dash>- </FontP1>
          <FontP1>무료배송</FontP1>
          <FontP1 price>17500원</FontP1>
        </PayListLi>
        <PayListLi>
          <WrapItemsDiv>
            <PayListImg src={testImg} alt="구매 상품 사진" />
            <div>
              <PayListInfoP first>백엔드글로벌</PayListInfoP>
              <PayListNameP>딥러닝 개발자 무릎 담요</PayListNameP>
              <PayListInfoP>
                수량: <span>1</span>개
              </PayListInfoP>
            </div>
          </WrapItemsDiv>
          <FontP1 dash>- </FontP1>
          <FontP1>무료배송</FontP1>
          <FontP1 price>17500원</FontP1>
        </PayListLi>
      </ul>
    </PayingSection>
  );
}
