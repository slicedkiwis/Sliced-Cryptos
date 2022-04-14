
import { Exchange } from ".";
import './homepageexchanges.css'
const Exchanges = ({ mode,exchangeData, limit }) => {
  const exchangeList = exchangeData?.data?.exchanges.slice(0,limit);
    
  return (
    <div className={mode ? "exchanges-container container-light": "exchanges-container container-dark"}>
      <h1 >Top Exchanges</h1>
    <div className={mode ? "home-exchanges container-light": "home-exchanges"}>
      {
        exchangeList.map( exchange =><Exchange mode = {mode}exchangeData = {exchange} key = {exchange['uuid']}/>)
      }
    </div>
  </div>
  );
};

export default Exchanges;
