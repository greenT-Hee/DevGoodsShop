import styled from "styled-components";
import { useLocation } from "react-router";
import { useSelector } from "react-redux";

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
    background-color: ${(props) => props.theme.color.gray2};
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
  color: ${(props) => props.theme.color.gray3};

  padding-top: ${(props) => (props.first ? "20px" : "")};
`;
const PayListNameP = styled.p`
  padding: 6px 0 10px;
  font-size: 18px;
`;

const FontP1 = styled.p`
  font-size: 18px;
  text-align: center;
  flex-grow: ${(props) => (props.dash ? "1.1" : "1")};
  color: ${(props) =>
    props.price ? props.theme.color.black : props.theme.color.gray3};
  font-weight: ${(props) => (props.price ? "700" : "400")};
`;

export default function BuyingItmes() {
  const location = useLocation();
  const orderNum = location.state.orderNum;
  const image = location.state.image;
  const price = location.state.price;
  const productName = location.state.productName;
  const shippingFee = location.state.shippingFee;
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
      <FontP1>{shippingFee}원</FontP1>
      <FontP1 price>{totalCost}원</FontP1>
    </PayListLi>
  );
}
