// Pages/MusicWeb/Music.jsx
import styles from "../CSS/Music.module.css";
import useMusicData from "../hooks/useMusicData";
import AlbumSelector from "../Components/AlbumSelector";
import TrackList from "../Components/TrackLists";

const Music = () => {
  const { artistData, albumData, tracksData, selectedAlbum, setSelectedAlbum } =
    useMusicData();

  // Find the index of the selected album in albumData
  const selectedAlbumIndex = albumData.findIndex(
    (album) => album?.id === selectedAlbum?.id
  );

  return (
    <div className={styles.info_container}>
      <AlbumSelector
        artists={artistData}
        albums={albumData}
        onSelect={setSelectedAlbum}
        selectedAlbum={selectedAlbum} // Pass the whole album object
      />

      <div className={styles.middle_box}>
        <h2>Album Tracks List</h2>
        {selectedAlbum && tracksData[selectedAlbumIndex] ? (
          <TrackList
            tracks={tracksData[selectedAlbumIndex]}
            albumName={selectedAlbum?.name}
          />
        ) : (
          <p>Select an album to view its tracks</p>
        )}
      </div>
    </div>
  );
};

export default Music;
