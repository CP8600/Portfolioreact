import styles from "../Bubbles/Bubbles.module.css";
import UseBubbles from "../../hooks/Bubbles/UseBubbles";

const ShowBubbles = () => {
  const { bubbles, startBubbles, endBubbles } = UseBubbles();

  return (
    <div className={styles.bubbleContainer}>
      <button
        className={styles.bubbleBtn}
        type="button"
        onMouseDown={startBubbles}
        onMouseUp={endBubbles}
      >
        {/* <span className={styles.spanBtn}>Create Bubbles</span> */}
        Create Bubbles
      </button>
      {bubbles?.map((bubble) => (
        <div
          className={styles.bubble}
          key={bubble.id}
          style={{
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            left: `${bubble.left}%`,
            backgroundColor: `${bubble.backgroundColor}`,
          }}
        ></div>
      ))}
    </div>
  );
};

export default ShowBubbles;
