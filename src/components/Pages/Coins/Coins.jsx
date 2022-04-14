import { useEffect, useState } from "react";
import Loader from "../../Loader";
import Modal from "./Modal";
import Coin from "./Coin";
import SearchBar from "../../SearchBar";
import "./coins.css";
const Coins = ({ mode }) => {
  const [coins, setCoins] = useState();
  const [filteredCoins, setFilteredCoins] = useState();
  const [toggleModal, setToggleModal] = useState(false);
  const [modalData, setModalData] = useState({});
  const { REACT_APP_API_KEY } = process.env;
  useEffect(() => {
    const cryptoHeaders = {
      method: "GET",
      headers: {
        "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
        "X-RapidAPI-Key": `${REACT_APP_API_KEY}`,
      },
    };

    fetch(
      "https://coinranking1.p.rapidapi.com/coins?timePeriod=1y&limit=100",
      cryptoHeaders
    )
      .then((response) => response.json())
      .then((response) => {
        setCoins(response?.data?.coins);
        setFilteredCoins(response?.data?.coins);
      })
      .catch((err) => console.error(err));
  }, [REACT_APP_API_KEY]);
  if (!coins) return <Loader mode={mode}></Loader>;
  if (toggleModal)
    return <Modal mode={mode} data={modalData} toggleModal={setToggleModal} />;
  return (
    <div className={mode ? "coins coins-light" : "coins coins-dark"}>
      <SearchBar
        mode={mode}
        data={coins}
        setFilteredData={setFilteredCoins}
        page={"coins"}
        setModalData={setModalData}
        setToggleModal={setToggleModal}
      ></SearchBar>
      <div
        className={
          mode
            ? "card-page-container card-container-light"
            : "card-page-container card-continer-dark"
        }
      >
        {filteredCoins.map((coin) => {
          return (
            <Coin
              data={coin}
              key={coin?.uuid}
              toggleModal={setToggleModal}
              setModalData={setModalData}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Coins;
