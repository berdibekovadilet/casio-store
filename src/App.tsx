import { BannerGroup } from "components";
import Layout from "layout/Layout";
import {
  bigBannersData1,
  bigBannersData2,
  smallBannersData1,
  smallBannersData2,
} from "components/bannerGroup/data";
import WhyWe from "components/bannerGroup/whyWe/WhyWe";

function App() {
  return (
    <div className="container">
      <Layout>
        <BannerGroup banners={bigBannersData1} smaBanners={smallBannersData1} />
        <WhyWe />
        <BannerGroup banners={bigBannersData2} smaBanners={smallBannersData2} />
      </Layout>
    </div>
  );
}

export default App;
