import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const CardLi = styled.li`
  width: 380px;
  box-sizing: border-box;
  border-radius: 10px;
`;

const ProductImgWrap = styled.button`
  width: 380px;
  height: 380px;
  border: 1px solid ${(props) => props.theme.color.gray2};
  border-radius: 10px;
`;

const ProdcuctImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
`;

const ProductInfoSpan = styled.p`
  color: ${(props) => props.theme.color.gray3};
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

const SoldoutSpan = styled.span`
  color: ${(props) => props.theme.color.point};
`;

export default function ProductItem({
  productId,
  productName,
  image,
  price,
  productInfo,
  stock,
}) {
  const nav = useNavigate();
  const goDetailPage = () => {
    nav(`/productDetail/${productId}`);
    localStorage.setItem("id", productId);
  };

  return (
    <CardLi>
      <ProductImgWrap onClick={goDetailPage}>
        <ProdcuctImg src={image} alt="상품 사진" />
      </ProductImgWrap>
      <ProductInfoSpan>{productInfo}</ProductInfoSpan>
      <ProductNameSpan>{productName}</ProductNameSpan>
      <ProductPriceStrong>
        {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        <ProductPriceSpan>원</ProductPriceSpan>
        {stock === 0 && <SoldoutSpan>{` (품절)`}</SoldoutSpan>}
      </ProductPriceStrong>
    </CardLi>
  );
}
