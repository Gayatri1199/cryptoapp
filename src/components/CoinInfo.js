import React, { useEffect, useState } from "react";
import { CryptoState } from "./CryptoContext";
import { HistoricalChart } from "../config/api";
import axios from "axios";
import { Line } from "react-chartjs-2";
import { useParams } from "react-router-dom";
import Chart from "chart.js/auto";
import { chartDays } from "../config/data";
import SelectButton from "./SelectButton";

const CoinInfo = ({ coin }) => {
  console.log("Coin from Coininfo", coin?.id);
  const { id } = useParams();
  const [historicalData, sethistoricalData] = useState();
  const [days, setDays] = useState();
  const { currency } = CryptoState();
  const fetchHistoric = async () => {
    // const { data } = await axios.get(HistoricalChart(coin?.id, days, currency));
    // setDays("365");
    const { data } = await axios.get(HistoricalChart(id, days, currency));

    console.log("Data==>", data);
    sethistoricalData(data.prices);
  };

  console.log("historicalData==>", historicalData);

  useEffect(() => {
    fetchHistoric();
  }, [currency, days]);
  console.log("Coin from Coininfo", coin?.id, days, currency);

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
                  ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                  : `${date.getHours()}:${date.getMinutes()} AM`;
              return days === 1 ? time : date.toLocaleDateString();
            }),

            datasets: [
              {
                data: historicalData.map((coin) => coin[1]),
                label: `Price (Past ${days} Days) in ${currency}`,
                borderColor: "#EEBC1D",
              },
            ],
          }}
          options={{
            elements: {
              point: {
                radius: 1,
              },
            },
          }}
        />
      )}

      <div>
        {chartDays.map((day) => {
          return (
            <SelectButton
              key={day}
              onClick={() => {
                setDays(day.value);
              }}
              selected={day.value === days}
            >
              {day.label}
            </SelectButton>
          );
        })}
      </div>
    </div>
  );
};

export default CoinInfo;
