
import millify from "millify"
const Exchange = ({mode,exchange}) => {
  return (
    <tr className={mode ? "exchanges-page-exchange exchanges-page-exchange-light":
            "exchanges-page-exchange exchanges-page-exchange-dark"
    }>
        <td><h3>{exchange?.rank}</h3></td>
        <td className="exchange-table-image-row" style={
            {
            }
        }><img src= {exchange?.iconUrl} alt ={exchange?.name}/></td>
        <td><h3>{exchange?.name}</h3></td>
        <td><h3>{millify(exchange?.price,{
            precision:5
        })}</h3></td>
        <td><h3>{millify(exchange?.numberOfMarkets,{
            precision:5
        })}</h3></td>
        <td><h3>{millify(exchange['24hVolume'] && exchange['24hVolume'],{
            precision:5
        })}</h3></td>
    </tr>
  )
}

export default Exchange