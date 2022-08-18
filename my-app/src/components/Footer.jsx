import styled from "styled-components";
import spriteSns from "../assets/sns.png";

const FooterSection = styled.footer`
  width: 100%;
  background: #f2f2f2;
  overflow: hidden;
`;

const FooterDiv1 = styled.div`
  width: 1280px;
  margin: 60px auto 30px;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
`;
const FooterDiv2 = styled.div`
  width: 1280px;
  margin: 0 auto 63px;
  border-top: 1px solid #c4c4c4;
`;

const FooterUl = styled.ul`
  display: inline;
`;

const FooterLi = styled.li`
  display: inline-block;
  font-size: 14px;
  line-height: 2.5;
  margin-right: 32px;
`;

const FooterDl = styled.dl`
  width: 260px;
  color: #767676;
  font-size: 14px;
`;

const FooterDt = styled.dt`
  padding-top: 30px;
  font-weight: 700;
`;

const FooterDd = styled.dd`
  padding-top: 10px;
`;

const SpriteUl = styled.ul`
  float: right;
`;

const SpriteLi = styled.li`
  display: inline-block;
  margin-left: 10px;
`;

const SpriteA = styled.a`
  content: "";
  display: block;
  width: 32px;
  height: 32px;
  background: url(${spriteSns}) no-repeat;

  background-position: ${(props) => (props.faceBook ? "-10px -10px" : "")};
  background-position: ${(props) => (props.insta ? "-62px -10px " : "")};
  background-position: ${(props) => (props.youtube ? "-114px -10px " : "")};
`;

export default function Footer() {
  const contentLi = [
    "호두샵 소개",
    "이용약관",
    "개인정보처리방침",
    "전자금융거래약관",
    "청소년보호정책",
    "제휴문의",
  ];

  const contentDd = [
    "서울특별시 송파구 방이동 ***",
    "사업자 번호: 010-0000-0000 | 통신판매원",
    "대표: 김태희",
  ];

  return (
    <FooterSection>
      <FooterDiv1>
        <FooterUl>
          {contentLi.map((item, index) => {
            return <FooterLi key={index}>{item}</FooterLi>;
          })}
        </FooterUl>
        <SpriteUl>
          <SpriteLi>
            <SpriteA faceBook href="#none"></SpriteA>
          </SpriteLi>
          <SpriteLi>
            <SpriteA insta href="#none"></SpriteA>
          </SpriteLi>
          <SpriteLi>
            <SpriteA youtube href="#none"></SpriteA>
          </SpriteLi>
        </SpriteUl>
      </FooterDiv1>
      <FooterDiv2>
        <FooterDl>
          <FooterDt>(주) DEV VILLIAGE</FooterDt>
          {contentDd.map((item, index) => {
            return <FooterDd key={index}>{item}</FooterDd>;
          })}
        </FooterDl>
      </FooterDiv2>
    </FooterSection>
  );
}
