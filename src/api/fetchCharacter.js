    setLoading(true);
    setError(false);
    axios({
      url: `${URL}characters/${id}`,
      method: "GET",
    })
      .then((res) => {
        setCharacter(res.data);
        setLoading(false);
        setError(false);
      })
      .catch((e) => {
        setError(true);
        setLoading(false);
      });
  }, [id]);

  return { loading, error, data };
}

export default useFetchCharacters;
