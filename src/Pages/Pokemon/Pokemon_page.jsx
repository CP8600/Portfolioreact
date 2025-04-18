import React, { useEffect, useState } from "react";
import Get_Pokemon_Api from "../../api/Pokemon/Get_Pokemon_Api";
const Pokemon_page = () => {
  const [pokemon, setPokemon] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const data = await Get_Pokemon_Api();
      setPokemon(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      {pokemon &&
        pokemon.results.map((poke, index) => {
          <h2 key={index}>{poke.name}</h2>;
          console.log(poke.name);
        })}
    </div>
  );
};

export default Pokemon_page;
