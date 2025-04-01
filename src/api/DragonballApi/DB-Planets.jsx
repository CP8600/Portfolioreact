const DBPlanets = async () => {
  try {
    const response = await fetch("https://dragonball-api.com/api/planets", {
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) {
      throw new Error(`Http error! Status:${response.status}`);
    }
    const json = await response.json();
    console.log("API Response:", json); // Check what the API returns

    return json;
  } catch (error) {
    console.error("Error retrieving Planets:", error);
  }
};

export default DBPlanets;
