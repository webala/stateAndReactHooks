import React from "react";
import useRickAndMortyApi from "../hooks/useRickAndMortyApi";

const Locations = () => {
  const { data, isLoading, error } = useRickAndMortyApi("episode");

  return (
    <div>
      {data.map((location) => (
        <p>{location.name}</p>
      ))}
    </div>
  );
};

export default Locations;
