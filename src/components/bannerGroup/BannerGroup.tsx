import BigBanner from "./bigBanner/BigBanner";
import SmallBanner from "./smallBanner/SmallBanner";
import styles from "./BannerGroup.module.scss";
import { BannerGroupType } from "./types";

export const BannerGroup: React.FC<BannerGroupType> = ({
  banners,
  smBanners,
}) => {
  return (
    <div className={styles.container}>
      <BigBanner banners={banners} />
      <SmallBanner smBanners={smBanners} />
    </div>
  );
};
