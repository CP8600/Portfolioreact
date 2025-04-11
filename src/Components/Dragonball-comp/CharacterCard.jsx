import styles from "../Dragonball-comp/CharacterCard.module.css";
const CharacterCard = ({ character, onTransform }) => {
  const { image, maxKi, affiliation, name, char, isTransformed } = character;

  return (
    <li className={styles.db_li}>
      <img
        src={image} // Always displays the character's current state
        alt={name}
        className={styles.db_image}
      />
      <section className={styles.character_info}>
        <h2 className={styles.dragonball_container_h2}>{name}</h2>
        <span>Max Ki: {maxKi || char?.maxKi}</span>
        <span>{affiliation || char?.affiliation}</span>
        <button
          className={styles.transform_btn}
          onClick={() => onTransform(character)}
        >
          {isTransformed ? "Next Form" : "Transform"}
        </button>
      </section>
    </li>
  );
};

export default CharacterCard;
