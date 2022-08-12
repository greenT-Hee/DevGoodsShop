import { useState } from "react";
import styled from "styled-components";
import mainLogo from "../assets/Logo-hodu.png";
import AxiosInstance from "../Axios";

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
  margin-top: 50px;
  padding: 35px;
  box-sizing: border-box;
  border-radius: 10px;
  border: 1px solid #c4c4c4;
  background-color: #fff;
`;

const JoinLabel = styled.label`
  font-size: 16px;
  color: #767676;
`;

const FlexDiv1 = styled.div`
  display: flex;
  align-items: center;
  padding: 0;
  gap: 12px;
`;

const JoinIdInput = styled.input`
  box-sizing: border-box;
  width: 346px;
  height: 54px;
  margin: 10px 0 12px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #c4c4c4;

  &:active,
  :hover {
    border: 1px solid #21bf48;
  }
`;

const CheckOverlapBtn = styled.button`
  width: 122px;
  height: 54px;
  border-radius: 5px;
  margin-top: 12px;
  color: #fff;
  background-color: #21bf48;
`;

const JoinInput = styled.input`
  box-sizing: border-box;
  width: 480px;
  height: 54px;
  margin: 10px 0 12px;
  font-size: 16px;
  border: 1px solid #c4c4c4;
  border-radius: 5px;

  &:active,
  :hover {
    border: 1px solid #21bf48;
  }
`;

const CheckBoxP = styled.p`
  margin: 34px auto;
`;

const LoginBtn = styled.button`
  width: 480px;
  height: 60px;
  margin-left: 35px;
  font-weight: 700;
  font-size: 18px;
  border-radius: 5px;
  background-color: #c4c4c4;
  color: #fff;
`;

const SignUp = () => {
  // input 값 초기 설정
  const [username, setUsername] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [name, setName] = useState("");
  const [phoneNum, setPhoneNum] = useState("");

  // input값 입력 & 유효성 검사
  //아이디
  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  // 비밀번호
  const handlePw1 = (e) => {
    setPassword1(e.target.value);
  };

  // 비밀번호 확인
  const handlePw2 = (e) => {
    setPassword2(e.target.value);
  };

  //이름
  const handleName = (e) => {
    setName(e.target.value);
  };

  //휴대전화
  const handlephoneNum = (e) => {
    setPhoneNum(e.target.value);
  };

  // 가입하기 버튼 누르기
  const handleSubmitJoin = (e) => {
    e.preventDefault();
    signUp();
  };
  console.log(username, password1, password2, name, phoneNum);

  const signUp = async () => {
    try {
      const response = await AxiosInstance.post("accounts/signup/", {
        username: username, // 아이디
        password: password1,
        password2: password2,
        phone_number: phoneNum, // 전화번호는 010으로 시작하는 10~11자리 숫자
        name: name, // 이름
      });
      console.log(response);
    } catch {
      console.error("ERROR");
    }
  };
  return (
    <LoginSection>
      <h2 className="ir">로그인 페이지</h2>
      <MainLogo src={mainLogo} alt="메인로고" />
      <LoginDiv>
        <form onSubmit={handleSubmitJoin}>
          <FlexDiv1>
            <JoinLabel htmlFor="username">
              아이디
              <JoinIdInput
                id="username"
                name="username"
                type="text"
                onChange={handleUsername}
              />
            </JoinLabel>
            <CheckOverlapBtn>중복확인</CheckOverlapBtn>
          </FlexDiv1>
          <JoinLabel htmlFor="password">
            비밀번호
            <JoinInput
              id="password"
              name="password"
              type="password"
              onChange={handlePw1}
            />
          </JoinLabel>
          <JoinLabel htmlFor="checkPW">
            비밀번호 재확인
            <JoinInput
              id="checkPW"
              name="password"
              type="password"
              onChange={handlePw2}
            />
          </JoinLabel>
          <JoinLabel htmlFor="name">
            이름
            <JoinInput
              id="name"
              name="name"
              type="text"
              onChange={handleName}
            />
          </JoinLabel>
          <JoinLabel htmlFor="number">
            휴대폰번호
            <JoinInput
              id="phoneNum"
              name="phoneNum"
              type="text"
              onChange={handlephoneNum}
            />
          </JoinLabel>
          <JoinLabel htmlFor="이메일">
            이메일
            <JoinInput id="email" name="email" type="email" />
          </JoinLabel>
        </form>
      </LoginDiv>
      <form onSubmit={handleSubmitJoin}>
        <CheckBoxP>
          <input type="checkbox" />
          호두샵의 <a href="#none">이용약관</a> 및{" "}
          <a href="#none">개인정보처리방침</a>에 대한 내용을 확인하였고
          동의합니다.
        </CheckBoxP>
        <LoginBtn>가입하기</LoginBtn>
      </form>
    </LoginSection>
  );
};

export default SignUp;
