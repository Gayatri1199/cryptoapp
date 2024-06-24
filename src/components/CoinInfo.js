import React, { useEffect, useState } from "react";
import { CryptoState } from "./CryptoContext";
import { HistoricalChart } from "../config/api";
import axios from "axios";
import { Line } from "react-chartjs-2";

const CoinInfo = ({ coin }) => {
  console.log("Coin from Coininfo", coin?.id);
  const [historicalData, sethistoricalData] = useState();
  const [days, setDays] = useState();
  const { currency } = CryptoState();
  const fetchHistoric = async () => {
    // const { data } = await axios.get(HistoricalChart(coin?.id, days, currency));
    const { data } = await axios.get(HistoricalChart(coin?.id, days, currency));

    console.log("Data==>", data);
    sethistoricalData(data);
  };

  console.log("historicalData==>", historicalData);

  useEffect(() => {
    fetchHistoric();
  }, [currency, days]);

  return (
    <div className="coin-info">
      {!historicalData ? (
        <div>Loading</div>
      ) : (
        <Line
          data={{
            labels: historicalData.map((coin) => {
              let date = new Date(coin[0]);
              let time =
                date.getHours > 12
                  ? `${date.getHours() - 12}:${date.getMinutes()}`
                  : `${date.getHours()}:${date.getMinutes()} AM`;
              return days === 1 ? time : date.toLocaleDateString;
            }),

            datasets: [
              {
                data: historicalData.map((coin) => coin[1]),
              },
            ],
          }}
        />
      )}
    </div>
  );
};

export default CoinInfo;
