import { Card, CardContent, CardActionArea } from "@mui/material";
import { AreaChart, Area } from "recharts";
import millify from "millify";
import "./coin.css";
const Coin = ({ data, toggleModal, setModalData }) => {
  const makeChartData = () => {
    let chartData = [];
    data?.sparkline.forEach((element, i) => {
      chartData.push({
        name: i,
        uv: element,
      });
    });
    return chartData;
  };
  const chartData = makeChartData();
  return (
    <Card
      className="coin-card"
      onClick={() => {
        toggleModal(true);
        setModalData({
          chart: chartData,
          coin: data,
        });
      }}
    >
      <CardActionArea>
        <CardContent className="card-content-container">
          <div className="coin-title-container">
            <h1>{data?.rank}</h1>
            <h1>{data?.name}</h1>
            <h1>{data?.symbol}</h1>
          </div>
          <div className="coin-img-container">
            <img className="coin-image" src={data?.iconUrl} alt={data?.name} />
            <AreaChart
              width={200}
              height={60}
              data={chartData}
              margin={{
                top: 5,
                right: 0,
                left: 0,
                bottom: 5,
              }}
            >
              <Area
                type="monotone"
                dataKey="uv"
                stroke={`${data?.color}`}
                fill={`${data?.color}`}
              />
            </AreaChart>
          </div>
          <table className="coin-market-facts">
            <tbody>
              <tr>
                <td>
                  <h3>Price</h3>
                </td>
                <td>
                  <h3
                    style={{
                      color: `${data?.color}`,
                    }}
                  >
                    {" "}
                    {millify(data?.price, {
                      precision: 4,
                    })}
                  </h3>
                </td>
              </tr>
              <tr>
                <td>
                  <h3>Market cap</h3>
                </td>
                <td>
                  <h3>
                    {" "}
                    {millify(data?.marketCap, {
                      precision: 4,
                    })}
                  </h3>
                </td>
              </tr>
              <tr>
                <td>
                  <h3>Status</h3>
                </td>
                <td>
                  <h3
                    className={
                      data?.change >= 0 ? "coin-positive" : "coin-negative"
                    }
                  >
                    {" "}
                    {millify(data?.price, {
                      precision: 6,
                    })}
                  </h3>
                </td>
              </tr>
            </tbody>
          </table>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Coin;
