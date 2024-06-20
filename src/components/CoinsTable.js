import axios from "axios";
import React, { useEffect, useState } from "react";
import { CoinList } from "../config/api";
import { CryptoState } from "./CryptoContext";

const CoinsTable = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState([]);
  const [search, setSearch] = useState();

  const { currency } = CryptoState();
  const fetchCoins = async () => {
    setLoading(true);
    const { data } = await axios.get(CoinList(currency));
    setCoins(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchCoins();
  }, [currency]);

  const handleSearch = () => {
    return coins.filter(
      (coin) =>
        coin.name.toLowerCase().includes(search) ||
        coin.symbol.toLowerCase().includes(search)
    );
  };

  console.log("handleSearch==>", handleSearch);
  return (
    <div>
      <h4>CryptoCurrency Prices by Market Cap</h4>
      <div className="search-bar">
        <input
          placeholder="Enter CryptoCurrency to search"
          onChange={(e) => {
            setSearch(e.target.value);
            console.log("Coins Value==>", e.target.value);
            // handleSearch();
          }}
        />
      </div>
      {console.log("Coins==>", coins)}
      <table>
        <thead>
          <tr>
            <td>Coin</td>
            <td>Price</td>
            <td>24h Change</td>
            <td>Market Cap</td>
          </tr>
        </thead>
        <tbody>
          {console.log("handleSearch()", handleSearch())}
          {handleSearch().map((row) => {
            const profit = row.price_change_percentage_24h > 0;
            return (
              <tr>
                <td>
                  <img src={row.image} alt={row.name} />
                  <span>{row.name}</span>
                </td>
                <td>{row.current_price}</td>
                <td>{profit && row.price_change_percentage_24h.toFixed(2)}%</td>
                <td>{row.market_cap}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CoinsTable;
