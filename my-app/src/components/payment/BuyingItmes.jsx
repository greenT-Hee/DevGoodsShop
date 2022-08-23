import styled from "styled-components";
import { useLocation } from "react-router";

const PayListLi = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  padding: 8px 0 18px 8px;
  margin-top: 16px;

  &::before {
    display: block;
    position: absolute;
    content: "";
    background-color: #c4c4c4;
    width: 1280px;
    height: 0.5px;
    bottom: 0;
    left: 0;
  }
`;

const WrapItemsDiv = styled.div`
  display: flex;
  width: 615px;
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
  flex-grow: ${(props) => (props.dash ? "1" : "0.9")};
  color: ${(props) => (props.price ? "#000" : "#767676")};
  font-weight: ${(props) => (props.price ? "700" : "400")};
`;

export default function BuyingItmes() {
  const location = useLocation();
  console.log(location.state);

  const orderNum = location.state.orderNum;
  const image = location.state.image;
  const price = location.state.price;
  const productName = location.state.productName;
  const productInfo = location.state.productInfo;
  const totalCost = parseInt(price * orderNum);
  return (
    <PayListLi>
      <WrapItemsDiv>
        <PayListImg src={image} alt="구매 상품 사진" />
        <div>
          <PayListInfoP first>{productInfo}</PayListInfoP>
          <PayListNameP>{productName}</PayListNameP>
          <PayListInfoP>
            수량: <span>{orderNum}</span>개
          </PayListInfoP>
        </div>
      </WrapItemsDiv>
      <FontP1 dash>- </FontP1>
      <FontP1>무료배송</FontP1>
      <FontP1 price>{totalCost}원</FontP1>
    </PayListLi>
  );
}
