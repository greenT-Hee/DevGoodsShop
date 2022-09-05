import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

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

const LoadingP = styled.p`
  margin: 0 auto;
  font-size: 42px;
  font-weight: 900;
  color: ${(props) => props.theme.color.main};
`;

export default function ProductItem() {
  const products = useSelector((state) => state.allProducts.products);
  const nav = useNavigate();

  const renderList = products.map((item) => {
    const { image, product_id, product_name, product_info, price, stock } =
      item;
    const goDetailPage = () => {
      nav(`/productDetail/${product_id}`);
      localStorage.setItem("id", product_id);
    };
    return (
      <CardLi key={product_id} onClick={goDetailPage}>
        <ProductImgWrap>
          <ProdcuctImg src={image} alt="상품 사진" />
        </ProductImgWrap>
        <ProductInfoSpan>{product_info}</ProductInfoSpan>
        <ProductNameSpan>{product_name}</ProductNameSpan>
        <ProductPriceStrong>
          {price}
          <ProductPriceSpan>원</ProductPriceSpan>
          {stock === 0 && <SoldoutSpan>{` (품절)`}</SoldoutSpan>}
        </ProductPriceStrong>
      </CardLi>
    );
  });
  return (
    <>
      {Object.keys(products).length === 0 && <LoadingP>Loading...🛒</LoadingP>}
      {renderList}
    </>
  );
}
