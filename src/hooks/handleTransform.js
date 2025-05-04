import useDragonballCharacters from "./useDragonballCharacters";

const HandleTransform = (character) => {
  const { setCharacters, transformCharacter } = useDragonballCharacters();

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
export default HandleTransform;
