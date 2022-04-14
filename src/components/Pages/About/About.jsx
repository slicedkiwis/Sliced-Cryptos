import "./about.css";
const About = ({ mode }) => {
  return (
    <div className={mode ? "about about-light" : "about about-dark"}>
      <section
        className={
          mode
            ? "project-description about-content-container container-light"
            : " project-description about-content-container container-dark"
        }
      >
        <h1>Project Description</h1>
        <p>
          The vision for sliced crypto was to build an all encompassing
          <br />
          crypto information site, with a budget of zero dollars.
          <br />
          This project uses primarily the coin ranking api found available on{" "}
          <a
            href="https://rapidapi.com/Coinranking/api/coinranking1/"
            rel="noreferrer"
            target="_blank"
          >
            rapid coin,{" "}
          </a>
          <br />
          In conjuction wit{" "}
          <a
            href="https://rapidapi.com/microsoft-azure-org-microsoft-cognitive-services/api/bing-news-search1"
            rel="noreferrer"
            target="_blank"
          >
            bings news api.{" "}
          </a>
          <br />
        </p>
      </section>
      <section
        className={
          mode
            ? "technologies-description about-content-container container-light"
            : "container-dark technologies-description about-content-container"
        }
      >
        <h1>Technologies Used</h1>
        <ul>
          <li>ReactJs</li>
          <li>JavaScript</li>
          <li>CSS</li>
          <li>HTML</li>
        </ul>
        <h3>Notable Libraries Used</h3>
        <ul>
          <li>Material Ui</li>
          <li>Rechart</li>
          <li>Redux toolkit</li>
          <li>Millify</li>
          <li>Moment</li>
        </ul>
      </section>
      <section
        className={
          mode
            ? "creator-description about-content-container container-light"
            : " creator-description about-content-container container-dark"
        }
      >
        <h1> The Creator</h1>
        <p>Hi, I'm Steeve :)</p>
      </section>
    </div>
  );
};

export default About;
