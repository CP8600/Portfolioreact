import styles from "../CSS/Chess.module.css";
import ChessPiece from "./ChessPiece";

const ChessBoard = () => {
  const rows = 8;
  const cols = 8;

  const generateSquares = () => {
    const squares = [];

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        const isWhite = (i + j) % 2 === 0;
        const label = `${String.fromCharCode(65 + j)}${8 - i}`; // A8 to H1
        console.log(cols, label);
        squares.push(
          <div
            key={`${i}-${j}`}
            className={`${isWhite ? styles.whiteSquare : styles.blackSquare} ${
              styles.square
            }`}
          >
            <span className={styles.label}>{label}</span>
            <ChessPiece />
          </div>
        );
      }
    }

    return squares;
  };

  return <div className={styles.board}>{generateSquares()}</div>;
};

export default ChessBoard;
