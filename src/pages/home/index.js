import React, { useState } from "react";
import "./style.scss";
import Header from "../../components/header";
import Card from "../../components/card";
import useFetchCharacters from "../../api/fetchCharacters";

const Home = () => {
  const [query, setQuery] = useState("white");
  const { characters } = useFetchCharacters(query);
  return (
    <div className="home">
      <Header />
    </div>
  );
};

export default Home;
