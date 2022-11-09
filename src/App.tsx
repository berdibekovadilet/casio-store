import { BannerGroup, SectionTitle, WhyWe } from "components";
import Layout from "layout/Layout";
import {
  bigBannersData1,
  bigBannersData2,
  smallBannersData1,
  smallBannersData2,
} from "components/bannerGroup/data";

function App() {
  return (
    <div className="container">
      <Layout>
        <BannerGroup banners={bigBannersData1} smBanners={smallBannersData1} />
        <SectionTitle title="Popular" />
        <WhyWe />
        <BannerGroup banners={bigBannersData2} smBanners={smallBannersData2} />
        <SectionTitle title="Trend" />
      </Layout>
    </div>
  );
}

export default App;
