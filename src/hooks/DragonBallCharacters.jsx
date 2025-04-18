// hooks/useDragonballCharacters.js
import { useEffect, useState } from "react";
import GetDragonballApi from "../api/DragonballApi/GetDragonballApi";
import getTransformationsApi from "../api/DragonballApi/Transformations";

const isMatchingCharacter = (base, transformed) => {
  const baseName = base.split(" ")[0].toLowerCase();
  return transformed.toLowerCase().startsWith(baseName);
};

export default function useDragonballCharacters() {
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
      const matched = {};

      characters.forEach((character) => {
        const transformation = response.filter((form) =>
          isMatchingCharacter(character.name, form.name)
        );
        if (transformation) {
          matched[character.id] = transformation;
        }
      });
      setTransformCharacter(matched);
    };

    fetchTransformations();
  }, [characters]);

  return {
    characters,
    setCharacters,
    transformCharacter,
  };
}
