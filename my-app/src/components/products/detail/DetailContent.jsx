import styled from "styled-components";
import OrderNum from "./OrderNum";

const ProductDetailArticle = styled.article`
  display: flex;
  gap: 50px;
  width: fit-content;
  margin: 80px auto;
`;

const ProdcuctImg = styled.img`
  width: 600px;
  height: 600px;
`;

const ProductInfoP = styled.p`
  color: #767676;
  font-size: 18px;
  padding-bottom: 16px;
`;

const ProductNameP = styled.p`
  font-size: 36px;
  padding: 10px 0 20px;
`;

const ProductPriceStrong = styled.strong`
  font-size: 36px;
  font-weight: 700;
`;

const ProductPriceSpan = styled.span`
  font-size: 18px;
  padding-left: 2px;
`;

const DeliverySpan = styled.p`
  color: #767676;
  font-size: 16px;
  margin: 138px 0 52px;
`;

const WrapOrderNumDiv = styled.div`
  /* margin-top: 178px; */
  width: 630px;
`;

const WrapCostDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 78px;
`;

const TotalP = styled.p`
  font-size: 18px;
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

export default function DetailContent({
  image,
  price,
  productId,
  productInfo,
  productName,
  stock,
}) {
  return (
    <ProductDetailArticle>
      <ProdcuctImg src={image} alt="상품 사진" />
      <div>
        <ProductInfoP>{productInfo}</ProductInfoP>
        <ProductNameP>{productName}</ProductNameP>
        <ProductPriceStrong>
          {price}
          <ProductPriceSpan>원</ProductPriceSpan>
        </ProductPriceStrong>
        {/* 주문 수량 */}
        <DeliverySpan>택배배송/ 무료배송</DeliverySpan>
        <WrapOrderNumDiv>
          <OrderNum />
        </WrapOrderNumDiv>
        <WrapCostDiv>
          <TotalP>총 상품 금액</TotalP>
          <div>
            <TotalSpan>
              총 수량 <TotalNumberSpan>1</TotalNumberSpan>개 |{" "}
            </TotalSpan>
            <TotalNumberStrong>
              17,500 <UnitSpan> 원</UnitSpan>
            </TotalNumberStrong>
          </div>
        </WrapCostDiv>
      </div>
    </ProductDetailArticle>
  );
}
