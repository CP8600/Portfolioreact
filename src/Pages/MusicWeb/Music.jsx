import "../MusicWeb/Music.css";
import { useState, useEffect } from "react";
import getArtistData from "../../api/Spotify_Artists/ArtistsInfo";
import getTracksData from "../../api/Spotify_Artists/TracksLists";
import GetAlbumInfo from "../../api/Spotify_Artists/AlbumInfo";

// Music component fetches and displays artist, album, and track data
const Music = () => {
  // State variables to store fetched data
  const [artistData, setArtistData] = useState([]);
  const [tracksData, setTracksData] = useState([]);
  const [albumData, setAlbumData] = useState([]);
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [selectedTracks, setSelectedTracks] = useState([]);

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
            const data = await getArtistData(artist.id);
            return data || null;
          })
        );
        setArtistData(artistInfo);

        // Fetch album info (only the first album for each artist)
        const albumInfo = await Promise.all(
          artistInfo.map(async (artist) => {
            const data = await GetAlbumInfo(artist.id);
            return data?.length > 0 ? data[0] : null;
          })
        );
        setAlbumData(albumInfo);
      } catch (error) {
        console.error("Error fetching artist or album data:", error);
      }
    };

    fetchData();
  }, []); // Runs once when the component mounts

  // Fetch track data when album data is available
  useEffect(() => {
    if (albumData.length > 0) {
      const fetchTracks = async () => {
        try {
          const trackInfo = await Promise.all(
            albumData.map((album) =>
              album?.id ? getTracksData(album.id) : Promise.resolve([])
            )
          );

          setTracksData(trackInfo);
        } catch (error) {
          console.error("Error fetching tracks:", error);
        }
      };

      fetchTracks();
    }
  }, [albumData]); // Runs when albumData updates

  const handleAlbumClick = async (album) => {
    console.log("hello");
    setSelectedAlbum(album);

    if (!album?.id) return;

    try {
      const tracks = await getTracksData(album);
      setSelectedTracks(tracks || []);
    } catch (error) {
      console.error("Error fetching tracks:", error);
      setSelectedTracks([]);
    }
  };

  return (
    <div className="info_container">
      {/* Left box: Display artist and album information */}
      <section className="left-box flexbox">
        <h2>Artists Info:</h2>
        {artistData.length > 0 ? (
          artistData.map((artist, index) => (
            <div
              className="artists"
              key={index}
              onClick={() => handleAlbumClick(console.log(albumData[index]))}
            >
              <ul className="artist-ul">
                <li>Artist: {artist?.name || "No Data Available"}</li>
                <li>
                  Album: {albumData?.[index]?.name ?? "No Album Available"}
                </li>
              </ul>

              {/* Display artist image if available */}
              {artist?.images?.length > 0 && (
                <img
                  src={artist.images[0].url}
                  alt={artist.name}
                  style={{
                    width: "120px",
                    height: "120px",
                    borderRadius: "10px",
                  }}
                />
              )}
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </section>

      {/* Middle box: Display track list for each album */}
      <div className="middle-box flexbox">
        <h2>Album Tracks List</h2>
        <ol className="track-ol" type="1">
          {tracksData.length > 0 ? (
            tracksData.map((albumTracks, index) => (
              <div key={index} className="track-list">
                <h3 className="album_name">
                  {albumData[index]?.name || "Unknown Album"}
                </h3>
                {albumTracks.length > 0 ? (
                  albumTracks.map((track, idx) => (
                    <li key={idx}>{track.name || "No Track Name"}</li>
                  ))
                ) : (
                  <p>No tracks available</p>
                )}
              </div>
            ))
          ) : (
            <p>Loading tracks...</p>
          )}{" "}
        </ol>
      </div>
    </div>
  );
};

export default Music;
