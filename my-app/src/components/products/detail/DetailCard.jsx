import AxiosInstance from "../../../Axios";
import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import OrderProduct from "./OrderProduct";
import { useEffect } from "react";

const ProductDetailArticle = styled.article`
  display: flex;
  gap: 50px;
  width: fit-content;
  margin: 140px auto;
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

export default function DetailCard() {
  const productId = localStorage.getItem("pid");

  const getProductDtail = async () => {
    const res = await AxiosInstance.get(`/products/${productId}`);
    localStorage.removeItem('pid');
    return res.data;
  };

  const { isLoading, data, error } = useQuery({ queryKey: ['productDetail'], queryFn: getProductDtail });

  const renderDetail = () => {
    return (
      isLoading? <LoadingP>상세 정보 불러오는 중</LoadingP> :
        <ProductDetailArticle>
          <ProdcuctImg src={data.image ? data.image : ""} alt="상품 사진" />
            <div>
              <ProductInfoP>{data.product_info}</ProductInfoP>
              <ProductNameP>{data.product_name}</ProductNameP>
              <ProductPriceStrong>
                {data.price.toLocaleString()}
                <ProductPriceSpan>원</ProductPriceSpan>
                {data.stock === 0 && <SoldoutSpan>{`(품절)`}</SoldoutSpan>}
              </ProductPriceStrong>
              {/* 주문 수량 */}
              <DeliverySpan>
                {data.shipping_method} / {data.shipping_fee.toLocaleString()}원
              </DeliverySpan>
              <OrderProduct stock={data.stock} price={data.price} shipping_fee={data.shipping_fee}/>
            </div>
        </ProductDetailArticle>
    )
  }
  return (
    <section>
      <h2 className="ir">상품 상세 페이지</h2>
      {renderDetail()}
    </section>
  );
}
