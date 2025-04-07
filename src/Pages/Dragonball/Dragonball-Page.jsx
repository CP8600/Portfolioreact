import { useEffect, useState } from "react";
import styles from "../../Pages/Dragonball/Dragonball-page.module.css";
import GetDragonballApi from "../../api/DragonballApi/GetDragonballApi";
import DBPlanets from "../../api/DragonballApi/DB-Planets";
function Dragonball() {
  // State to store the base characters fetched from the API
  const [characters, setCharacters] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [transformCharacter, setTransformCharacter] = useState({});

  /**
   * Function to check if a character's base name matches a transformation name.
   * Ensures that transformations like "Goku SSJ" match "Goku".
   */

  const isMatchingCharacter = (characterName, transformationName) => {
    const baseName = characterName.toLowerCase().trim();
    const transformedName = transformationName.toLowerCase().trim();
    return transformedName.startsWith(baseName);
  };

  /**
   * Fetches the base Dragonball characters from the API on component mount.
   * Sets the base characters in state before transformations are fetched.
   */

  useEffect(() => {
    const fetchDragonballData = async () => {
      try {
        const response = await GetDragonballApi();
        console.info(
          `${"Character Information retrieved from dragonball-api.com"}`
        );
        setCharacters(response.items); // Store the base characters
      } catch (error) {
        console.error("Error fetching Dragonball data:", error);
      }
    };

    fetchDragonballData();
  }, []); // Runs only once when the component mounts

  /**
   * Fetches the transformations from the API and maps them to the respective base characters.
   * Runs only after the base characters have been successfully fetched.
   */
  useEffect(() => {
    if (characters.length === 0) return; // Prevents unnecessary API calls when characters are not yet loaded

    const fetchTransformations = async () => {
      try {
        const response = await getTransformationsApi();
        const transformations = response; // assuming it's an array
        const matchedTransformations = {};

        characters.forEach((character) => {
          const transformation = transformations.filter((form) =>
            isMatchingCharacter(character.name, form.name)
          );

          if (transformation) {
            matchedTransformations[character.name] = transformation;
          }
        });
        console.log(matchedTransformations);
        setTransformCharacter(matchedTransformations); // set the state once
      } catch (error) {
        console.error("Error fetching transformation data:", error);
      }
    };

    fetchTransformations();
  }, [characters]); // Runs only when characters are updated

  /**
   * Handles the transformation of a character when the user clicks the transform button.
   * Updates the character's displayed image and name to the transformed version.
   */
  const handleTransform = (character) => {
    const transformations = transformCharacter[character.name];
    if (!transformations || transformations.length === 0) {
      console.log(`No transformations available for ${character.name}`);
      return;
    }

    const currentIndex = character.transformationIndex ?? -1; // if undefined, start at -1
    const nextIndex = (currentIndex + 1) % transformations.length;
    const nextTransformation = transformations[nextIndex];

    setCharacters((prevCharacters) =>
      prevCharacters.map((char) =>
        char === character
          ? {
              ...char,
              image: nextTransformation.image,
              name: nextTransformation.name,
              isTransformed: true,
              baseForm: character.baseForm || character,
              transformationIndex: nextIndex,
            }
          : char
      )
    );

    console.log(
      `Transformed ${character.name} to stage ${nextIndex + 1}: ${
        nextTransformation.name
      }`
    );
  };

  return (
    <div className={styles.dragonballContainer}>
      <header className={styles.header}>
        <h1 className={styles.h1}>Dragonball Characters</h1>
        {/* <span className={styles.titleSpan}>
          Character Information retrieved from <h3>dragonball-api.com</h3>
        </span> */}
      </header>
      <section className={styles.DB_Character_Container}>
        <ul className={styles.db_ul}>
          {/* Display the characters if they exist; otherwise, show a loading message */}
          {characters.length > 0 ? (
            characters.map((character) => (
              <li key={character.id} className={styles.db_li}>
                <img
                  src={character.image || character.char?.image} // Always displays the character's current state
                  alt={character.name || character.char?.name}
                  className={styles.db_image}
                />
                <section className={styles.character_info}>
                  <h2 className={styles.dragonball_container_h2}>
                    {character.name || character.char?.name}
                  </h2>
                  <span>
                    Max Ki: {character.maxKi || character.char?.maxKi}
                  </span>
                  <span>
                    {character.affiliation || character.char?.affiliation}
                  </span>
                  <button
                    className={styles.transform_btn}
                    onClick={() => handleTransform(character)}
                  >
                    {character.isTransformed ? "Next Form" : "Transform"}
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
