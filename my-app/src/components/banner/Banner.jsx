import styled from "styled-components";
import Slides from "./Slides";
import banner1 from "../../assets/banner1.PNG";
import banner2 from "../../assets/banner2.png";
import banner3 from "../../assets/banner3.png";

const BannerSection = styled.section`
  width: 100%;
  margin-top: 2px;
`;

const Banner = () => {
  const slides = [
    {
      url: banner2,
      title: "배너2",
    },
    {
      url: banner1,
      title: "배너1",
    },
    {
      url: banner3,
      title: "배너3",
    },
  ];
  return (
    <BannerSection>
      <h2 className="ir">배너 영역</h2>
      <Slides slides={slides} />
    </BannerSection>
  );
};
export default Banner;
