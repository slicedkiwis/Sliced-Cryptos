import { useState, useEffect } from "react";
import { GlobalStats, Exchanges, CoinList } from "./index";
import Loader from "../../Loader";
import "./home.css";
import SearchBar from "../../SearchBar";
const Home = ({ mode }) => {
  const [coinData, setCoinData] = useState(null);
  const [exchangeData, setExchangeData] = useState(null);
  const { REACT_APP_API_KEY } = process.env;
  const cryptoHeaders = {
    method: "GET",
    headers: {
      "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
      "X-RapidAPI-Key": `${REACT_APP_API_KEY}`,
    },
  };

  useEffect(() => {
    fetch(
      "https://coinranking1.p.rapidapi.com/coins?timePeriod=1y&limit=100",
      cryptoHeaders
    )
      .then((response) => response.json())
      .then((response) => {
        setCoinData(response);
      })
      .catch((err) => console.error(err));
    fetch(
      "https://coinranking1.p.rapidapi.com/coin/Qwsogvtv82FCd/exchanges?referenceCurrencyUuid=yhjMzLPhuIDl&limit=100&offset=0&orderBy=24hVolume&orderDirection=desc",
      cryptoHeaders
    )
      .then((response) => response.json())
      .then((response) => {
        setExchangeData(response);
      })
      .catch((err) => console.error(err));
  }, []);

  if (!coinData || !exchangeData)
    return <Loader mode={mode} color="secondary" />;

  return (
    <div className={mode ? "home home-light" : "home home-dark"}>
      <div
        className={
          mode
            ? "stats-list-container container-light"
            : "stats-list-container container-dark"
        }
      >
        <GlobalStats stats={coinData?.data?.stats}></GlobalStats>
        <CoinList coins={coinData?.data?.coins}></CoinList>
      </div>
      {
        <Exchanges
          mode={mode}
          exchangeData={exchangeData}
          limit={10}
        ></Exchanges>
      }
    </div>
  );
};

export default Home;
