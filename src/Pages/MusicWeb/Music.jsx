import styles from "../MusicWeb/Music.module.css"; // Import CSS styles
import { useState, useEffect } from "react"; // Import React hooks
import getArtistData from "../../api/Spotify_Artists/ArtistsInfo"; // Fetch artist data from API
import getTracksData from "../../api/Spotify_Artists/TracksLists"; // Fetch track list from API
import GetAlbumInfo from "../../api/Spotify_Artists/AlbumInfo"; // Fetch album info from API

// Music component fetches and displays artist, album, and track data
const Music = () => {
  // State variables to store fetched data
  const [artistData, setArtistData] = useState([]); // Store artist info
  const [tracksData, setTracksData] = useState([]); // Store tracks info
  const [albumData, setAlbumData] = useState([]); // Store album info
  // const [selectedAlbum, setSelectedAlbum] = useState(null); // Track selected album
  // const [selectedTracks, setSelectedTracks] = useState([]); // Track selected album's tracks

  // Fetch artist and album data when the component mounts
  useEffect(() => {
    // List of artist IDs to fetch data for
    const artists = [
      { id: "2CIMQHirSU0MQqyYHq0eOx" }, // Deadmau5
      { id: "57dN52uHvrHOxijzpIgu3E" }, // Ratatat
      { id: "0du5cEVh5yTK9QJze8zA0C" }, // Bruno Mars
      { id: "6IKlXZEFOvk9itrP1s0knJ" }, // The Red Clay Strays
      { id: "4oUHIQIBe0LHzYfvXNW4QM" }, // Morgan Wallen
    ];

    const fetchData = async () => {
      try {
        // Fetch artist info for each artist in the list
        const artistInfo = await Promise.all(
          artists.map(async (artist) => {
            const data = await getArtistData(artist.id); // Get artist data by ID
            return data || null; // Return data or null if unavailable
          })
        );
        setArtistData(artistInfo); // Set artist data state

        // Fetch album info (only the first album for each artist)
        const albumInfo = await Promise.all(
          artistInfo.map(async (artist) => {
            const data = await GetAlbumInfo(artist.id); // Get album info by artist ID
            return data?.length > 0 ? data[0] : null; // Return the first album
          })
        );
        setAlbumData(albumInfo); // Set album data state
      } catch (error) {
        console.error("Error fetching artist or album data:", error); // Log error if fetching fails
      }
    };

    fetchData(); // Execute the fetch function
  }, []); // Runs once when the component mounts

  // Fetch track data when album data is available
  useEffect(() => {
    if (albumData.length > 0) {
      const fetchTracks = async () => {
        try {
          // Fetch tracks for each album
          const trackInfo = await Promise.all(
            albumData.map(
              (album) =>
                album?.id ? getTracksData(album.id) : Promise.resolve([]) // Fetch tracks by album ID
            )
          );
          setTracksData(trackInfo); // Set track data state
        } catch (error) {
          console.error("Error fetching tracks:", error); // Log error if fetching tracks fails
        }
      };

      fetchTracks(); // Execute the fetch tracks function
    }
  }, [albumData]); // Runs when albumData updates

  // const handleAlbumClick = async (album) => {
 
  //   console.log("hello"); // Placeholder log message
  //   setSelectedAlbum(album); // Set the selected album

  //   if (!album?.id) return; // Return if no album ID is found

  //   try {
  //     const tracks = await getTracksData(album); // Fetch tracks for selected album
  //     setSelectedTracks(tracks || []); // Set selected tracks state
  //   } catch (error) {
  //     console.error("Error fetching tracks:", error); // Log error if fetching tracks fails
  //     setSelectedTracks([]); // Reset selected tracks on error
  //   }
  // };

  return (
    <div className={styles.info_container}>
      {/* Left box: Display artist and album information */}
      <section className={styles.left_box}>
        <h2>Artists Info:</h2>
        {artistData.length > 0 ? (
          artistData.map((artist, index) => (
            <div
              className={styles.artists}
              key={index}
              // onClick={() => handleAlbumClick} // Handle album click (currently not used)
            >
              <ul className={styles.artist_ul}>
                <li>{artist?.name || "No Data Available"}</li>
                <li className={styles.albumName}>
                  {albumData?.[index]?.name ?? "No Album Available"}{" "}
                  {/* Display album name */}
                </li>
              </ul>

              {/* Display artist image if available */}
              {artist?.images?.length > 0 && (
                <img
                  className={styles.albumImage}
                  src={artist.images[0].url}
                  alt={artist.name}
                  style={{
                    width: "120px",
                    height: "120px",
                    borderRadius: "10px", // Round image corners
                  }}
                />
              )}
            </div>
          ))
        ) : (
          <p>Loading...</p> // Show loading text until data is fetched
        )}
      </section>

      {/* Middle box: Display track list for each album */}
      <div className={styles.middle_box}>
        <h2>Album Tracks List</h2>

        <ol className={styles.track_ol} type="1">
          <section className={styles.artistInfo}>
            {tracksData.length > 0 ? (
              tracksData.map((albumTracks, index) => (
                <div key={index} className={styles.track_list}>
                  <h3 className={styles.album_name}>
                    {albumData[index]?.name || "Unknown Album"}{" "}
                    {/* Display album name */}
                  </h3>

                  {albumTracks.length > 0 ? (
                    albumTracks.map((track, idx) => (
                      <li className={styles.tracksLi} key={idx}>
                        {track.name || "No Track Name"}{" "}
                        {/* Display track name */}
                      </li>
                    ))
                  ) : (
                    <p>No tracks available</p> // Show if no tracks are available
                  )}
                </div>
              ))
            ) : (
              <p>Loading tracks...</p> // Show loading text for tracks
            )}
          </section>
        </ol>
      </div>
    </div>
  );
};

export default Music; // Export Music component
