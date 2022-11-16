import { useState } from "react";
import styles from "./Sort.module.scss";

export const Sort = () => {
  const [modal, setModal] = useState(false);
  return (
    <div className={styles.container}>
      <div className={styles.label}>
        <b>Sort by:</b>
        <span onClick={() => setModal(!modal)}>Rating</span>
      </div>
      {modal && (
        <div className={styles.popup}>
          <ul>
            <li className={styles.active}>Rating</li>
            <li>Price-low to high</li>
            <li>Price-high to low</li>
            <li>Alphabet</li>
          </ul>
        </div>
      )}
    </div>
  );
};
