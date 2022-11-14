import {
  BannerGroup,
  Newsletter,
  Popular,
  Trend,
  WhyWe,
} from "components";
import {
  bigBannersData1,
  bigBannersData2,
  smallBannersData1,
  smallBannersData2,
} from "components/bannerGroup/data";

export const Home = () => {
  return (
    <>
      <BannerGroup banners={bigBannersData1} smBanners={smallBannersData1} />
      <Popular />
      <WhyWe />
      <BannerGroup banners={bigBannersData2} smBanners={smallBannersData2} />
      <Trend />
      <Newsletter />
    </>
  );
};
