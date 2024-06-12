import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";

const CryptoCard = ({ item }) => {
  console.log("Item form Card==>", item);
  const profit = item.price_change_percentage_24h >= 0;
  return (
    <Link className="crypto-card" to={`/coins/${item.id}`} target="_blank">
      <img src={item.image} alt={item.name} />
      <p>
        {item.name} | {item.symbol}
      </p>
      <span>
        {profit && " + "}
        {item.price_change_percentage_24h.toFixed(2)}%
      </span>
    </Link>
  );
};

export default CryptoCard;
