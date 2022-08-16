import styled from "styled-components";

const CardLi = styled.li`
  width: 380px;
  box-sizing: border-box;
  border-radius: 10px;
`;

const ProductImgWrap = styled.div`
  width: 380px;
  height: 380px;
  border: 1px solid #c4c4c4;
  border-radius: 10px;
`;

const ProdcuctImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
`;

const ProductInfoSpan = styled.p`
  color: #767676;
  font-size: 16px;
  padding-top: 16px;
`;

const ProductNameSpan = styled.p`
  font-size: 18px;
  padding: 10px 0;
`;

const ProductPriceStrong = styled.strong`
  font-size: 18px;
  font-weight: 700;
`;

const ProductPriceSpan = styled.span`
  font-size: 16px;
  padding-left: 2px;
`;

export default function ProductItem({
  productName,
  image,
  price,
  productInfo,
}) {
  return (
    <CardLi>
      <ProductImgWrap>
        <ProdcuctImg src={image} alt="상품 사진" />
      </ProductImgWrap>
      <ProductInfoSpan>{productInfo}</ProductInfoSpan>
      <ProductNameSpan>{productName}</ProductNameSpan>
      <ProductPriceStrong>
        {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
      </ProductPriceStrong>
      <ProductPriceSpan>원</ProductPriceSpan>
    </CardLi>
  );
}
