import React, { useState, useEffect } from "react";

export function useFetchCharacters(query, pageNumber) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [sectors, setSectors] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setSectors([]);
  }, [query]);

  useEffect(() => {
    setLoading(true);
    setError(false);
    let cancel;
    axios({
      method: "GET",
      url: `${url}/sector/fetch/`,
      params: { searchTerm: query, pageNo: pageNumber },
      cancelToken: new axios.CancelToken((c) => (cancel = c)),
    })
      .then((res) => {
        setSectors((prev) => {
          return [...prev, ...res.data.data.sectorInfo];
        });
        setHasMore(res.data.data.sectorInfo.length > 0);
        setLoading(false);
      })
      .catch((e) => {
        if (axios.isCancel(e)) return;
        setError(true);
      });
    return () => cancel();
  }, [query, pageNumber]);

  return { loading, error, sectors, hasMore };
}
