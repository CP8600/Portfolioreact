import styles from "../CSS/somepage.module.css";

const SomeLinks = ({ link, text, className }) => {
  return (
    <a href={link} className={`${styles.someLinkComponent} ${className || ""}`}>
      {text}
    </a>
  );
};

export default SomeLinks;
