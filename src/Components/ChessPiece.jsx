import styles from "../CSS/Chess.module.css";

const ChessPiece = () => {
  // ChessPiece component logic goes here
  const pieces = [{ King: "K" }, { Queen: "Q" }]; // Example piece

  return <div className={styles.chessPiece}></div>;
};

export default ChessPiece;
