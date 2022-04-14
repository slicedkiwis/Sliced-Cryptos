import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Link } from "react-router-dom";
import "./footer.css";

function Footer({ mode }) {
  return (
    <div className={mode ? "footer footer-light" : "footer footer-dark"}>
      <ul>
        <Link to={"about"}>About</Link>
        <Link to={"more"}>More</Link>
      </ul>
      <Link to={"about"}>
        <h1>Sliced Crypto</h1>
      </Link>
      <div className="contact-container">
        <h2>Contact</h2>
        <div className="icon-container">
          <a
            href="https://www.instagram.com/reactdevsteeve/?hl=en"
            rel="noreferrer"
            target="_blank"
          >
            <InstagramIcon />
          </a>
          <a
            href="https://mobile.twitter.com/reactdevstev"
            rel="noreferrer"
            target="_blank"
          >
            <TwitterIcon />
          </a>
          <a
            href="https://github.com/slicedkiwis"
            rel="noreferrer"
            target="_blank"
          >
            <GitHubIcon />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
