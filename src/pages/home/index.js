import React, { useState } from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import Header from "../../components/header";
import Card from "../../components/card";
import Loading from "../../components/loading";
import Error from "../../components/error";
import useFetchCharacters from "../../api/fetchCharacters";
import coverImage from "../../assets/cover.jpg";
import search from "../../assets/search.png";

const Home = () => {
  const [query, setQuery] = useState("");
  const { loading, error, characters } = useFetchCharacters(query);
  const [page, setPage] = useState(1);
  const numberOfCards = 10;
  const createPagination = () => {
    let temp = [],
      j = 1;
    for (let i = 0; i < characters.length; i = i + numberOfCards) {
      temp.push(j++);
    }
    return temp;
  };
  const pagination = createPagination();

  return (
    <div className="home" style={{ backgroundImage: `url(${coverImage})` }}>
      <Header className="header" />
      <div className="search">
        <img src={search} width="22px" height="22px" className="icon" />
        <input
          type="text"
          onChange={(e) => setQuery(e.target.value.toLowerCase())}
        />
      </div>
      <div className="pagination">
        <div
          className="arrow"
          onClick={() =>
            setPage((prev) => {
              return prev - 1 > 0 ? prev - 1 : 7;
            })
          }
        >
          {"<"}
        </div>
        {pagination.map((item, index) => (
          <div
            className="paginationItem"
            key={index}
            style={item == page ? { backgroundColor: "green" } : {}}
            onClick={() => setPage(item)}
          >
            {item}
          </div>
        ))}
        <div
          className="arrow"
          onClick={() =>
            setPage((prev) => {
              return prev + 1 <= pagination.length ? prev + 1 : 1;
            })
          }
        >
          {">"}
        </div>
      </div>
      {error ? (
        <Error />
      ) : loading ? (
        <Loading />
      ) : (
        <div className="cards">
          {characters.map((item, index) => {
            if (
              index < page * numberOfCards &&
              index >= (page - 1) * numberOfCards
            )
              return (
                <Link
                  to={`/${item.char_id}/${item.name}`}
                  style={{ textDecoration: "none" }}
                >
                  <Card data={item} key={index} className="card" />
                </Link>
              );
          })}
        </div>
      )}
      <div className="pagination" style={{ paddingBottom: "30px" }}>
        <div
          className="arrow"
          onClick={() =>
            setPage((prev) => {
              return prev - 1 > 0 ? prev - 1 : 7;
            })
          }
        >
          {"<"}
        </div>
        {pagination.map((item, index) => (
          <div
            className="paginationItem"
            key={index}
            style={item == page ? { backgroundColor: "green" } : {}}
            onClick={() => setPage(item)}
          >
            {item}
          </div>
        ))}
        <div
          className="arrow"
          onClick={() =>
            setPage((prev) => {
              return prev + 1 <= pagination.length ? prev + 1 : 1;
            })
          }
        >
          {">"}
        </div>
      </div>
    </div>
  );
};

export default Home;
