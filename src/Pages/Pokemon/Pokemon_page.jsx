import React, { useEffect, useState } from "react";
import Get_Pokemon_Api from "../../api/Pokemon/Get_Pokemon_Api";
import styles from "../Pokemon/Pokemon.module.css";
const Pokemon_page = () => {
  const [pokemon, setPokemon] = useState(null);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [pokemonDetails, setPokemonDetails] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await Get_Pokemon_Api();
      setPokemon(data);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchDetails = async () => {
      if (selectedPokemon) {
        const response = await fetch(selectedPokemon.url);
        const data = await response.json();
        setPokemonDetails(data);
      }
    };

    fetchDetails();
  }, [selectedPokemon]);

  return (
    <div className={styles.container}>
      <h2 className={styles.h1}>Pokemon List</h2>

      {pokemon ? (
        <div>
          <ul className={styles.ul}>
            {pokemon.results.map((poke, index) => (
              <li
                className={styles.li}
                key={index}
                style={{ cursor: "pointer", margin: "5px 0" }}
                onClick={() => setSelectedPokemon(poke)}
              >
                {poke.name}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Loading...</p>
      )}

      <h2>Pokemon Details</h2>
      {pokemonDetails ? (
        <div>
          <h3>{pokemonDetails.name}</h3>
          <img className={styles.img}
            src={pokemonDetails.sprites.other["official-artwork"].front_default}
            alt={pokemonDetails.name}
            style={{ width: "200px", height: "200px" }}
          />
        </div>
      ) : (
        <p>Select a Pokemon to see details</p>
      )}
    </div>
  );
};

export default Pokemon_page;
