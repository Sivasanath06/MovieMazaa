import { useState, useEffect } from "react";

export const useFetch = (apiPath, queryTerm="") => {
    const [data, setData] = useState([]);
    const [loading,setLoading]=useState(false);
    const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${process.env.REACT_APP_API_KEY}&query=${queryTerm}`

    useEffect(() => {
        async function fetchMovies(){
          setLoading(true);
          const response = await fetch(url);
          const json = await response.json();
          setData(json.results);
          setLoading(false);
        }
        fetchMovies();
      }, [url])

  return { data ,loading}
}