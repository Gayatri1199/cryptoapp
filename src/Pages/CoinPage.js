import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { CryptoState } from "../components/CryptoContext";
import axios from "axios";
import { SingleCoin } from "../config/api";
import CoinInfo from "../components/CoinInfo";

const CoinPageStyle = styled.div`
  padding-top: 65px;
`;

const CoinPage = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState();
  const { currency, symbol } = CryptoState;

  const fetchCoin = async () => {
    const { data } = await axios.get(SingleCoin(id));
    console.log("Data from CoinPage==>", data);
    setCoin(data);
  };

  useEffect(() => {
    fetchCoin();
  }, [id]);

  console.log("Coins from CoinPage===>", coin);
  return (
    <CoinPageStyle>
      <div className="coinpage">
        <div className="sidebar">
          <div className="image-container">
            <img src={coin?.image?.large} alt={coin?.name} />
          </div>
          <div className="content-container">
            <h2>{coin?.name}</h2>
            <p>{coin?.description?.en}</p>
            <h3>Rank: {coin?.market_cap_rank}</h3>
            <h3>
              Current Price: {symbol}
              {/* {coin?.market_data?.current_price[currency.toLowerCase()]} */}
            </h3>
            <h3>Market Cap: {coin?.market_cap_rank}</h3>
          </div>
        </div>
        <div className="chart">
          <CoinInfo coin={coin} />
        </div>
      </div>
    </CoinPageStyle>
  );
};

export default CoinPage;
