import styled from "styled-components";

const WrapCostDiv = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  margin-top: 78px;
`;

const TotalSpan = styled.span`
  font-size: 18px;
  color: #767676;
`;

const TotalNumberSpan = styled.span`
  color: #21bf48;
`;

const TotalNumberStrong = styled.strong`
  color: #21bf48;
  font-weight: 700;
  font-size: 36px;
  margin-left: 12px;
`;

const UnitSpan = styled.span`
  font-size: 18px;
`;

export default function CalulatePrice({ orderNum, price }) {
  return (
    <WrapCostDiv>
      <TotalSpan>
        총 수량 <TotalNumberSpan>{orderNum}</TotalNumberSpan>개 |{" "}
      </TotalSpan>
      <TotalNumberStrong>
        {parseInt(orderNum * price)}
        <UnitSpan> 원</UnitSpan>
      </TotalNumberStrong>
    </WrapCostDiv>
  );
}
