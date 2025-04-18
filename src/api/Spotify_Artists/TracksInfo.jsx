// Function to fetch track data for a specific album using the Spotify API
const getTracksData = async (id) => {
  try {
    // Retrieve the Spotify API access token from the environment variables
    const token = import.meta.env.VITE_SPOTIFY_ACCESS_TOKEN;

    // If the token is missing or outdated, throw an error
    if (!token) {
      throw new Error(
        "Spotify API token is missing or outdated. Please update your token. Check your .env file."
      );
    }

    // Send a GET request to the Spotify API to fetch track data for the album specified by the 'id'
    const response = await fetch(
      `https://api.spotify.com/v1/albums/${id}/tracks`, // API endpoint for album tracks
      {
        headers: {
          // Authorization header includes the Bearer token for authentication
          Authorization: `Bearer ${token}`,
          // Specify that the content type is JSON
          "Content-Type": "application/json",
        },
      }
    );

    // If the response from the API is not OK (status code not in 200-299), throw an error
    if (!response.ok) {
      throw new Error(`HTTP error Status ${response.status}`);
    }

    // Parse the response JSON to extract the track data
    const json = await response.json();

    // Return the track list (json.items) or an empty array if no tracks are found
    return json.items || [];
  } catch (error) {
    // Log any errors that occur during the fetch process
    console.error("Error fetching music data:", error);
  }
};

// Export the function so it can be used in other parts of the application
export default getTracksData;
