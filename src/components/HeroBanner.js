import React from "react";
import styled from "styled-components";
import Carousel from "./Carousel";

const HeroBannerStyle = styled.div`
  position: relative;
  h1 {
    color: #fff;
    position: absolute;
    top: 40%;
    left: 40%;
    transform: translate(-40%, -40%);
    font-size: 65px;
  }
`;

const HeroBanner = () => {
  return (
    <HeroBannerStyle>
      <img
        src="https://hoverex.themerex.net/wp-content/uploads/2018/03/header_home2.jpg?id=817"
        alt="HeroBanner"
        style={{ width: "100%" }}
      />
      <h1>
        Start Trading Bitcoin Today and <br /> and get free consultation today.
      </h1>
      <Carousel />
    </HeroBannerStyle>
  );
};

export default HeroBanner;
