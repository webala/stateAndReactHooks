import React, { useEffect, useState } from "react";
import axios from "axios";

const useRickAndMortyApi = (path) => {
  const [data, setData] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(true);

  useEffect(() => {
    const fetchApiData = async () => {
      /*
    This function fetches data from the rick and morty api
    It takes in a path and appends it to the base url
    The path can either be character, location, episode     
    */

      try {
        const response = await axios(`https://rickandmortyapi.com/api/${path}`);
        setData(response.data.results);
        setIsLoading(false);
      } catch (error) {
        console.log("unable to fetch data", error);
        setError("unable to fetch api data");
      }
    };
    fetchApiData();
  }, []);

  return {
    data,
    isLoading,
    error,
  };
};

export default useRickAndMortyApi;
