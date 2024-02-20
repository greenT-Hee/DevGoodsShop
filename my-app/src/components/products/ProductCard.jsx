import { useEffect } from "react";
import AxiosInstance from "../../Axios";
import ProductItem from "./productItem";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { setProducts } from "../../redux/actions/productsAction";

const CardUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 1280px;
  box-sizing: border-box;
  gap: 70px;
  margin: 80px auto;
`;

const SearchInput = styled.input`
  width: 400px;
  box-sizing: border-box;
  background: ${(props) => props.theme.color.white};
  border: 2px solid ${(props) => props.theme.color.main};
  border-radius: 50px;
  padding: 13px 22px;
`;

export default function ProductCard() {
  const dispatch = useDispatch();

  const getProductList = async () => {
    try {
      const response = await AxiosInstance.get("products/");
      dispatch(setProducts(response.data.results));
    } catch {
      console.error("Error");
    }
  };
  useEffect(() => {
    getProductList();
  }, []);

  return (
    <>
    <div>
      <label htmlFor="search" className="ir">검색창</label>
      <SearchInput type="search" id="search" />
    </div>
      <CardUl>
        <ProductItem />
      </CardUl>
    </>
  );
}
