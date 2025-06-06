import adobeDrive from "../Assets/adobeDriving.mov";
import styles from "../CSS/somepage.module.css";
const Background_AdobeDrive = () => {
  return (
    <video autoPlay loop muted playsInline className={styles.video}>
      <source src={adobeDrive} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default Background_AdobeDrive;
