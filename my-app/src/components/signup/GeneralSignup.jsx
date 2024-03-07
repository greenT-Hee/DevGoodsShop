import styled from "styled-components";

const ContentArticle = styled.article`
  border: 1px solid ${(props) => props.theme.color.gray2};
  padding: 20px;
  border-radius: 16px;
`
const WrapInput = styled.div`
  width: 100%;
  margin-bottom: 20px;
`

const FlexId = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
`

const BtnCheckId = styled.button`
  display: block;
  width: 120px;
  border: 1px solid ${(props) => props.theme.color.red};
  color: ${(props) => props.theme.color.red};
  padding: 16px 0;
  border-radius: 8px;
`
const Label = styled.label`
  display: block;
  font-size: 16px;
  font-weight: 600;
  color: ${(props) => props.theme.color.gray3};
  margin-bottom: 12px;
`
const Input = styled.input`
  display: block;
  box-sizing: border-box;
  width: 100%;
  border: none;
  outline: 1px solid ${(props) => props.theme.color.gray2};
  border-radius: 8px;
  padding: 16px 20px;

  &::placeholder {
    color: ${(props) => props.theme.color.gray2};
  }
`

const WrapCheckbox = styled.div`
  display: flex;
  gap: 12px;
  align-items: flex-start;
  margin-top: 40px;
  line-height: 1.2;
  color: ${(props) => props.theme.color.gray3};
`
const GeneralSignup = () => {
  return (
    <ContentArticle>
      <form action="">
        <WrapInput>
          <Label htmlFor="user_id">아이디</Label>
          <FlexId>
            <Input type="text" id="user_id" placeholder="이메일 형식 입력"/>
            <BtnCheckId type="button">중복 확인</BtnCheckId>
          </FlexId>
        </WrapInput>
        <WrapInput>
          <Label htmlFor="user_pwd">비밀번호</Label>
          <Input type="password" id="user_pwd"  placeholder="영문, 숫자, 특수문자 포함 8~15자"/>
        </WrapInput>
        <WrapInput>
          <Label htmlFor="check_user_pwd">비밀번호 확인</Label>
          <Input type="password" id="check_user_pwd" placeholder="비밀번호를 다시 입력"/>
        </WrapInput>
        <WrapInput>
          <Label htmlFor="user_name">서명</Label>
          <Input type="text" id="user_name" placeholder="주민등록증 기재된 본명 입력"/>
        </WrapInput>
        <WrapInput>
          <Label htmlFor="user_phone">휴대번호</Label>
          <Input type="text" id="user_phone" placeholder="휴대폰 번호 입력"/>
        </WrapInput>
        <WrapInput>
          <Label htmlFor="user_phone">이메일</Label>
          <Input type="text" id="user_phone" placeholder="휴대폰 번호 입력"/>
        </WrapInput>

        <WrapCheckbox>
          <input type="checkbox" />
          <label>devshop의 이용약관 및 개인정보처리방침에 대한 내용을 확인하였고 동의합니다.</label>
        </WrapCheckbox>
        
      </form>
    </ContentArticle>
  );
};

export default GeneralSignup;
