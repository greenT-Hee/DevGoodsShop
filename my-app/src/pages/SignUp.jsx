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
  margin-top: -1px;
  padding: 35px;
  box-sizing: border-box;
  border-radius: 0 0 10px 10px;
  border: 1px solid #c4c4c4;
  border-top: none;
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

const JoinNumberInput = styled.input`
  box-sizing: border-box;
  width: 152px;
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

const SelectFirstNum = styled.select`
  width: 152px;
  height: 54px;
  border-radius: 5px;
  text-align: center;
  border: 1px solid #c4c4c4;

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
  //
  const [username, setUsername] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [name, setName] = useState("");
  const [phoneNum1, setPhoneNum1] = useState("");
  const [phoneNum2, setPhoneNum2] = useState("");
  const [phoneNum3, setPhoneNum3] = useState("");

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };
  const handlePw1 = (e) => {
    setPassword1(e.target.value);
  };
  const handlePw2 = (e) => {
    setPassword2(e.target.value);
  };
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handlephoneNum1 = (e) => {
    setPhoneNum1(e.target.value);
  };
  const handlephoneNum2 = (e) => {
    setPhoneNum2(e.target.value);
  };
  const handlephoneNum3 = (e) => {
    setPhoneNum3(e.target.value);
  };
  // 가입하기 버튼
  const handleSubmitJoin = (e) => {
    e.preventDefault();
    signUp();
  };
  console.log(
    username,
    password1,
    password2,
    name,
    phoneNum1,
    phoneNum2,
    phoneNum3,
    handlephoneNum3
  );

  const signUp = async () => {
    try {
      const response = await AxiosInstance.post("accounts/signup/", {
        username: username, // 아이디
        password: password1,
        password2: password2,
        phone_number: `${phoneNum1}${phoneNum2}`, // 전화번호는 010으로 시작하는 10~11자리 숫자
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
            <CheckOverlapBtn type="submit">중복확인</CheckOverlapBtn>
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
              style={{ marginBottom: "40px" }}
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
            <FlexDiv1>
              <SelectFirstNum
                name="phoneNum1"
                id="phoneNum1"
                onChange={handlephoneNum1}
              >
                <option value="010">010</option>
                <option value="011">011</option>
                <option value="016">016</option>
                <option value="017">017</option>
              </SelectFirstNum>
              <JoinNumberInput
                id="phoneNum2"
                name="phoneNum2"
                type="text"
                onChange={handlephoneNum2}
              />
              <JoinNumberInput
                id="phoneNum3"
                name="phoneNum3"
                type="text"
                onChange={handlephoneNum3}
              />
            </FlexDiv1>
          </JoinLabel>
          <JoinLabel htmlFor="이메일">
            이메일
            <JoinInput id="email" name="email" type="email" required />
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
        <LoginBtn type="submit">가입하기</LoginBtn>
      </form>
    </LoginSection>
  );
};

export default SignUp;
