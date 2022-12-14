import { useSelector } from "react-redux";
import styled from "styled-components";
import OrderProduct from "./OrderProduct";

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
  color: ${(props) => props.theme.color.gray3};
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
  color: ${(props) => props.theme.color.gray3};
  font-size: 16px;
  margin: 138px 0 52px;
`;

const SoldoutSpan = styled.span`
  color: ${(props) => props.theme.color.point};
  font-size: 18px;
`;

const LoadingP = styled.p`
  text-align: center;
  padding-top: 150px;
  font-size: 42px;
  font-weight: 900;
  color: ${(props) => props.theme.color.main};
`;

export default function DetailContent() {
  const product = useSelector((state) => state.detailProduct);
  const {
    product_info,
    product_name,
    image,
    price,
    stock,
    shipping_fee,
    shipping_method,
  } = product;

  return (
    <ProductDetailArticle>
      {Object.keys(product).length === 0 ? (
        <LoadingP>Loading...π</LoadingP>
      ) : (
        <>
          <ProdcuctImg src={image} alt="μν μ¬μ§" />
          <div>
            <ProductInfoP>{product_info}</ProductInfoP>
            <ProductNameP>{product_name}</ProductNameP>
            <ProductPriceStrong>
              {price}
              <ProductPriceSpan>μ</ProductPriceSpan>
              {stock === 0 && <SoldoutSpan>{` (νμ )`}</SoldoutSpan>}
            </ProductPriceStrong>
            {/* μ£Όλ¬Έ μλ */}
            <DeliverySpan>
              {shipping_method} / {shipping_fee}μ
            </DeliverySpan>
            <OrderProduct />
          </div>
        </>
      )}
    </ProductDetailArticle>
  );
}
