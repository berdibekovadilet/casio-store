// import BigBanner from "./bigBanner/BigBanner";
import SmallBanner from "./smallBanner/SmallBanner";
import styles from "./BannerGroup.module.scss";
import { BannerGroupType } from "./types";
import SwipeBanner from "./swipeBanner/SwipeBanner";

export const BannerGroup: React.FC<BannerGroupType> = ({
  banners,
  smBanners,
}) => {
  return (
    <div className={styles.container}>
      <SwipeBanner banners={banners} />
      <SmallBanner smBanners={smBanners} />
    </div>
  );
};
