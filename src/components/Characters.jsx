import React, { useEffect, useState } from "react";
import axios from "axios";
import useRickAndMortyApi from "../hooks/useRickAndMortyApi";
const CharactersLive = () => {
  const {
    data: characters,
    isLoading,
    error,
  } = useRickAndMortyApi("character");

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
