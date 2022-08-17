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

const ArrowUl = styled.ul`
  display: flex;
  position: absolute;
  justify-content: space-between;
  gap: 1700px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 0 56px;
  z-index: 10;

  @media screen and (max-width: 1600px) {
    gap: 1200px;
  }
  @media screen and (max-width: 1400px) {
    gap: 1000px;
  }
  @media screen and (max-width: 1200px) {
    gap: 800px;
  }
`;

const ArrowLi = styled.li`
  width: 60px;
  background-color: #e7e7e7;
  opacity: 0.3;
  border-radius: 5px;

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
  font-size: 14px;
  cursor: pointer;
  color: #767676;

  &:hover,
  :focus,
  :active {
    color: #21bf48;
  }
`;

export default function Slides({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const SlidesDiv = styled.div`
    width: 100%;
    height: 100%;
    background: url(${slides[currentIndex].url}) no-repeat center;
    background-size: cover;
    position: absolute;
    z-index: 5;
    top: 0;
  `;

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
      {/* arrow 버튼 */}
      <ArrowUl>
        <ArrowLi>
          <button type="button" onClick={goPrev}>
            <img src={leftArrow} alt="" />
          </button>
        </ArrowLi>
        <ArrowLi right>
          <button type="button" onClick={goForward}>
            <img src={rightArrow} alt="" />
          </button>
        </ArrowLi>
      </ArrowUl>
      {/* 슬라이트 */}
      <SlidesDiv></SlidesDiv>
      {/*  */}
      <DotsContainerStyle>
        {slides.map((slide, slideIndex) => {
          return (
            <DotsStyle key={slideIndex} onClick={() => goToSlide(slideIndex)}>
              ●
            </DotsStyle>
          );
        })}
      </DotsContainerStyle>
    </SlideWrpaDiv>
  );
}
