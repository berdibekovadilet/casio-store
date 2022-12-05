import React, { Suspense } from "react";
import styles from "./BannerGroup.module.scss";
import { BannerGroupType } from "./types";

const SwipeBanner = React.lazy(
  () =>
    import(/* webpackChunkName: "SwiperBanner" */ "./swipeBanner/SwipeBanner")
);
const SmallBanner = React.lazy(
  () =>
    import(/* webpackChunkName: "SmallBanner" */ "./smallBanner/SmallBanner")
);

export const BannerGroup: React.FC<BannerGroupType> = ({
  banners,
  smBanners,
}) => {
  return (
    <div className={styles.container}>
      <Suspense fallback={<div>Загрузка...</div>}>
        <SwipeBanner banners={banners} />
        <SmallBanner smBanners={smBanners} />
      </Suspense>
    </div>
  );
};
