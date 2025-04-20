import { useEffect, useState, useRef } from "react";
import GenerateBubble from "../Helpers/BubbleHelper";

const UseBubbles = () => {
  const [bubbles, setBubbles] = useState([]);
  const bubbleRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setBubbles((prevBubbles) => [...prevBubbles]);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  const createBubble = () => {
    const newBubble = GenerateBubble();

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

  return {
    bubbles,
    startBubbles,
    endBubbles,
  };
};
export default UseBubbles;
