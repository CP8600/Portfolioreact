const GetDragonballApi = async () => {
  try {
    const response = await fetch(
      "https://dragonball-api.com/api/characters?limit=58",
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
    console.error("Error fetching Dragonball data", error);
    return null;
  }
};

export default GetDragonballApi;
