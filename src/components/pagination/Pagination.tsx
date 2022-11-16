import styles from "./Pagination.module.scss";
import ArrowLeft from "assets/icons/ArrowLeft.svg";
import ArrowRight from "assets/icons/ArrowRight.svg";

export const Pagination = () => {
  return (
    <div className={styles.container}>
      <img src={ArrowLeft} alt="leftIcon" />
      <h4 className={styles.active}>1</h4>
      <h4>2</h4>
      <h4>3</h4>
      <h4>4</h4>
      <img src={ArrowRight} alt="leftIcon" />
    </div>
  );
};
