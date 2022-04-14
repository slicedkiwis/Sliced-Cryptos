import { useEffect, useState } from "react";
import Loader from "../../Loader";
import NewsCard from "./NewsCard";
import SearchBar from "../../SearchBar";
import "./news.css";
const News = ({ mode }) => {
  const { REACT_APP_API_KEY } = process.env;
  const [news, setNews] = useState();
  const [filteredNews, setFilteredNews] = useState();
  const newsCategory = "Cryptocurrency";
  const count = 100;
  const baseurl = "https://bing-news-search1.p.rapidapi.com";
  const url = `/news/search?q=${newsCategory}&count=${count}&textFormat=Raw&safeSearch=Off`;
  useEffect(() => {
    const newsHeaders = {
      method: "GET",
      headers: {
        "X-BingApis-SDK": "true",
        "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
        "X-RapidAPI-Key": `${REACT_APP_API_KEY}`,
      },
    };
    fetch(`${baseurl}${url}`, newsHeaders)
      .then((response) => response.json())
      .then((data) => {
        setNews(data?.value);
        setFilteredNews(data?.value);
      });
  }, [REACT_APP_API_KEY, url, baseurl]);
  return (
    <div className={mode ? "news news-light" : "news news-dark"}>
      <SearchBar
        mode={mode}
        data={news}
        page={"news"}
        setFilteredData={setFilteredNews}
      ></SearchBar>
      {filteredNews ? (
        filteredNews.map((story) => <NewsCard data={story} key={story?.url} />)
      ) : (
        <Loader mode={mode} />
      )}
    </div>
  );
};

export default News;
