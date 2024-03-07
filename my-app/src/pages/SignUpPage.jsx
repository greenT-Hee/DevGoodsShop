import styled from "styled-components";
import { Link } from "react-router-dom";
import mainLogo from "../assets/mainLogo.png";
import GeneralSignup from "../components/signup/GeneralSignup";
import SellerSignup from "../components/signup/SellerSignup";


const LoginSection = styled.section`
  margin: 80px auto;
  width: 550px;
`;

const MainLogo = styled.img`
  width: 238px;
  max-width: 100%;
  display: block;
  margin: 0 auto 40px;
`;

const MenuArea = styled.article`
  position: relative;
  max-width: 550px;
  margin: 0 auto -10px;
  z-index: 5;
  `

const MenuUl = styled.ul`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  text-align: center;
  
  `
const MenuLi = styled.li`
  width: calc(100% / 2);
  padding: 30px 20px;
  border: 1px solid #cdcdcd;
  border-bottom: unset;
  cursor: pointer;
`


export default function SignUpPage() {

 
  return (
    <LoginSection>
      <h2 className="ir">로그인 페이지</h2>
      <Link to="/">
        <MainLogo src={mainLogo} alt="메인로고" />
      </Link>
      {/* 일반 회원가입 */}
      <GeneralSignup />
      {/* 판매자 회원가입 */}
    </LoginSection>
  )
}
