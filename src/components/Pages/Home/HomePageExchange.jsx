import millify from "millify"
import { CardActionArea } from "@mui/material"
import './homepageexchange.css'
const Exchange = ({exchangeData}) => {
  return (
    <div className="home-exchange">
        <CardActionArea className="home-card-action">
            <div className="exchange-about">
                <h3>{exchangeData['rank']}</h3>
                <img src={exchangeData['iconUrl']} alt="" />  
                <h3>{exchangeData['name']}</h3>
            </div>
            <div className="exchange-price"> 
            <h3> {millify(exchangeData['price'])}</h3>
            </div>
      </CardActionArea>
    </div>
  )
}

export default Exchange