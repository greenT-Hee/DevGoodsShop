import styled from "styled-components";
import mainLogo from "../assets/mainLogo.png";
import cartLogo from "../assets/icon-shopping-cart.svg";
import userImg from "../assets/icon-user.svg";
import { Link, useNavigate } from "react-router-dom";
import MyModal from "./MyModal";
import { useState } from "react";

const Header = styled.header`
  background: ${(props) => props.theme.color.white};
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.1);
  padding: 22px 100px;
`;

const WrapHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const LogoWrapDiv = styled.div`
  display: flex;
  align-items: center;
`;

const MainLogo = styled.img`
  width: 180px;

  padding: 0px 30px 0 0;
`;

const SearchInput = styled.input`
  width: 400px;
  box-sizing: border-box;
  background: ${(props) => props.theme.color.white};
  border: 2px solid ${(props) => props.theme.color.main};
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
          <label htmlFor="search" className="ir">
            검색창
          </label>
          <SearchInput type="search" id="search" />
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
          <SearchInput
            type="search"
            id="search"
            placeholder="검색어를 입력하세요"
          />
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
