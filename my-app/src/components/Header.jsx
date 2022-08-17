import styled from "styled-components";
import mainLogo from "../assets/Logo-hodu.png";
import cartLogo from "../assets/icon-shopping-cart.svg";
import userImg from "../assets/icon-user.svg";
import { Link } from "react-router-dom";

const WrapHeader = styled.div`
  display: flex;
  width: 1280px;
  justify-content: space-between;
  box-sizing: border-box;
  margin: 0 auto;
  padding: 22px;
`;

const LogoWrapDiv = styled.div`
  display: flex;
  align-items: center;
`;

const MainLogo = styled.img`
  width: 124px;
  height: 38px;
  padding: 0px 30px 0 0;
`;

const Search = styled.input`
  width: 400px;
  box-sizing: border-box;
  background: #ffffff;
  border: 2px solid #21bf48;
  border-radius: 50px;
  padding: 13px 22px;
`;

const WrapIcon = styled.ul`
  display: flex;
  gap: 26px;
`;

const WrapIconLi = styled.li`
  text-decoration: none;
  text-align: center;
`;

const HeaderIcon = styled.img`
  width: 30px;
  padding-left: 2px;
`;

const HeaderText = styled.p`
  font-weight: 400;
  font-size: 12px;
  color: #767676;
  width: 56px;
`;

export const HomeHeader = () => {
  return (
    <header>
      <WrapHeader>
        <LogoWrapDiv>
          <Link to="/">
            <MainLogo src={mainLogo} alt="홈페이지 로고" />
          </Link>
          <Search type="text" />
        </LogoWrapDiv>
        <WrapIcon>
          <li>
            <a href="#none">
              <HeaderIcon src={cartLogo} alt="장바구니" />
              <HeaderText>장바구니</HeaderText>
            </a>
          </li>
          <li>
            <Link to="/login">
              <HeaderIcon src={userImg} alt="로그인" />
              <HeaderText>로그인</HeaderText>
            </Link>
          </li>
        </WrapIcon>
      </WrapHeader>
    </header>
  );
};

export const ProductListHeader = () => {
  return (
    <header>
      <WrapHeader>
        <LogoWrapDiv>
          <Link to="/">
            <MainLogo src={mainLogo} alt="홈페이지 로고" />
          </Link>
          <Search type="text" />
        </LogoWrapDiv>
        <WrapIcon>
          <WrapIconLi>
            <a href="#none">
              <HeaderIcon src={cartLogo} alt="장바구니" />
              <HeaderText>장바구니</HeaderText>
            </a>
          </WrapIconLi>
          <WrapIconLi>
            <a href="#none">
              <HeaderIcon src={userImg} alt="마이페이지" />
              <HeaderText>마이페이지</HeaderText>
            </a>
          </WrapIconLi>
        </WrapIcon>
      </WrapHeader>
    </header>
  );
};
