import styled from "styled-components";
import MyModal from "../MyModal";
import Slides from "./Slides";

const BannerSection = styled.section`
  width: 100%;
  margin-top: 2px;
`;

const Banner = () => {
  const slides = [
    {
      url: "https://images.unsplash.com/photo-1584947113970-7d730f565515?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      title: "배너1",
    },
    {
      url: "https://images.unsplash.com/photo-1532289402244-3cbf8bdeb722?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      title: "배너2",
    },
    {
      url: "https://images.unsplash.com/photo-1537498425277-c283d32ef9db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1178&q=80",
      title: "배너3",
    },
    {
      url: "https://images.unsplash.com/photo-1580974928064-f0aeef70895a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
      title: "배너4",
    },
    {
      url: "https://images.unsplash.com/photo-1563203369-26f2e4a5ccf7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      title: "배너5",
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
