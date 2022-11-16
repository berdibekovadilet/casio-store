import styles from "./Sort.module.scss";

export const Sort = () => {
  return (
    <div className={styles.container}>
      <div className={styles.label}>
        <b>Sort by:</b>
        <span>Rating</span>
      </div>
      <div className={styles.popup}>
        <ul>
          <li className={styles.active}>Rating</li>
          <li>Price-low to high</li>
          <li>Price-high to low</li>
          <li>Alphabet</li>
        </ul>
      </div>
    </div>
  );
};
