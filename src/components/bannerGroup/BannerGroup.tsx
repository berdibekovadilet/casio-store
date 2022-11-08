import BigBanner from "./bigBanner/BigBanner";
import SmallBanner from "./smallBanner/SmallBanner";
import styles from "./BannerGroup.module.scss";

export const BannerGroup = () => {
  return (
    <div className={styles.container}>
      <BigBanner />
      <SmallBanner />
    </div>
  );
};
