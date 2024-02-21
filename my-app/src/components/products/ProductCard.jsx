import {  useState } from "react";
import ProductItem from "./productItem";
import styled from "styled-components";
import searchIcon from "../../assets/icon-search.svg"

const CardUl = styled.ul`
  max-width: 1200px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)) ;
  box-sizing: border-box;
  gap: 40px;
  margin: 80px auto;
  padding: 0 20px;
`;

const WrapSearch = styled.div`
  position: relative;
  max-width: 400px;
  margin: 40px auto 0;
`
const SearchInput = styled.input`
  width: 100%;
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
  const [searchVal, setSearchVal] = useState("");
  const searchProduct = (e) => {
    // const searchResult =  products.filter( ele => ele.product_name.includes(searchVal) || ele.product_info.includes(searchVal));
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
