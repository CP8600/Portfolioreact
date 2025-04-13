import React, { useEffect, useRef, useState } from "react";
import styles from "../Bubbles/Bubbles.module.css";

const ShowBubbles = () => {
  const [bubbles, setBubbles] = useState([]);
  const bubbleRef = useRef(null);
  useEffect(() => {
    const interval = setInterval(() => {
      setBubbles((prevBubbles) => [...prevBubbles]);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  const createBubble = () => {
    const newBubble = {
      id: Math.random(),
      size: Math.floor(Math.random() * 100) + 10,
      left: Math.random() * 100,
      backgroundColor: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
    };

    setBubbles((prevBubbles) => [...prevBubbles, newBubble]);

    setTimeout(() => {
      setBubbles((prevBubbles) =>
        prevBubbles.filter((bubble) => bubble.id !== newBubble.id)
      );
    }, 5000);
  };

  const startBubbles = () => {
    createBubble();
    bubbleRef.current = setInterval(createBubble, 200);
  };

  const endBubbles = () => {
    clearInterval(bubbleRef.current);
  };

  return (
    <div className={styles.bubbleContainer}>
      <button
        className={styles.bubbleBtn}
        type="button"
        onMouseDown={startBubbles}
        onMouseUp={endBubbles}
      >
        <span className={styles.spanBtn}>Create Bubbles</span>
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
