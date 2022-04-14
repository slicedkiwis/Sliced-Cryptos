import { Switch } from "@mui/material";
import { Link } from "react-router-dom";
import "./header.css";
function Header({ setContentType, lightMode, setLightMode }) {
  return (
    <div className={lightMode ? "header header-light" : "header header-dark"}>
      <ul>
        <Link to={"/"}>Home</Link>
        <Link to={"coins"}>Coins</Link>
        <Link to={"exchanges"}>Exchanges</Link>
        <Link to={"news"}>News</Link>
        <div className="theme-switcher-container">
          <Switch
            color="default"
            className={
              lightMode
                ? "mode-switch mode-switch-light"
                : "mode-switch mode-switch-dark"
            }
            onClick={() => {
              setLightMode(!lightMode);
            }}
          ></Switch>
          <li>{lightMode ? "Light" : "Dark"}</li>
        </div>
      </ul>
    </div>
  );
}

export default Header;
