import mainLogo from "../assets/Logo-hodu.png";
import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LoginSection = styled.section`
  position: absolute;
  width: 550px;
  top: 47%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const MainLogo = styled.img`
  width: 238px;
  margin-left: 156px;
`;

const SelectMemberBtn = styled.button`
  width: 275px;
  height: 60px;
  box-sizing: border-box;
  margin-top: 71px;
  border-radius: 10px 10px 0 0;
  border: 1px solid #c4c4c4;
  border-bottom: none;
  font-weight: 500;
  font-size: 18px;
`;

const LoginDiv = styled.div`
  width: 550px;
  height: 292px;
  margin-top: -1px;
  padding: 35px;
  box-sizing: border-box;
  border-radius: 0 0 10px 10px;
  border: 1px solid #c4c4c4;
  border-top: none;
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

const WrapLinkDiv = styled.div`
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
  // const username = document.querySelector("#username");
  // const password = document.querySelector("#password");

  const url = "http://13.209.150.154:8000/";
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const onChangeUsername = (e) => {
    setUsername({
      ...username,
      [e.target.value]: e.target.value,
    });
  };
  const onChangePassword = (e) => {
    setPassword({
      ...password,
      [e.target.value]: e.target.value,
    });
  };
  console.log(username, password);
  const test = async () => {
    try {
      const response = await axios({
        method: "post",
        url: url + "accounts/login",
        body: {
          username: username,
          password: password,
          login_type: "BUYER",
        },
      });
      console.log(response);
    } catch {
      console.error("에러났다 인간아");
    }
  };
  // test();

  return (
    <LoginSection>
      <h2 className="ir">로그인 페이지</h2>
      <MainLogo src={mainLogo} alt="메인로고" />
      <SelectMemberBtn type="button">구매회원 로그인</SelectMemberBtn>
      <SelectMemberBtn
        type="button"
        style={{
          backgroundColor: "#F2F2F2",
          borderBottom: "1px solid #c4c4c4",
        }}
      >
        판매회원 로그인
      </SelectMemberBtn>
      <LoginDiv>
        <form action="">
          <LoginInput
            id="username"
            name="username"
            type="text"
            placeholder="아이디"
            onChange={onChangeUsername}
            required
          />
          <LoginInput
            id="password"
            name="password"
            type="password"
            placeholder="비밀번호"
            onChange={onChangePassword}
            required
          />
        </form>
        <LoginBtn type="submit">로그인</LoginBtn>
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
