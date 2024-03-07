import styled from "styled-components";
import { Link } from "react-router-dom";
import mainLogo from "../assets/mainLogo.png";
import GeneralSignup from "../components/signup/GeneralSignup";
import SellerSignup from "../components/signup/SellerSignup";

const Section = styled.section`
  max-width: 450px;
  width: 100%;
  margin: 40px auto;
`
const Logo = styled.img`
  display: block;
  width: 220px;
  margin: 40px auto;
`
const MenuUl = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  box-sizing: border-box;
  gap: 20px;
  margin-bottom: 30px;
`
const MenuLi = styled.li`
  width: calc(100% / 2);
  padding: 20px;
  border: 1px solid ${(props) => props.theme.color.grey4};
  border-radius: 8px;
  cursor: pointer;
  color:  ${(props) => props.theme.color.grey4};
`

export default function SignUpPage() {

 
  return (
    <>
    <Section>
      <h2 className="ir">로그인 페이지</h2>
      <Logo src={mainLogo} alt="메인 로고" />
      <MenuUl>
        <MenuLi>구매자 회원가입</MenuLi>
        <MenuLi>판매자 회원가입</MenuLi>
      </MenuUl>
      <GeneralSignup />
   
    </Section>
    </>
  )
}
