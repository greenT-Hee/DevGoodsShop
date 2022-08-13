import mainLogo from "../assets/Logo-hodu.png";
import styled from "styled-components";
import { useState } from "react";
import AxiosInstance from "../Axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const LoginSection = styled.section`
  margin: 80px auto;
  width: 550px;
`;

const MainLogo = styled.img`
  width: 238px;
  margin-left: 156px;
`;

const LoginDiv = styled.div`
  width: 550px;
  height: 292px;
  margin-top: 50px;
  padding: 35px;
  box-sizing: border-box;
  border-radius: 10px;
  border: 1px solid #c4c4c4;
  background-color: #fff;
`;

const LoginInput = styled.input`
  width: 480px;
  height: 60px;
  margin-bottom: 6px;
  font-size: 16px;
  border: none;
  border-bottom: 1px solid #c4c4c4;
`;

const LoginBtn = styled.button`
  width: 480px;
  height: 60px;
  margin-top: 35px;
  font-weight: 700;
  font-size: 18px;
  border-radius: 5px;
  background-color: #21bf48;
  color: #fff;
`;

const WrapLinkDiv = styled.ul`
  width: fit-content;
  margin: 30px auto;
`;

const LinkJoin = styled.li`
  list-style-type: none;
  display: inline-block;
  font-size: 16px;
  color: #333333;
  margin: 0 16px;

  &::before {
    position: absolute;
    content: "";
    top: 528px;
    left: 258px;
    width: 1px;
    height: 18px;
    background-color: #333333;
  }
`;

const LinkFindPW = styled.li`
  list-style-type: none;
  display: inline-block;
  font-size: 16px;
  color: #333333;
  margin: 0 16px;
`;

const Login = () => {
  //post req에 보낼 데이터 생성
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const onChangeUsername = (e) => {
    setUsername(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  // form의 새로고침 방지 및 login 함수 실행
  const onSubmitHandler = (e) => {
    e.preventDefault();
    login();
  };

  const login = async () => {
    try {
      const response = await AxiosInstance.post("accounts/login/", {
        username: username,
        password: password,
        login_type: "BUYER",
      });
      if (response.status === "200") {
        // successLogin();
      }
      console.log(response.status);
    } catch {
      console.error("Error");
    }
  };

  //로그인 성공하면 productListpage로 이동
  // const navigate = useNavigate();
  // const successLogin = () => {
  //   // navigate("/productList");
  // };

  return (
    <LoginSection>
      <h2 className="ir">로그인 페이지</h2>
      <MainLogo src={mainLogo} alt="메인로고" />
      <LoginDiv>
        <form onSubmit={onSubmitHandler}>
          <LoginInput
            id="username"
            name="username"
            type="text"
            placeholder="아이디"
            value={username}
            onChange={onChangeUsername}
            required
          />
          <LoginInput
            id="password"
            name="password"
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={onChangePassword}
            required
          />
          <LoginBtn>로그인</LoginBtn>
        </form>
      </LoginDiv>
      <WrapLinkDiv>
        <LinkJoin>
          <Link
            to="/signUp"
            style={{ textDecoration: "none", color: "#333333" }}
          >
            회원가입
          </Link>
        </LinkJoin>
        <LinkFindPW>비밀번호 찾기</LinkFindPW>
      </WrapLinkDiv>
    </LoginSection>
  );
};

export default Login;
