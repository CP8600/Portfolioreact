// Function to fetch album information for a given artist
const GetAlbumInfo = async (artistId) => {
  try {
    // Retrieve the Spotify API access token from environment variables
    const token = import.meta.env.VITE_SPOTIFY_ACCESS_TOKEN;

    // Check if the token is available, if not, throw an error
    if (!token) {
      throw new Error(
        "Spotify API token is missing or outdated. Please update your token in the .env file."
      );
    }

    // Make a fetch request to the Spotify API to get albums for the given artist
    const response = await fetch(
      `https://api.spotify.com/v1/artists/${artistId}/albums?include_groups=album&limit=1`,
      {
        headers: {
          Authorization: `Bearer ${token}`, // Authorization header with the API token
          "Content-Type": "application/json", // Specify JSON content type
        },
      }
    );

    // If the response is not okay (e.g., non-2xx HTTP status), throw an error
    if (!response.ok) {
      throw new Error(`HTTP error Status ${response.status}`);
    }

    // Parse the JSON response to extract the album data
    const json = await response.json();

    // Return the list of albums (items) from the response
    return json.items;
  } catch (error) {
    // Log any errors that occur during the fetch operation
    console.error("Error fetching music data:", error);
  }
};

export default GetAlbumInfo;
