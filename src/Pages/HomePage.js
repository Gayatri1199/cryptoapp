import React from "react";
import HeroBanner from "../components/HeroBanner";
import CoinsTable from "../components/CoinsTable";

const HomePage = () => {
  return (
    <div className="homepage">
      <HeroBanner />
      <CoinsTable />
    </div>
  );
};

export default HomePage;
