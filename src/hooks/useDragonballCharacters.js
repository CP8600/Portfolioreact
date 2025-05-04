// hooks/useDragonballCharacters.js
import { useEffect, useState } from "react";
import GetDragonballApi from "../Api/GetDragonballApi";
import getTransformationsApi from "../Api/Transformations";

const useDragonballCharacters = () => {
  const isMatchingCharacter = (base, transformed) => {
    const baseName = base.split(" ")[0].toLowerCase();
    return transformed.toLowerCase().startsWith(baseName);
  };

  const [characters, setCharacters] = useState([]);
  const [transformCharacter, setTransformCharacter] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      const response = await GetDragonballApi();
      setCharacters(
        response.items.map((char) => ({ ...char, transformCharacter: -1 }))
      );
    };
    fetchCharacters();
  }, []);

  useEffect(() => {
    if (characters.length === 0) return;

    const fetchTransformations = async () => {
      const response = await getTransformationsApi();
      const matched = characters.reduce((acc, character) => {
        const transformation = response.filter((form) =>
          isMatchingCharacter(character.name, form.name)
        );
        acc[character.id] = transformation;
        return acc;
      }, {});

      setTransformCharacter(matched);
    };

    fetchTransformations();
  }, [characters]);

  return {
    characters,
    setCharacters,
    transformCharacter,
  };
};
export default useDragonballCharacters;
