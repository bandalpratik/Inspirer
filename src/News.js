import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Inspirer from "./Images/Inspirer.png";
import NewsCard from "./NewsCard";

function News() {
  const [articles, setArticles] = useState([]);
  const [country, setCountry] = useState("in");

  useEffect(() => {
    const getLatestNews = async () => {
      let resp = await fetch(
        `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=68825892e0354082b6776c34857a459c`
      );
      const responseToJson = await resp.json();
      setArticles(responseToJson.articles);
    };

    getLatestNews();
  }, []);

  useEffect(() => {
    const getLatestNews = async () => {
      let resp = await fetch(
        `https://newsapi.org/v2/top-headlines?country=${country}&category=business&apiKey=68825892e0354082b6776c34857a459c`
      );
      const responseToJson = await resp.json();
      setArticles(responseToJson.articles);
    };

    getLatestNews();
  }, [country]);

  const handleChange = (e) => {
    setCountry(e.target.value);
  };

  return (
    <div className="app">
      <div className="app__header">
        <Link to="/">
          <img className="app__headerImage" src={Inspirer} alt="" />
        </Link>
      </div>

      <div className="news-dropdown">
        <FormControl variant="standard" style={{ m: 1, minWidth: 220 }}>
          <InputLabel>Country</InputLabel>
          <Select value={country} onChange={handleChange} label="Country">
            <MenuItem value="us">
              United States
            </MenuItem>
            <MenuItem value="in"><strong>India</strong></MenuItem>
            <MenuItem value="gb">Great Britain</MenuItem>
            <MenuItem value="jp">Japan</MenuItem>
            <MenuItem value="cn">China</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className="news-card">
        <NewsCard articles={articles} />
      </div>
    </div>
  );
}

export default News;
