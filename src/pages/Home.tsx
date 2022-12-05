import React, { Suspense } from "react";
import {
  About,
  BannerGroup,
  BlogSection,
  CardSkeleton,
  Newsletter,
  WhyWe,
} from "components";
import {
  bigBannersData1,
  bigBannersData2,
  smallBannersData1,
  smallBannersData2,
} from "components/bannerGroup/data";

const Popular = React.lazy(() =>
  import(
    /* webpackChunkName: "Popular" */ "../components/popular/Popular"
  ).then((m) => ({ default: m.Popular }))
);
const Trend = React.lazy(() =>
  import(/* webpackChunkName: "Trend" */ "../components/trend/Trend").then(
    (m) => ({ default: m.Trend })
  )
);

export const Home: React.FC = () => {
  return (
    <>
      <BannerGroup banners={bigBannersData1} smBanners={smallBannersData1} />
      <Suspense fallback={<CardSkeleton />}>
        <Popular />
      </Suspense>
      <WhyWe />
      <BannerGroup banners={bigBannersData2} smBanners={smallBannersData2} />
      <Suspense fallback={<CardSkeleton />}>
        <Trend />
      </Suspense>
      <About />
      <BlogSection />
      <Newsletter />
    </>
  );
};
