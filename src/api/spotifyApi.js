const SPOTIFY_TOKEN = import.meta.env.VITE_SPOTIFY_ACCESS_TOKEN;

export const getArtistData = async (artistId) => {
  try {
    if (!SPOTIFY_TOKEN) throw new Error("Missing Spotify API token.");

    const response = await fetch(
      `https://api.spotify.com/v1/artists/${artistId}`,
      {
        headers: {
          Authorization: `Bearer ${SPOTIFY_TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error("Error fetching artist data:", error);
    return null;
  }
};

export const getTracksData = async (artistId) => {
  try {
    if (!SPOTIFY_TOKEN) throw new Error("Missing Spotify API token.");

    const response = await fetch(
      `https://api.spotify.com/v1/artists/${artistId}/top-tracks?market=US`,
      {
        headers: {
          Authorization: `Bearer ${SPOTIFY_TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
    const json = await response.json();
    return json.tracks || [];
  } catch (error) {
    console.error("Error fetching tracks:", error);
    return [];
  }
};
