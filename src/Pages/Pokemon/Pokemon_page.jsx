import React, { useEffect, useState } from "react";
import Pokemon_Api from "../../api/Pokemon/Get_Pokemon_Api";
import MasterBall_Api from "../../api/Pokemon/Get_MasterBall_Api.";
import MB from "../../../public/Masterball.png";

import styles from "../Pokemon/Pokemon.module.css";
const Pokemon_page = () => {
  const [pokemon, setPokemon] = useState(null);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [pokemonDetails, setPokemonDetails] = useState(null);
  const [clickedIndex, setClickedIndex] = useState(null);
  const [masterBall, setMasterBall] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const res = await MasterBall_Api();
      if (res?.sprites?.default) {
        setMasterBall(res.sprites.default); // ✅ set image URL
      }
    };
    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      const data = await Pokemon_Api();
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
    <div>
      <h2 className={styles.h1}>Pokemon List</h2>
      <div className={styles.pokemon_pageContainer}>
        {pokemon ? (
          <div className={styles.btn_container}>
            <ul className={styles.ul}>
              {pokemon.results.map((poke, index) => (
                <li
                  className={`${styles.li} ${
                    clickedIndex === index ? styles.clicked : ""
                  }`}
                  key={index}
                  onClick={() => {
                    setClickedIndex(index);
                    setSelectedPokemon(poke);
                  }}
                >
                  {poke.name}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p>Loading...</p>
        )}

        <section className={styles.pokemon_details}>
          <h2>Pokemon Details</h2>
          {pokemonDetails ? (
            <div>
              <h3 className={styles.pokemon_name}>{pokemonDetails.name}</h3>
              <img
                className={styles.pokemon_img}
                src={
                  pokemonDetails.sprites.other["official-artwork"].front_default
                }
                alt={pokemonDetails.name}
              />
            </div>
          ) : masterBall ? (
            <img className={styles.masterball} src={MB} alt="Master Ball" />
          ) : (
            <p>Select a Pokemon to see details</p>
          )}
        </section>
      </div>
    </div>
  );
};

export default Pokemon_page;
