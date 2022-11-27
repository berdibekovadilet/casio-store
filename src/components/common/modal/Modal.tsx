import styles from "./Modal.module.scss";

type ModalProps = {
  children?: React.ReactNode;
  active: boolean;
  setActive: (active: boolean) => void;
};

export const Modal: React.FC<ModalProps> = ({
  active,
  setActive,
  children,
}) => {
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
