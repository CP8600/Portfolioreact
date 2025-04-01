import { useEffect, useState } from "react";
import "../../Pages/Dragonball/Dragonball-page.css";
import GetDragonballApi from "../../api/DragonballApi/GetDragonballApi";
import DBPlanets from "../../api/DragonballApi/DB-Planets";
function Dragonball() {
  const [characters, setCharacters] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [transformCharacter, setTransformCharacter] = useState({});
  useEffect(() => {
    const fetchDragonballData = async () => {
      try {
        const response = await GetDragonballApi();

        // Ensure response.items exists and is an array
        setCharacters(response.items);
      } catch (error) {
        console.error("Error fetching Dragonball data:", error);
      }
    };

    fetchDragonballData();
  }, []);

  const handleTransform = () => {
    //use this to transform characters get character id
  };

  return (
    <div className="dragonball-container">
      <h1>Dragonball Characters</h1>
      <section className="DB-character-container">
        <ul className="db-ul">
          {characters.length > 0 ? (
            characters.map((character, index) => (
              <li key={index} className="db-li">
                <img
                  src={character.image}
                  alt={character.name}
                  className="db-image"
                />
                <section className="character-info">
                  <h2>{character.name}</h2>
                  <span>Max Ki: {character.maxKi}</span>

                  <span>{character.affiliation}</span>
                  <button onClick={handleTransform}>Transform</button>
                </section>
              </li>
            ))
          ) : (
            <p>Loading characters...</p>
          )}
        </ul>
      </section>
    </div>
  );
}

export default Dragonball;
