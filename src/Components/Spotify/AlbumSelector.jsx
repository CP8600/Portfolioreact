// Components/Spotify/AlbumSelector.jsx
import ArtistCard from "./Artist_Card";
import styles from "../../Pages/MusicWeb/Music.module.css";

const AlbumSelector = ({ artists, albums, onSelect, selectedIndex }) => {
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
            onClick={onSelect}
            isSelected={selectedIndex === index}
          />
        ))
      ) : (
        <p>Loading...</p>
      )}
    </section>
  );
};

export default AlbumSelector;
