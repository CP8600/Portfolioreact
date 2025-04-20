const Pokemon_Api = async () => {
  try {
    const response = await fetch(
      // "https://pokeapi.co/api/v2/pokemon/",
      "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0",
      {
        headers: { "Content-Type": "application/json" },
      }
    );

    if (!response.ok) {
      throw new Error(`Http error! Status:${response.status}`);
    }

    const data = await response.json();
    // console.log("API Response:", json); // Check what the API returns

    return data;
  } catch (error) {
    console.error("Error fetching Pokemon data", error);
    return null;
  }
};

export default Pokemon_Api;
