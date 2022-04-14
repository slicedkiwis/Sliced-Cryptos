import { Coin } from ".";
import "./homepagecoinlist.css";
const CoinList = ({ coins }) => {
  return (
    <div className="coin-list-container">
      <h1>Top Coins</h1>
      <ul className="coin-list">
        {coins?.map((coin) => (
          <Coin coin={coin} key={coin["uuid"]}></Coin>
        ))}
      </ul>
    </div>
  );
};

export default CoinList;
