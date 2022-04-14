
import millify from "millify"
import './homepagecoin.css'
const Coin = ({coin}) => {
  return (
    <div className="home-coin">
       <h1>{coin['rank']}</h1> 
       <img src={coin['iconUrl']} alt=""></img>
       <h2>{coin['name']}</h2> 
       <h2>{millify(coin['price'],{
           precision:5,
           lowecase:true 
       })}</h2> 
    </div>
  )
}

export default Coin