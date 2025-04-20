const getTransformationsApi = async () => {
  try {
    const response = await fetch(
      "https://dragonball-api.com/api/transformations",
      {
        headers: { "Content-Type": "application/json" },
      }
    );

    if (!response.ok) {
      throw new Error(`Http error! Status: ${response.status}`);
    }

    const data = await response.json();
    // console.log("Raw API Response:", data); // Log full response

    return data || []; // Check if `data.items` exists
  } catch (error) {
    console.error("Error retrieving Transformations:", error);
    return []; // Return empty array to avoid breaking code
  }
};

export default getTransformationsApi;
