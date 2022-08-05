import mainLogo from "../assets/Logo-hodu.png";
import styled from "styled-components";

const LoginSection = styled.section`
  position: absolute;
  width: 550px;
  top: 100px;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: aliceblue;
`;

const MainLogo = styled.img`
  width: 238px;
  margin-left: 156px;
`;

const Login = () => {
  return (
    <LoginSection>
      <h2 className="ir">로그인 페이지</h2>
      <MainLogo src={mainLogo} alt="메인로고" />
    </LoginSection>
  );
};

export default Login;
