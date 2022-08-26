import mainLogo from "../assets/mainLogo.png";
import styled from "styled-components";
import { useState } from "react";
import AxiosInstance from "../Axios";
import { Link } from "react-router-dom";
import { setCookies } from "../Cookie";
import { useNavigate } from "react-router-dom";

const LoginSection = styled.section`
  margin: 80px auto;
  width: 550px;
`;

const MainLogo = styled.img`
  width: 280px;
  display: block;
  margin: 0 auto;
`;

const LoginDiv = styled.div`
  width: 550px;
  height: 292px;
  margin-top: 35px;
  padding: 35px;
  box-sizing: border-box;
  border-radius: 10px;
  border: 1px solid ${(props) => props.theme.color.gray2};
  background-color: ${(props) => props.theme.color.white};
`;

const LoginInput = styled.input`
  width: 480px;
  height: 60px;
  margin-bottom: 6px;
  font-size: 16px;
  border: none;
  border-bottom: 1px solid ${(props) => props.theme.color.gray2};
`;

const LoginBtn = styled.button`
  width: 480px;
  height: 60px;
  margin-top: 35px;
  font-weight: 700;
  font-size: 18px;
  border-radius: 5px;
  background-color: ${(props) =>
    props.disabled ? props.theme.color.gray2 : props.theme.color.main};
  color: ${(props) => props.theme.color.white};
`;

const WrapLinkUl = styled.ul`
  width: fit-content;
  position: relative;
  margin: 30px auto;

  &::after {
    position: absolute;
    content: "";
    top: 0;
    left: 90px;
    width: 1px;
    height: 18px;
    background-color: ${(props) => props.theme.color.gray4};
  }
`;

const LinkJoin = styled.li`
  list-style-type: none;
  display: inline-block;
  font-size: 16px;
  color: ${(props) => props.theme.color.gray4};
  margin: 0 16px;
`;

const LinkFindPW = styled.li`
  list-style-type: none;
  display: inline-block;
  font-size: 16px;
  color: ${(props) => props.theme.color.gray4};
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

      if (response.data.token) {
        setCookies("refreshToken", "JWT " + response.data.token, {
          path: "/",
          sameSite: "strict",
        });
        successLogin();
      }
      console.log(response);
    } catch {
      console.error("Error");
      alert("아이디와 비밀번호가 일치하지 않습니다.");
    }
  };

  //로그인 성공하면 productListpage로 이동
  const navigate = useNavigate();
  const successLogin = () => {
    navigate("/");
  };

  return (
    <LoginSection>
      <h2 className="ir">로그인 페이지</h2>
      <Link to="/">
        <MainLogo src={mainLogo} alt="메인로고" />
      </Link>
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
          {(!username || !password) && <LoginBtn disabled>로그인</LoginBtn>}
          {username && password && <LoginBtn>로그인</LoginBtn>}
        </form>
      </LoginDiv>
      <WrapLinkUl>
        <LinkJoin>
          <Link
            to="/signUp"
            style={{ textDecoration: "none", color: "#333333" }}
          >
            회원가입
          </Link>
        </LinkJoin>
        <LinkFindPW>비밀번호 찾기</LinkFindPW>
      </WrapLinkUl>
    </LoginSection>
  );
};

export default Login;
