import styles from "../CSS/PageRouter.module.css";
import { memo } from "react";
const ScrollingInfo = memo(({ color = "", fontSize = "" }) => {
  return (
    <span
      className={styles.scrollText}
      style={{
        color,
        fontSize: typeof fontSize === "number" ? `${fontSize}px` : fontSize,
      }}
    >
      Hire Me!
    </span>
  );
});

export default ScrollingInfo;
