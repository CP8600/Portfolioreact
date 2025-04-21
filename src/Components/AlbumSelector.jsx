// Components/Spotify/AlbumSelector.jsx
import ArtistCard from "./Artist_Card";
import styles from "../CSS/Music.module.css";

const AlbumSelector = ({ artists, albums, onSelect, selectedAlbum }) => {
  return (
    <section className={styles.left_box}>
      <h2>Artists Info:</h2>
      {artists.length > 0 ? (
        artists.map((artist, index) => (
          <ArtistCard
            key={index}
            artist={artist}
            album={albums[index]}
            index={index}
            onClick={() => onSelect(albums[index])} // Pass the full album object
            isSelected={selectedAlbum?.id === albums[index]?.id} // Compare the album ID
          />
        ))
      ) : (
        <p>Loading...</p>
      )}
    </section>
  );
};

export default AlbumSelector;
