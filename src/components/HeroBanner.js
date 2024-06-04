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
      {/* <video source="../images/herobanner.mp4"></video> */}
      {/* <video
        // class="elementor-background-video-hosted elementor-html5-video inited hoverex_resize"
        controls
        loop
        autoPlay=""
        muted
        // playsinline=""
        // loop=""

        src="https://hoverex.themerex.net/wp-content/uploads/2021/05/pexels-samphan-korwong-6961824.mp4"
        type="video/mp4"
        style={{ width: "100%" }}
      ></video> */}
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
