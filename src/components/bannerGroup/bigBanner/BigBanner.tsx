import Banner from "assets/banners/msg-w200.webp";
import styles from "./BigBanner.module.scss";

const BigBanner = () => {
  return (
    <div className={styles.container}>
      <h3>BABY-G MSG-W200RL</h3>
      <img src={Banner} alt="banner" />
    </div>
  );
};

export default BigBanner;
