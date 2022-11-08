import BigBanner from "./bigBanner/BigBanner";
import SmallBanner from "./smallBanner/SmallBanner";
import styles from "./BannerGroup.module.scss";

export const BannerGroup = ({ banners, smaBanners }: any) => {
  return (
    <div className={styles.container}>
      <BigBanner banners={banners} />
      <SmallBanner smaBanners={smaBanners} />
    </div>
  );
};
