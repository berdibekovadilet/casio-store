import styles from "./Modal.module.scss";

type ModalProps = {
  children?: React.ReactNode;
  active: boolean;
  setActive: any;
};

export const Modal = ({ active, setActive, children }: ModalProps) => {
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
