import { BannerGroup, SectionTitle, WhyWe } from "components";
import {
  bigBannersData1,
  bigBannersData2,
  smallBannersData1,
  smallBannersData2,
} from "components/bannerGroup/data";

const Home = () => {
  return (
    <>
      <BannerGroup banners={bigBannersData1} smBanners={smallBannersData1} />
      <SectionTitle title="Popular" />
      <WhyWe />
      <BannerGroup banners={bigBannersData2} smBanners={smallBannersData2} />
      <SectionTitle title="Trend" />
    </>
  );
};

export default Home;
