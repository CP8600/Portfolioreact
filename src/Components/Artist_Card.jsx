// Components/Spotify/Artist_Card.jsx
import styles from "../CSS/Music.module.css";

const ArtistCard = ({ artist, album, index, onClick, isSelected }) => {
  return (
    <div
      className={`${styles.artists} ${isSelected ? styles.selected : ""}`}
      onClick={() => onClick(index)}
    >
      <ul className={styles.artist_ul}>
        <li>{artist?.name || "No Artist Name"}</li>
        <li className={styles.albumName}>
          {album?.name || "No Album Available"}
        </li>
      </ul>

      {artist?.images?.[0]?.url && (
        <img
          className={styles.albumImage}
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
  );
};

export default ArtistCard;
