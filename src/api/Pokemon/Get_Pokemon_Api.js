const Get_Pokemon_Api = async () => {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto", {
      headers: { "Content-Type": "application/json" },
    });

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

export default Get_Pokemon_Api;
