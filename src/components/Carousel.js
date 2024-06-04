import React, { useEffect, useState } from "react";
import axios from "axios";
import { TrendingCoins } from "../config/api";
import { CryptoState } from "./CryptoContext";
import CryptoCard from "./CryptoCard";
import Slider from "react-slick";

const Carousel = () => {
  const [trending, setTrending] = useState([]);
  console.log("trending===>", trending);
  const { currency } = CryptoState();

  const fetchTrendingCoins = async () => {
    const { data } = await axios.get(TrendingCoins(currency));
    console.log("Data==>", data);
    setTrending(data);
  };
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
  };
  useEffect(() => {
    fetchTrendingCoins();
  }, [currency]);

  return (
    <Slider {...settings}>
      {trending.map((item, index) => {
        return <CryptoCard item={item} key={index} />;
      })}
    </Slider>
  );
};

export default Carousel;
