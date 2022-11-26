import BigBanner from "./bigBanner/BigBanner";
import SmallBanner from "./smallBanner/SmallBanner";
import styles from "./BannerGroup.module.scss";
import { BannerGroupType } from "./types";

export const BannerGroup = ({ banners, smBanners }: BannerGroupType) => {
  return (
    <div className={styles.container}>
      <BigBanner banners={banners} />
      <SmallBanner smBanners={smBanners} />
    </div>
  );
};
