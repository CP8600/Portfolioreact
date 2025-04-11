import styles from "../../Pages/Dragonball/Dragonball-page.module.css";
import CharacterCard from "../../Components/Dragonball-comp/CharacterCard";
import useDragonballCharacters from "../../hooks/DragonBallCharacters";

function Dragonball() {
  // State to store the base characters fetched from the API

  // State to store the transformations mapped to character IDs
  const { characters, setCharacters, transformCharacter } =
    useDragonballCharacters();

  /**
   * Function to check if a character's base name matches a transformation name.
   * Ensures that transformations like "Goku SSJ" match "Goku".
   */

  /**
   * Handles the transformation of a character when the user clicks the transform button.
   * Updates the character's displayed image and name to the transformed version.
   */

  const handleTransform = (character) => {
    const transformations = transformCharacter[character.id];
    if (!transformations || transformations.length === 0) {
      console.log(`No transformations available for ${character.name}`);
      return;
    }

    const currentIndex = character.transformationIndex ?? -1; // if undefined, start at -1
    const nextIndex = (currentIndex + 1) % transformations.length;
    const nextTransformation = transformations[nextIndex];

    setCharacters((prevCharacters) =>
      prevCharacters.map((char) =>
        char.id === character.id
          ? {
              ...char,
              image: nextTransformation.image,
              name: nextTransformation.name,
              isTransformed: true,
              // baseForm: character.baseForm || { ...character },
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
              <CharacterCard
                key={character.id}
                character={character}
                onTransform={handleTransform}
              />
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
