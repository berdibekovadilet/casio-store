import Banner from "assets/banners/gmb2100.webp";
import Banner2 from "assets/banners/gma-s2100ba.webp";
import styles from "./SmallBanner.module.scss";
const SmallBanner = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <a href="#/">
          <h3>BABY-G MSG-W200RL</h3>
          <img src={Banner} alt="banner" />
        </a>
      </div>
      <div className={styles.wrapper}>
        <a href="#/">
          <h3>BABY-G GMA-S2100</h3>
          <img src={Banner2} alt="banner" />
        </a>
      </div>
    </div>
  );
};

export default SmallBanner;
