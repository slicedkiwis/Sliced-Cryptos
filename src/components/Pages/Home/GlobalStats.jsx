import millify from "millify";
import './globalstats.css'
const GlobalStats = ({ stats }) => {
  return (
    <div className="global-stats">
        <h1>Global Market Data</h1>
      <div className="table-container">
      <table className="global-stats-table">
       <tbody> 
        <tr>
          <td>
            <h1>Total Coins</h1>
          </td>
          <td>
            <h1>{millify(stats?.totalCoins || 0)}</h1>
          </td>
        </tr>

         <tr>
          <td>
            <h1>Total Exchanges</h1>
          </td>
          <td>
            <h1>{millify(stats?.totalExchanges || 0)}</h1>
          </td>
        </tr>

         <tr>
          <td>
            <h1>Total Markets</h1>
          </td>
          <td>
            <h1>{millify(stats?.totalMarkets || 0)}</h1>
          </td>
        </tr>

      <tr>
          <td>
            <h1>Total Market Cap</h1>
          </td>
          <td>
            <h1>{millify(stats?.totalMarketCap || 0)}</h1>
          </td>
        </tr>
      </tbody>
      </table>
    </div>
    </div>
  );
};

export default GlobalStats;
