// components/TrackList.jsx
import styles from "../CSS/Music.module.css"; // Adjust the path as necessary

const TrackList = ({ tracks, albumName }) => {
  if (!tracks || tracks.length === 0) {
    return <p>No tracks available</p>;
  }

  return (
    <div className={styles.track_list}>
      <h3 className={styles.album_name}>{albumName || "Unknown Album"}</h3>
      <ol className={styles.track_ol} type="1">
        {tracks.map((track, index) => (
          <li className={styles.tracksLi} key={index}>
            {track.name || "No Track Name"}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default TrackList;
