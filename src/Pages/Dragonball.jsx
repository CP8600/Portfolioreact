import styles from "../CSS/DragonBall.module.css";
import CharacterCard from "../Components/CharacterCard";
import useDragonballCharacters from "../hooks/useDragonballCharacters";

function Dragonball() {
  const { characters, setCharacters, transformCharacter } =
    useDragonballCharacters();

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
              baseForm: character.baseForm || { ...character },
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
        <span className={styles.titleSpan}>
          Character Information retrieved from{" "}
          <h3>
            <a className={styles.a} href="https://web.dragonball-api.com/">
              dragonball-api.com
            </a>
          </h3>
        </span>
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
                hasTransformations={transformCharacter[character.id]?.length}
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
