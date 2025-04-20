const MasterBall_Api = async () => {
  try {
    const response = await fetch(
      "https://pokeapi.co/api/v2/item/1",
      {
        headers: { "Content-Type": "application/json" },
      }
    );

    if (!response.ok) {
      throw new Error(`Http error! Status:${response.status}`);
    }

    const MasterBall_Data = await response.json();
    // console.log("API Response:", json); // Check what the API returns

    return MasterBall_Data;
  } catch (error) {
    console.error("Error fetching Pokemon data", error);
    return null;
  }
};

export default MasterBall_Api;
