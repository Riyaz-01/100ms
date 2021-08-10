import React from "react";
import "./style.scss";
import useFetchCharacter from "../../api/fetchCharacter";
import Loading from "../../components/loading";
import Error from "../../components/error";
import Status from "../../components/status";
import cake from "../../assets/cakeWhite.png";
import work from "../../assets/workWhite.png";
import useFetchQuotes from "../../api/fetchQuotes";

const Details = (props) => {
  const id = props.match.params.id;
  const name = props.match.params.name;

  const { data, loading, error } = useFetchCharacter(id);
  const { quotes, quoteError, quoteLoading } = useFetchQuotes(name);

  const img = loading ? "" : `url(${data.img})`;
  const iconSize = { width: "20px", height: "20px" };

  return (
    <div
      className="detailsContainer"
      style={quotes.length < 1 ? { maxWidth: "700px" } : {}}
    >
      <div className="details" style={{ backgroundImage: img }}>
        {error ? (
          <Error />
        ) : loading ? (
          <Loading />
        ) : (
          <>
            <Status status={data.status} />
            <div className="info">
              <div className="name">
                {name} <span className="nn">( {data.nickname} )</span>
              </div>
              <div className="actor">
                Portrayed By -{" "}
                <span className="actorName">{data.portrayed}</span>
              </div>
              <div className="appearance">
                Appearance :
                {data.appearance.map((item, index) => (
                  <span key={index}>{` s${item} | `}</span>
                ))}
              </div>
              <div className="bdayInfo">
                <img src={cake} {...iconSize} />
                <div className="bday">{data.birthday}</div>
              </div>
              <div className="workInfo">
                <img src={work} {...iconSize} />
                <div className="work">
                  {data.occupation.map((item, index) => {
                    return <span key={index}>{`${item} | `}</span>;
                  })}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      {quotes.length > 0 && (
        <div className="quoteWrapper">
          <h1>Quotes by {name}</h1>
          {quoteError ? (
            <Error />
          ) : quoteLoading ? (
            <Loading />
          ) : (
            <div className="quotes">
              {quotes.map((item, index) => {
                return (
                  <div className="quote" key={index}>
                    - {item}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Details;
