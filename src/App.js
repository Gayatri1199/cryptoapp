import logo from "./logo.svg";
import "./App.css";
import HeroBanner from "./components/HeroBanner";
import Header from "./components/Header";
import { BrowserRouter, Route } from "react-router-dom";
import Hompage from "./Pages/HomePage";
import CoinPage from "./Pages/CoinPage";

function App() {
  return (
    <BrowserRouter>
      <div className="crypto-currency-wrapper" style={{ position: "relative" }}>
        <Header />
        <Route path="/" component={Hompage} exact />
        <Route path="/coins/:id" component={CoinPage} />
      </div>
    </BrowserRouter>
  );
}

export default App;
