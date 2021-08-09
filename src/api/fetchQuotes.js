import axios from "axios";
import React, { useState, useEffect } from "react";
import URL from "./URL";

function useFetchQuotes(name) {
  const [quoteLoading, setLoading] = useState(true);
  const [quoteError, setError] = useState(false);
  const [quotes, setQuotes] = useState([]);

  const getQuotes = (data) => {
    let temp = [];
    data.forEach((item) => {
      temp.push(item.quote);
    });
    return temp;
  };

  useEffect(() => {
    setQuotes([]);
  }, []);

  useEffect(() => {
    setLoading(true);
    setError(false);
    axios({
      url: `${URL}quote`,
      method: "GET",
      params: {
        author: name,
      },
    })
      .then((res) => {
        setQuotes(() => getQuotes(res.data));
        setLoading(false);
        setError(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, [name]);

  return { quoteLoading, quoteError, quotes };
}

export default useFetchQuotes;
