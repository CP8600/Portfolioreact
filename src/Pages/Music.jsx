// Pages/MusicWeb/Music.jsx
import styles from "../CSS/Music.module.css";
import { useState, useEffect } from "react";
import getArtistData from "../Api/ArtistsInfo";
import getTracksData from "../Api/TracksInfo";
import GetAlbumInfo from "../Api/AlbumInfo";

import AlbumSelector from "../Components/AlbumSelector";
import TrackList from "../Components/TrackLists";

const Music = () => {
  const [artistData, setArtistData] = useState([]);
  const [tracksData, setTracksData] = useState([]);
  const [albumData, setAlbumData] = useState([]);
  const [selectedAlbum, setSelectedAlbum] = useState(null);

  useEffect(() => {
    const artists = [
      { id: "2CIMQHirSU0MQqyYHq0eOx" }, // Deadmau5
      { id: "57dN52uHvrHOxijzpIgu3E" }, // Ratatat
      { id: "0du5cEVh5yTK9QJze8zA0C" }, // Bruno Mars
      { id: "6IKlXZEFOvk9itrP1s0knJ" }, // The Red Clay Strays
      { id: "4oUHIQIBe0LHzYfvXNW4QM" }, // Morgan Wallen
    ];

    const fetchData = async () => {
      try {
        const artistInfo = await Promise.all(
          artists.map(({ id }) => getArtistData(id))
        );
        setArtistData(artistInfo);

        const albumInfo = await Promise.all(
          artistInfo.map((artist) =>
            artist?.id ? GetAlbumInfo(artist.id) : Promise.resolve(null)
          )
        );
        const firstAlbums = albumInfo.map((albums) =>
          albums?.length ? albums[0] : null
        );
        setAlbumData(firstAlbums);
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
        } catch (error) {
          console.error("Error fetching tracks:", error);
        }
      };

      fetchTracks();
    }
  }, [albumData]);

  return (
    <div className={styles.info_container}>
      <AlbumSelector
        artists={artistData}
        albums={albumData}
        onSelect={setSelectedAlbum}
        selectedIndex={selectedAlbum}
      />

      <div className={styles.middle_box}>
        <h2>Album Tracks List</h2>
        {selectedAlbum !== null && tracksData[selectedAlbum] ? (
          <TrackList
            tracks={tracksData[selectedAlbum]}
            albumName={albumData[selectedAlbum]?.name}
          />
        ) : (
          <p>Select an artist to view their album tracks</p>
        )}
      </div>
    </div>
  );
};

export default Music;
