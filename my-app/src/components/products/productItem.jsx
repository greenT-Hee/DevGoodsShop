import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useQueryClient, useQuery } from "@tanstack/react-query";
import AxiosInstance from "../../Axios";
import { useEffect } from "react";

const CardLi = styled.li`
  box-sizing: border-box;
  border-radius: 10px;
`;

const ProductImgWrap = styled.button`
  border: 1px solid ${(props) => props.theme.color.gray2};
  border-radius: 10px;
`;

const ProdcuctImg = styled.img`
  width: 100%;
  height: 350px;
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
  font-size: 24px;
  font-weight: 900;
  padding: 100px 0;
  color: ${(props) => props.theme.color.main};
`;


export default function ProductItem() {
  const nav = useNavigate();
  const getProducts = async () => {
    const res = await AxiosInstance.get('/products');
    return res.data.results;
  };
  
  const { isLoading, data, error } = useQuery({ queryKey: ['getProducts'], queryFn: getProducts });
  
  return (
    isLoading ? <LoadingP>잠시만 기다려 주세요 😭</LoadingP> :
    data?.map((ele) => {
      return (
        <CardLi key={ele.product_id}>
          <ProductImgWrap onClick={() => {nav(`productDetail/${ele.product_id}`)}}>
            <ProdcuctImg src={ele.image} alt="상품 사진" />
          </ProductImgWrap>
          <ProductInfoSpan>{ele.product_info}</ProductInfoSpan>
          <ProductNameSpan>{ele.product_name}</ProductNameSpan>
          <ProductPriceStrong>
            {ele.price}
            <ProductPriceSpan>원</ProductPriceSpan>
            {ele.stock === 0 && <SoldoutSpan>{` (품절)`}</SoldoutSpan>}
          </ProductPriceStrong>
        </CardLi>
      )
    })
  )
};
  
