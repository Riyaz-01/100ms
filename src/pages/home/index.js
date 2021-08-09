import React, { useState } from "react";
import "./style.scss";
import Header from "../../components/header";
import Card from "../../components/card";
import useFetchCharacters from "../../api/fetchCharacters";
import coverImage from "../../assets/cover.jpg";

const Home = () => {
  const [query, setQuery] = useState("");
  const { loading, error, characters } = useFetchCharacters(query);

  return (
    <div className="home" style={{ backgroundImage: `url(${coverImage})` }}>
      <Header className="header" />
      <div className="cards">
        {characters.map((item, index) => {
          return <Card data={item} key={index} className="card" />;
        })}
      </div>
    </div>
  );
};

export default Home;
