import styled from "styled-components";
import { logout } from "../Cookie";

const ModalDiv1 = styled.div`
  position: absolute;
  top: 65px;
  right: -39px;
  z-index: 10;
`;

const ModalUl = styled.ul`
  width: 130px;
  border-radius: 10px;
  padding: 10px;
  background-color: #fff;
  filter: drop-shadow(0px 0px 6px rgba(0, 0, 0, 0.25));
  box-sizing: border-box;
`;

const ModalSelectLi = styled.li`
  text-align: center;
  width: 110px;
  padding: 10px 0;
  box-sizing: border-box;

  &:hover {
    border: 1px solid #767676;
    border-radius: 5px;
    outline: none;
  }
`;

const ModalSelectBtn = styled.button`
  color: #767676;
  box-sizing: border-box;

  &:hover {
    color: #000;
    outline: none;
  }
`;

const ModalArrowDiv = styled.div`
  position: absolute;
  width: 14px;
  height: 14px;
  left: 57px;
  top: -7px;
  background-color: #fff;
  filter: drop-shadow(-9px -9px 7px rgba(0, 0, 0, 0.05));
  transform: rotate(45deg);
  z-index: 20;
`;

export default function MyModal() {
  const handleLogout = () => {
    logout("refreshToken");
    window.location.reload();
  };
  return (
    <>
      <ModalDiv1>
        <ModalArrowDiv></ModalArrowDiv>
        <ModalUl>
          <ModalSelectLi>
            <ModalSelectBtn>마이페이지</ModalSelectBtn>
          </ModalSelectLi>
          <ModalSelectLi>
            <ModalSelectBtn onClick={handleLogout}>로그아웃</ModalSelectBtn>
          </ModalSelectLi>
        </ModalUl>
      </ModalDiv1>
    </>
  );
}
