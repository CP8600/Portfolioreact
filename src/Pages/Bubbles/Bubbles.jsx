import React, { useEffect, useRef, useState } from "react";
import "../Bubbles/Bubbles.css";
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
      size: Math.floor(Math.random() * 50) + 10,
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

  // const handleBubbleCreator = () => {
  //   console.log("btn");
  //   createBubble();
  // };

  return (
    <div className="bubble-container">
      <button
        className="bubble-btn"
        onMouseDown={startBubbles}
        onMouseUp={endBubbles}
      >
        Create Bubbles
      </button>
      {bubbles?.map((bubble) => (
        <div
          className="bubble"
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
