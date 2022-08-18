import styled from "styled-components";
import mainLogo from "../assets/Logo-hodu.png";
import cartLogo from "../assets/icon-shopping-cart.svg";
import userImg from "../assets/icon-user.svg";
import { Link } from "react-router-dom";
import MyModal from "./MyModal";
import { useState } from "react";

const Header = styled.header`
  width: 100%;
  background: #ffffff;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.1);
`;

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
  position: relative;
  gap: 26px;
`;

const WrapIconLi = styled.li`
  text-decoration: none;
  text-align: center;
`;

const HeaderIcon = styled.img`
  width: 30px;
  padding-bottom: 2px;
`;

const HeaderText = styled.p`
  font-weight: 400;
  font-size: 12px;
  color: #767676;
  width: 56px;
`;

export const HomeHeader = () => {
  return (
    <Header>
      <WrapHeader>
        <LogoWrapDiv>
          <Link to="/">
            <MainLogo src={mainLogo} alt="홈페이지 로고" />
          </Link>
          <Search type="text" />
        </LogoWrapDiv>
        <WrapIcon>
          <li>
            <a href="#">
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
    </Header>
  );
};

export const ProductListHeader = () => {
  const [isModeal, setIsModal] = useState(false);
  const handleModal = () => {
    if (isModeal === true) {
      setIsModal(false);
    } else {
      setIsModal(true);
    }
  };

  return (
    <Header>
      <WrapHeader>
        <LogoWrapDiv>
          <Link to="/">
            <MainLogo src={mainLogo} alt="홈페이지 로고" />
          </Link>
          <Search type="text" />
        </LogoWrapDiv>
        <WrapIcon>
          <WrapIconLi>
            <button href="#none">
              <HeaderIcon src={cartLogo} alt="장바구니" />
              <HeaderText>장바구니</HeaderText>
            </button>
          </WrapIconLi>
          <WrapIconLi>
            <button onClick={handleModal}>
              <HeaderIcon src={userImg} alt="마이페이지" />
              <HeaderText>마이페이지</HeaderText>
            </button>
          </WrapIconLi>
          {isModeal && <MyModal />}
        </WrapIcon>
      </WrapHeader>
    </Header>
  );
};
