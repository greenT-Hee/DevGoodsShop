import styled from "styled-components";
import mainLogo from "../assets/Logo-hodu.png";
import cartLogo from "../assets/icon-shopping-cart.svg";
import cartUser from "../assets/icon-user.svg";
import { Link } from "react-router-dom";

const HeaderSection = styled.header`
  width: 100%;
`;

const WrapHeader = styled.div`
  display: flex;
  align-items: center;
  width: 1280px;
  box-sizing: border-box;
  margin: 0 auto;
  padding: 22px;
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
  margin-right: 555px;
`;

const WrapIcon = styled.div`
  display: flex;
  gap: 26px;
  width: 118px;
`;

const HeaderIcon = styled.img`
  width: 30px;
  padding-left: 2px;
`;

const HeaderText = styled.p`
  font-weight: 400;
  font-size: 12px;
  color: #767676;
`;

const Header = () => {
  return (
    <HeaderSection>
      <WrapHeader>
        <MainLogo src={mainLogo} alt="홈페이지 로고" />
        <Search type="text" />
        <WrapIcon>
          <a href="#none" style={{ textDecoration: "none" }}>
            <HeaderIcon src={cartLogo} alt="장바구니" />
            <HeaderText>장바구니</HeaderText>
          </a>
          <Link to="/login" style={{ textDecoration: "none" }}>
            <HeaderIcon src={cartUser} alt="로그인" />
            <HeaderText>로그인</HeaderText>
          </Link>
        </WrapIcon>
      </WrapHeader>
    </HeaderSection>
  );
};

export default Header;
