const getArtistData = async (artistId, retries = 3) => {
  try {
    const token = import.meta.env.VITE_SPOTIFY_ACCESS_TOKEN;
    if (!token) {
      throw new Error(
        "Spotify API token is missing or outdated. Please update your token. Check your .env file."
      );
    }

    const response = await fetch(
      `https://api.spotify.com/v1/artists/${artistId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    // Check for 429 rate limit error
    if (response.status === 429) {
      const retryAfter = response.headers.get("Retry-After") || 10; // Default to 10 seconds if not provided
      if (retries > 0) {
        console.warn(`Rate limited. Retrying after ${retryAfter} seconds...`);
        await new Promise((resolve) => setTimeout(resolve, retryAfter * 1000)); // Wait for retry period
        return getArtistData(artistId, retries - 1); // Retry the request
      }
      throw new Error("Exceeded rate limit retries. Please try again later.");
    }

    if (!response.ok) {
      throw new Error(`HTTP error Status ${response.status}`);
    }

    const json = await response.json();
    return json;
  } catch (error) {
    console.error("Error fetching music data:", error);
    return null; // Optionally return null in case of error
  }
};

export default getArtistData;
