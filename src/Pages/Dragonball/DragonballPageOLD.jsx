import { useEffect, useState } from "react";
import "../../Pages/Dragonball/Dragonball-page.css";
import GetDragonballApi from "../../api/DragonballApi/GetDragonballApi";
import getTransformationsApi from "../../api/DragonballApi/Transformations";
//DOES NOT WORK PROPERLY
//DOES NOT WORK PROPERLY
//DOES NOT WORK PROPERLY
function Dragonball() {
  const [characters, setCharacters] = useState([]);
  const [transformCharacter, setTransformCharacter] = useState({});

  // Function to check if a character name matches a transformation name
  const isMatchingCharacter = (characterName, transformationName) => {
    const baseName = characterName.toLowerCase().trim();
    const transformedName = transformationName.toLowerCase().trim();

    return transformedName.startsWith(baseName); // Matches "Goku" with "Goku SSJ"
  };

  // Fetch Dragonball characters
  //display base form
  useEffect(() => {
    const fetchDragonballData = async () => {
      try {
        const response = await GetDragonballApi();
        setCharacters(response.items);
      } catch (error) {
        console.error("Error fetching Dragonball data:", error);
      }
    };

    fetchDragonballData();
  }, []);

  // Fetch transformations and match them with characters
  useEffect(() => {
    if (characters.length === 0) return; // Ensure characters are loaded before fetching transformations

    const fetchTransformations = async () => {
      try {
        const response = await getTransformationsApi();
        const transformations = response; // Assuming response is the list of transformations

        const matchedTransformations = {};
        // there may be multiple transformations for same base character

        characters.forEach((character) => {
          const matchingTransformation = transformations.find(
            (transformation) =>
              isMatchingCharacter(character.name, transformation.name)
          );

          if (matchingTransformation) {
            matchedTransformations[character.id] = matchingTransformation; // Correct key for storing
          }
        });

        console.log("Matched Transformations:", matchedTransformations);
        setTransformCharacter(matchedTransformations);
      } catch (error) {
        console.error("Error fetching transformation data:", error);
      }
    };

    fetchTransformations();
  }, [characters]); // Run only when characters are fetched

  // Handle transformation
  const handleTransform = (character) => {
    const transformation = transformCharacter[character.id]; // Fetch the transformation for the character

    if (!transformation) {
      console.warn(`No transformation available for ${character.name}`);
      return;
    }

    const transformedCharacter = {
      ...character,
      image: transformation.image,
      name: transformation.name, // Update with transformation name
    };

    // Update the character list with the transformed character
    setTransformCharacter((prev) => ({
      ...prev,
      [character.id]: transformation,
    }));

    console.log(
      `Transformed ${character.name} into ${transformedCharacter.name}`
    );
  };

  return (
    <div className="dragonball-container">
      <h1>Dragonball Characters</h1>
      <span className={styles}></span>
      <section className="DB-character-container">
        <ul className="db-ul">
          {characters.length > 0 ? (
            characters.map((character) => (
              <li key={character.id} className="db-li">
                <img
                  src={
                    transformCharacter[character.id]?.image || character.image
                  }
                  alt={transformCharacter[character.id]?.name || character.name}
                  className="db-image"
                />
                <section className="character-info">
                  <h2>
                    {transformCharacter[character.id]?.name || character.name}
                  </h2>
                  <span>Max Ki: {character.maxKi}</span>
                  <span>{character.affiliation}</span>
                  <button
                    className="transform-btn"
                    onClick={() => handleTransform(character)} // Pass the correct character here
                  >
                    Transform
                  </button>
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
