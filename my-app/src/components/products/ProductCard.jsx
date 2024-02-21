import { useEffect, useState } from "react";
import AxiosInstance from "../../Axios";
import ProductItem from "./productItem";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../redux/actions/productsAction";
import searchIcon from "../../assets/icon-search.svg"

const CardUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 1280px;
  box-sizing: border-box;
  gap: 70px;
  margin: 0 auto;
`;

const WrapSearch = styled.div`
  position: relative;
  width: fit-content;
  margin: 40px auto 60px;
`
const SearchInput = styled.input`
  width: 400px;
  box-sizing: border-box;
  background: ${(props) => props.theme.color.white};
  border: 2px solid ${(props) => props.theme.color.main};
  border-radius: 50px;
  padding: 13px 22px;
  outline: unset;
`;

const SearchBtn = styled.button`
  display: block;
  width: fit-content;
  position: absolute;
  right: 13px;
  top: 8px;
  cursor: pointer;
  padding: 5px;
`

export default function ProductCard() {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();
  const [searchVal, setSearchVal] = useState("");

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

  const searchProduct = (e) => {
    // console.log(products.product_info)
    // console.log(products.product_name)
    // if(searchVal === "") return;
    const searchResult =  products.filter( ele => ele.product_name.includes(searchVal) || ele.product_info.includes(searchVal));
    console.log(searchResult)
  }

  return (
    <>
      <WrapSearch>
        <label htmlFor="search" className="ir">검색창</label>
        <SearchInput type="text" id="search" placeholder="검색어를 입력하세요." onChange={(e) => setSearchVal(e.target.value)}/>
        <SearchBtn type="button" onClick={searchProduct}>
          <img src={searchIcon} alt="검색 아이콘" />
        </SearchBtn>
      </WrapSearch>
      <CardUl>
        <ProductItem />
      </CardUl>
    </>
  );
}
