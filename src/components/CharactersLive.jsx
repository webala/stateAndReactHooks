import React, { useEffect, useState } from "react";

const CharactersLive = () => {
  const [characters, setCharacters] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(true);

  useEffect(() => {
    const path = "character";

    const fetchApiData = async () => {
      /*
    This function fetches data from the rick and morty api
    It takes in a path and appends it to the base url
    The path can either be character, location, episode     
    */

      try {
        const response = await axios(`https://rickandmortyapi.com/api/${path}`);
        setCharacters(response.data.results);
        setIsLoading(false);
      } catch (error) {
        console.log("unable to fetch data", error);
        setError("unable to fetch api data");
      }
    };
    fetchApiData();
  }, []);

  return (
    <div>
      <h1 className="title">Characters</h1>
      {characters.map((character) => (
        <div className="character">
          {" "}
          <img src={character.image} alt="" /> <p>{character.name}</p>{" "}
        </div>
      ))}
    </div>
  );
};

export default CharactersLive;
