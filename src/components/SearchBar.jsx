import { CardActionArea } from "@mui/material";
import { useState } from "react";
import ListItem from "./ListItem";
import "./searchbar.css";
const SearchBar = ({
  mode,
  data,
  setFilteredData,
  page,
  setToggleModal,
  setModalData,
}) => {
  const [filteredInputData, setFilteredInputData] = useState(data);

  return (
    //make sure data is an array
    <div className="search-bar-container">
      <input
        className={
          mode ? " search-bar search-bar-light" : "search-bar search-bar-dark"
        }
        id="search-bar"
        onChange={() => {
          const query = document.getElementById("search-bar").value;
          const newData = data.filter((data) => {
            return data?.name
              .replace(/\s/g, "")
              .toLowerCase()
              .includes(query.replace(/\s/g, "").toLowerCase());
          });
          setFilteredInputData(newData.length ? newData : data);
          setFilteredData(newData.length ? newData : data);
        }}
        type="text"
        placeholder="Search"
      />
      <div
        className={
          mode
            ? "search-list-container search-list-container-light "
            : "search-list-container search-list-container-dark "
        }
      >
        <ul
          className={
            mode
              ? "search-list search-list-light "
              : "search-list search-list-dark "
          }
        >
          {filteredInputData?.map((element, i) => {
            return (
              <ListItem
                key={i}
                page={page}
                data={element}
                setModalData={setModalData}
                toggleModal={setToggleModal}
                className={
                  mode
                    ? "search-list-item search-list-item-light"
                    : "search-list-item search-list-item-dark"
                }
              >
                {element?.name || element?.symbol || element?.title}
              </ListItem>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default SearchBar;
