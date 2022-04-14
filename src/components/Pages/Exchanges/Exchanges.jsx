import { useEffect, useState } from "react";
import Exchange from "./Exchange";
import Loader from "../../Loader";
import "./exchanges.css";
const Exchanges = ({ mode }) => {
  const [exchangeData, setExchangeData] = useState();
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
      "https://coinranking1.p.rapidapi.com/coin/Qwsogvtv82FCd/exchanges?referenceCurrencyUuid=yhjMzLPhuIDl&limit=100&offset=0&orderBy=24hVolume&orderDirection=desc",
      cryptoHeaders
    )
      .then((response) => response.json())
      .then((response) => {
        setExchangeData(response);
      })
      .catch((err) => console.error(err));
  }, []);
  if (!exchangeData) return <Loader mode={mode} />;
  return (
    <div
      className={
        mode
          ? "exchanges-page exchanges-page-light"
          : "exchanges-page exchanges-page-dark"
      }
    >
      <table className="exchanges-page-table">
        <thead>
          <tr className="table-header-row">
            <th>
              <h1>Rank</h1>
            </th>
            <th>
              <h1></h1>
            </th>
            <th>
              <h1>Name</h1>
            </th>
            <th>
              <h1>Price</h1>
            </th>
            <th>
              <h1>Number of Markets</h1>
            </th>
            <th>
              <h1>24hr Volume</h1>
            </th>
          </tr>
        </thead>
        <tbody>
          {exchangeData?.data?.exchanges.map((exchange) => (
            <Exchange key={exchange?.uuid} exchange={exchange}></Exchange>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Exchanges;
