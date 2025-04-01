import "../MusicWeb/Music.css";
import { useState, useEffect } from "react";
import getArtistData from "../../Components/Spotify_Artists/ArtistsInfo";
import getTracksData from "../../Components/Spotify_Artists/TracksLists";
import GetAlbumInfo from "../../Components/Spotify_Artists/AlbumInfo";
// import ArtistsID from "./ArtistsID";
const Music = () => {
  const [artistData, setArtistData] = useState([]);
  const [tracksData, setTracksData] = useState([]);
  const [albumData, setAlbumData] = useState([]);

  const artists = [
    { id: "2CIMQHirSU0MQqyYHq0eOx" }, // Deadmau5
    { id: "57dN52uHvrHOxijzpIgu3E" }, // Ratatat
    { id: "0du5cEVh5yTK9QJze8zA0C" }, // Bruno Mars
    { id: "6IKlXZEFOvk9itrP1s0knJ" }, // The Red Clay Strays
    { id: "4oUHIQIBe0LHzYfvXNW4QM" }, // Morgan Wallen
  ];

  const handleAlbumClick = () => {};

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch artist info
        const artistInfo = await Promise.all(
          artists.map(async (artist) => {
            const data = await getArtistData(artist.id);
            return data || null;
          })
        );
        setArtistData(artistInfo);
        console.log(artistInfo);

        // Fetch album info (get first album only)
        const albumInfo = await Promise.all(
          artists.map(async (artist) => {
            const data = await GetAlbumInfo(artist.id);
            return data?.items?.length > 0 ? data.items[0] : null;
          })
        );
        setAlbumData(albumInfo);
        {
          console.log(albumInfo);
        }
      } catch (error) {
        console.error("Error fetching artist or album data:", error);
      }
    };

    fetchData();
  }, []);

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
          console.log(trackInfo);
        } catch (error) {
          console.error("Error fetching tracks:", error);
        }
      };

      fetchTracks();
    }
  }, [albumData]); // Fetch tracks only when albumData updates

  return (
    <div className="info_container">
      <div className="left-box flexbox">
        <h2>Artists Info:</h2>
        {artistData.length > 0 ? (
          artistData.map((artist, index) => (
            <div className="artists" key={index}>
              <p>Artist: {artist?.name || "No Data Available"}</p>
              {/* <p>Genres: {artist?.genres?.join(", ") || "No Data Available"}</p> */}
              <p>Album: {albumData[index]?.name || "No Album Available"}</p>
              {artist?.images?.length > 0 && (
                <img
                  src={artist.images[0].url}
                  alt={artist.name}
                  style={{
                    width: "150px",
                    height: "150px",
                    borderRadius: "10px",
                  }}
                />
              )}
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>

      <div className="middle-box flexbox">
        <h2>Album Tracks List</h2>
        {tracksData.length > 0 ? (
          tracksData.map((albumTracks, index) => (
            <div key={index} className="track-list">
              <h3 className="album_name">
                {albumData[index]?.name || "Unknown Album"}
              </h3>
              {albumTracks.length > 0 ? (
                albumTracks.map((track, idx) => (
                  <div key={idx} className="track">
                    <p>🎵 {track.name || "No Track Name"}</p>
                  </div>
                ))
              ) : (
                <p>No tracks available</p>
              )}
            </div>
          ))
        ) : (
          <p>Loading tracks...</p>
        )}
      </div>

      {/* <div className="right-box flexbox">asdf</div> */}
    </div>
  );
};

export default Music;

// use this for ol

// {selectedTracks ? (
//   tracksData.map((albumTracks, index) => (
//     <div key={index} className="track-list">
//       <h3 className="album_name">
//         {albumData[index]?.name || "Unknown Album"}
//       </h3>
//       {albumTracks.length > 0 ? (
//         albumTracks.map((track, idx) => (
//           <li key={idx}>{track.name || "No Track Name"}</li>
//         ))
//       ) : (
//         <p>No tracks available</p>
//       )}
//     </div>
//   ))
// ) : (
//   <p>Loading tracks...</p>
// )}{" "}
