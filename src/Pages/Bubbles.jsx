import styles from "../CSS/Bubbles.module.css"; // imports CSS styles
import useBubbles from "../hooks/useBubbles";

const ShowBubbles = () => {
  const { bubbles, startBubbles, endBubbles } = useBubbles();

  return (
    <div className={styles.bubbleContainer}>
      <button
        className={styles.bubbleBtn}
        type="button"
        onMouseDown={startBubbles}
        onMouseUp={endBubbles}
      >
        Press to Create Bubble
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
