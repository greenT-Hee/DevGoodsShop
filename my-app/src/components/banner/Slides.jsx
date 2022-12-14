import styled from "styled-components";
import rightArrow from "../../assets/icon-swiper-2.svg";
import leftArrow from "../../assets/icon-swiper-1.svg";
import { useState } from "react";

const SlideWrpaDiv = styled.div`
  position: relative;
  width: 100%;
  height: 600px;
  overflow: hidden;
`;

const SlideUl = styled.ul``;

const ArrowLi = styled.li`
  position: absolute;
  width: 60px;
  top: 50%;
  transform: translate(0, -50%);
  z-index: 10;
  background-color: ${(props) => props.theme.color.white};
  opacity: 0.3;
  border-radius: 10px;

  left: ${(props) => (props.left ? "55px" : "")};
  right: ${(props) => (props.right ? "55px" : "")};

  &:hover {
    opacity: 0.6;
  }
`;

const DotsContainerStyle = styled.div`
  display: flex;
  gap: 6px;
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translate(0 -50%);
  z-index: 5;
`;

const DotsStyle = styled.div`
  font-size: 10px;
  cursor: pointer;
  color: ${(props) => props.theme.color.gray3};

  &:hover,
  :focus,
  :active {
    color: ${(props) => props.theme.color.main};
  }
`;

const ArrowImg = styled.img`
  width: 100%;
  height: 100%;
`;

// const SlidesDiv = styled.div`
//   width: 100%;
//   height: 100%;
//   background-repeat: no-repeat;
//   background-size: cover;
//   position: absolute;
//   z-index: 5;
//   top: 0;
// `;
export default function Slides({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slidestyle = {
    width: "100%",
    height: "100%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "absolute",
    backgroundImage: `url(${slides[currentIndex].url})`,
    zIndex: "5",
    top: "0",
  };

  const goPrev = () => {
    const isFirstIndex = currentIndex === 0;
    const newIndex = isFirstIndex ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goForward = () => {
    const isLastIndex = currentIndex === slides.length - 1;
    const newIndex = isLastIndex ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <SlideWrpaDiv>
      {/* arrow ?????? */}
      <SlideUl>
        <ArrowLi left>
          <button type="button" onClick={goPrev}>
            <ArrowImg src={leftArrow} alt="?????? ?????? ?????? ?????? ??????" />
          </button>
        </ArrowLi>
        <ArrowLi right>
          <button type="button" onClick={goForward}>
            <ArrowImg src={rightArrow} alt="?????? ?????? ????????? ?????? ??????" />
          </button>
        </ArrowLi>
      </SlideUl>
      {/* ?????? */}
      <div style={slidestyle}></div>
      <DotsContainerStyle>
        {slides.map((slides, slideIndex) => {
          return (
            <DotsStyle key={slideIndex} onClick={() => goToSlide(slideIndex)}>
              ???
            </DotsStyle>
          );
        })}
      </DotsContainerStyle>
    </SlideWrpaDiv>
  );
}
