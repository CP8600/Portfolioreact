import { useEffect, useState } from "react";

const Pokemon_useeffect = () => {
  const [pokemon, setPokemon] = useState(null);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [pokemonDetails, setPokemonDetails] = useState(null);
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
    <>
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
    </>
  );
};

export default Pokemon_useeffect;
