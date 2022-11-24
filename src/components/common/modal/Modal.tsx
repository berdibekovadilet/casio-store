import { Button } from "../button/Button";
import styles from "./Modal.module.scss";

export const Modal = ({ active, setActive, children }: any) => {
  return (
    <div
      className={
        active ? `${styles.container} ${styles.active}` : styles.container
      }
      onClick={() => setActive(false)}
    >
      <div
        className={
          active ? `${styles.wrapper} ${styles.active}` : styles.wrapper
        }
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};
