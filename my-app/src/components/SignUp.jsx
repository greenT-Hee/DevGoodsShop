import { useCallback, useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import mainLogo from "../assets/mainLogo.png";
import AxiosInstance from "../Axios";
import { Link } from "react-router-dom";

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

const JoinInput = styled.input`
  box-sizing: border-box;
  width: 480px;
  height: 54px;
  margin: 10px 0 12px;
  font-size: 16px;
  border: 1px solid #c4c4c4;
  border-radius: 5px;

  &:active,
  &:focus {
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
  background-color: ${(props) => (props.able ? "#21bf48" : "#c4c4c4")};
  color: #fff;
`;

const ErrorMsg = styled.p`
  padding-bottom: 16px;
  color: red;
`;

const SuccessMsg = styled.p`
  padding-bottom: 16px;
  color: #21bf48;
`;

const CheckIdBtn = styled.button`
  width: 122px;
  height: 55px;
  border-radius: 5px;
  color: #fff;
  background-color: ${(props) =>
    props.disabled
      ? `${props.theme.color.gray2}`
      : `${props.theme.color.main}`};
`;

const SignUp = () => {
  // input 값 초기 설정
  const [username, setUsername] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [name, setName] = useState("");
  const [phoneNum, setPhoneNum] = useState("");

  // 오류메세지 출력 설정
  const [usernameMsg, setUsernameMsg] = useState("");
  const [password1Msg, setPassword1Msg] = useState("");
  const [password2Msg, setPassword2Msg] = useState("");
  const [nameMsg, setNameMsg] = useState("");
  const [phoneNumMsg, setPhoneNumMsg] = useState("");

  // 유효성 검사 설정
  // 모든 필드 필수
  const [isUsername, setIsUsername] = useState(false);
  const [isPassword1, setIsPassword1] = useState(false);
  const [isPassword2, setIsPassword2] = useState(false);
  const [isName, setIsName] = useState(false);
  const [isPhoneNum, setIsPhoneNum] = useState(false);

  //계정 검증
  const checkAccount = async () => {
    try {
      const response = await AxiosInstance.post("/accounts/signup/valid/", {
        username: username,
      });
      console.log(response);
      setUsernameMsg(response.data.Success);
    } catch {
      setUsernameMsg("이미 존재하는 아이디입니다.");
      setIsUsername(false);
      console.log("Err");
    }
  };

  const handleCheckAcoount = (e) => {
    e.preventDefault();
    checkAccount();
  };

  const signUp = async () => {
    try {
      const response = await AxiosInstance.post("accounts/signup/", {
        username: username,
        password: password1,
        password2: password2,
        phone_number: phoneNum,
        name: name,
      });
      console.log(response);
      if (response.status === 201) {
        successJoin();
      }
    } catch {
      console.error("ERROR");
      alert(`📱 휴대폰 번호를 다시 확인해주세요`);
    }
  };

  const navigate = useNavigate();
  const successJoin = () => {
    navigate("/login");
  };

  // 가입하기 버튼 누르기
  const handleSubmitJoin = (e) => {
    e.preventDefault();
    signUp();
  };
  console.log(username, password1, password2, name, phoneNum);

  // input값 입력 & 유효성 검사
  //아이디
  // 20자 이내의 영어 소문자,대문자, 숫자만 가능
  const handleUsername = useCallback((e) => {
    const patternUsername = /^[a-zA-Z0-9]{1,20}$/;
    const usernameCurrent = e.target.value;
    setUsername(usernameCurrent);

    if (!patternUsername.test(usernameCurrent)) {
      setUsernameMsg("20자 이내의 영어 소문자,대문자, 숫자만 가능합니다.");
      setIsUsername(false);
    } else {
      setUsernameMsg("올바른 형식입니다.");
      setIsUsername(true);
    }
  }, []);

  // 비밀번호
  // 비번 10자리 이상, 영소문자 포함,
  const handlePw1 = useCallback((e) => {
    const patternPw1 = /^[a-zA-Z0-9!@#$%^&*]{10,50}$/;
    const password1Current = e.target.value;
    setPassword1(password1Current);

    if (!patternPw1.test(password1Current)) {
      setPassword1Msg("영소문자, 숫자를 포함한 10자 이상이어야 합니다.");
      setIsPassword1(false);
    } else {
      setPassword1Msg("안전한 비밀번호에요 :)");
      setIsPassword1(true);
    }
  }, []);

  // 비밀번호 확인
  const handlePw2 = useCallback(
    (e) => {
      const password2Current = e.target.value;
      setPassword2(password2Current);

      if (password1 === password2Current) {
        setPassword2Msg("비밀번호가 일치합니다 :)");
        setIsPassword2(true);
      } else {
        setPassword2Msg("비밀번호와 일치하지 않습니다. 다시 입력해주세요.");
        setIsPassword2(false);
      }
    },
    [password1]
  );

  //이름
  const handleName = (e) => {
    setName(e.target.value);
    setNameMsg("멋진 이름이네요 :)");
    setIsName(true);
  };

  //휴대전화
  //핸드폰 번호는 010으로 시작하는 10-11자리 숫자
  //^010([0-9]{3,4})([0-9]{4})$
  const handlephoneNum = useCallback((e) => {
    const patternPhoneNum = /^010([0-9]{3,4})([0-9]{4})$/;
    const phoneNumCurrent = e.target.value;
    setPhoneNum(phoneNumCurrent);
    setIsPhoneNum(true);

    if (!patternPhoneNum.test(phoneNumCurrent)) {
      setPhoneNumMsg("- 없이 010으로 시작하는 10-11자리 숫자를 입력하세요");
      setIsPhoneNum(false);
    } else {
      setPhoneNumMsg("올바른 형식입니다 :)");
      setIsPhoneNum(true);
    }
  }, []);

  return (
    <LoginSection>
      <h2 className="ir">로그인 페이지</h2>
      <Link to="/">
        <MainLogo src={mainLogo} alt="메인로고" />
      </Link>
      <LoginDiv>
        <form onSubmit={handleSubmitJoin}>
          <JoinLabel htmlFor="username">
            아이디
            <FlexDiv1>
              <JoinInput
                id="username"
                name="username"
                type="text"
                required
                onChange={handleUsername}
              />
              {!isUsername && <CheckIdBtn disabled>중복 확인</CheckIdBtn>}
              {isUsername && (
                <CheckIdBtn onClick={handleCheckAcoount}>중복 확인</CheckIdBtn>
              )}
            </FlexDiv1>
            {(username.length > 0 && !isUsername && (
              <ErrorMsg>{usernameMsg}</ErrorMsg>
            )) ||
              (username.length > 0 && isUsername && (
                <SuccessMsg>{usernameMsg}</SuccessMsg>
              ))}
          </JoinLabel>
          <JoinLabel htmlFor="password">
            비밀번호
            <JoinInput
              id="password"
              name="password"
              type="password"
              onChange={handlePw1}
              required
            />
            {(password1.length > 0 && !isPassword1 && (
              <ErrorMsg>{password1Msg}</ErrorMsg>
            )) ||
              (password1.length > 0 && isPassword1 && (
                <SuccessMsg>{password1Msg}</SuccessMsg>
              ))}
          </JoinLabel>
          <JoinLabel htmlFor="checkPW">
            비밀번호 재확인
            <JoinInput
              id="checkPW"
              name="password"
              type="password"
              onChange={handlePw2}
              required
            />
            {(password2.length > 0 && !isPassword2 && (
              <ErrorMsg>{password2Msg}</ErrorMsg>
            )) ||
              (password2.length > 0 && isPassword2 && (
                <SuccessMsg>{password2Msg}</SuccessMsg>
              ))}
          </JoinLabel>
          <JoinLabel htmlFor="name">
            이름
            <JoinInput
              id="name"
              name="name"
              type="text"
              onChange={handleName}
              required
            />
            {(name.length > 0 && !isName && <ErrorMsg>{nameMsg}</ErrorMsg>) ||
              (name.length > 0 && isName && <SuccessMsg>{nameMsg}</SuccessMsg>)}
          </JoinLabel>
          <JoinLabel htmlFor="number">
            휴대폰 번호
            <JoinInput
              id="phoneNum"
              name="phoneNum"
              type="text"
              onChange={handlephoneNum}
              required
            />
            {(phoneNum.length > 0 && !isPhoneNum && (
              <ErrorMsg>{phoneNumMsg}</ErrorMsg>
            )) ||
              (phoneNum.length > 0 && isPhoneNum && (
                <SuccessMsg>{phoneNumMsg}</SuccessMsg>
              ))}
          </JoinLabel>
          <JoinLabel htmlFor="이메일">
            이메일
            <JoinInput id="email" name="email" type="email" />
          </JoinLabel>
        </form>
      </LoginDiv>
      <form onSubmit={handleSubmitJoin}>
        <CheckBoxP>
          <input type="checkbox" required />
          호두샵의 <a href="#none">이용약관</a> 및{" "}
          <a href="#none">개인정보처리방침</a>에 대한 내용을 확인하였고
          동의합니다.
        </CheckBoxP>
        {((!username || !password1 || !password2 || !phoneNum || !name) && (
          <LoginBtn disabled>가입하기</LoginBtn>
        )) ||
          (username && password1 && password2 && phoneNum && name && (
            <LoginBtn able>가입하기</LoginBtn>
          ))}
      </form>
    </LoginSection>
  );
};

export default SignUp;
