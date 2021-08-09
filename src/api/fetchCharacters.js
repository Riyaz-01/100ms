import axios from "axios";
import React, { useState, useEffect } from "react";
import URL from "./URL";

const filterData = (data, query) => {
  if (query === "") return data;
  let temp = data.filter((item) => item.name.toLowerCase().includes(query));
  return temp;
};

function useFetchCharacters(query) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    setCharacters([]);
  }, []);

  useEffect(() => {
    setLoading(true);
    setError(false);
    let cancel;
    axios({
      url: `${URL}characters`,
      method: "GET",
      cancelToken: new axios.CancelToken((c) => (cancel = c)),
    })
      .then((res) => {
        setCharacters(() => filterData(res.data, query));
        setLoading(false);
        setError(false);
      })
      .catch((e) => {
        if (axios.isCancel(e)) return;
        setError(true);
        setLoading(false);
      });
    return () => cancel();
  }, [query]);

  return { loading, error, characters };
}

export default useFetchCharacters;
