import React, { useEffect, useState } from "react";
import Pokemon_Api from "../Api/Get_Pokemon_Api"; //gets pokemon data from api
import MasterBall_Api from "../Api/Get_MasterBall_Api."; //gets masterball data from api
import PokeBall from "../../Images/Masterball.png"; //gets masterball image from src
import styles from "../CSS/Pokemon.module.css"; //imports css styles

const Pokemon_page = () => {
  const [pokemon, setPokemon] = useState(null); //sets pokemon data
  const [selectedPokemon, setSelectedPokemon] = useState(null); //sets selected pokemon
  const [pokemonDetails, setPokemonDetails] = useState(null); //sets pokemon details
  const [clickedIndex, setClickedIndex] = useState(null); //sets clicked index
  const [masterBall, setMasterBall] = useState(null); //sets masterball data
  useEffect(() => {
    const fetchData = async () => {
      const res = await MasterBall_Api(); //fetches masterball data
      if (res?.sprites?.default) {
        //checks if default sprite exists
        setMasterBall(res.sprites.default); // ✅ set image URL
      }
    };
    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      const data = await Pokemon_Api(); //fetches pokemon data
      setPokemon(data); // sets pokemon data
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchDetails = async () => {
      if (selectedPokemon) {
        //checks if selected pokemon exists
        const response = await fetch(selectedPokemon.url); //fetches selected pokemon data
        const data = await response.json(); //parses response to json
        setPokemonDetails(data); //sets pokemon details
      }
    };

    fetchDetails();
  }, [selectedPokemon]); //sets selected pokemon data

  return (
    <div className={styles.pokemon_page}>
      <div className={styles.pokemon_pageContainer}>
        <h2 className={styles.h1}>Pokemon List</h2>
        <span className={styles.titleSpan}>
          Character Information retrieved from{" "}
          <h3>
            <a className={styles.a} href="https://pokeapi.co/">pokeapi.co/</a>
          </h3>
        </span>
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
          {pokemonDetails ? (
            <div>
              <h2 className={styles.pokemon_name}>{pokemonDetails.name}</h2>
              <img
                className={styles.pokemon_img}
                src={
                  pokemonDetails.sprites.other["official-artwork"].front_default
                }
                alt={pokemonDetails.name}
              />
            </div>
          ) : masterBall ? (
            <img
              className={styles.masterball}
              src={PokeBall}
              alt="Master Ball"
            />
          ) : (
            <p>Select a Pokemon to see details</p>
          )}
        </section>
      </div>
    </div>
  );
};

export default Pokemon_page;
