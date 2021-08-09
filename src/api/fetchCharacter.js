import axios from "axios";
import React, { useState, useEffect } from "react";
import useFetchQuotes from "./fetchQuotes";
import URL from "./URL";

function useFetchCharacter(id) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setData([]);
  }, []);

  useEffect(() => {
    setLoading(true);
    setError(false);
    axios({
      url: `${URL}characters/${id}`,
      method: "GET",
    })
      .then((res) => {
        setData(res.data[0]);
        setLoading(false);
        setError(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, [id]);

  return { loading, error, data };
}

export default useFetchCharacter;
