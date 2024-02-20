import styled from "styled-components";
import mainLogo from "../assets/mainLogo.png";
import cartLogo from "../assets/icon-shopping-cart.svg";
import userImg from "../assets/icon-user.svg";
import { Link, useNavigate } from "react-router-dom";
import MyModal from "./MyModal";
import { useState } from "react";

const Header = styled.header`
  width: 100%;
  padding: 20px;
  background: ${(props) => props.theme.color.white};
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.08);
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 10000;
  box-sizing: border-box;
`;

const WrapHeader = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

const LogoWrapDiv = styled.div`
  display: flex;
  align-items: center;
`;

const MainLogo = styled.img`
  width: 300px;
`;

const WrapIcon = styled.ul`
  display: flex;
  align-items: flex-end;
  gap: 26px;
  float: right;
`;

const WrapIconLi = styled.li`
  text-decoration: none;
  text-align: center;
`;

const HeaderIcon = styled.img`
  width: 30px;
  height: 32px;
  padding: 10px 0 2px;
`;

const HeaderText = styled.p`
  font-weight: 400;
  font-size: 12px;
  color: ${(props) => props.theme.color.gray3};
  width: 56px;
`;

export const HomeHeader = () => {
  const navigate = useNavigate();
  const goLoginPage = () => {
    navigate("/login");
  };

  return (
    <Header>
      <WrapHeader>
        <LogoWrapDiv>
          <Link to="/">
            <MainLogo src={mainLogo} alt="홈페이지 로고" />
          </Link>
        </LogoWrapDiv>
        <WrapIcon>
          <li>
            <button>
              <HeaderIcon src={cartLogo} alt="장바구니" />
              <HeaderText>장바구니</HeaderText>
            </button>
          </li>
          <li>
            <button onClick={goLoginPage}>
              <HeaderIcon src={userImg} alt="로그인" />
              <HeaderText>로그인</HeaderText>
            </button>
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
          <label htmlFor="search" className="ir">
            검색창
          </label>
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
