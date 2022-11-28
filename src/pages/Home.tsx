import {
  About,
  BannerGroup,
  BlogSection,
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
import Swiper from "components/common/swiper/Swiper";

export const Home: React.FC = () => {
  const items = [
    {
      imageSrc:
        "https://images.unsplash.com/photo-1665686310974-2ed1eb7f57ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      imageAlt: "A person's eye",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1661961110218-35af7210f803?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      imageAlt: "A rock formation",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1661961112835-ca6f5811d2af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1772&q=80",
      imageAlt: "Some flowers",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1593642531955-b62e17bdaa9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80",
      imageAlt: "An egyptian wall painting",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1593642532009-6ba71e22f468?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80",
      imageAlt: "A butterfly on a leaf",
    },
  ];
  return (
    <>
      <BannerGroup banners={bigBannersData1} smBanners={smallBannersData1} />
      <Swiper items={items} />
      <Popular />
      <WhyWe />
      <BannerGroup banners={bigBannersData2} smBanners={smallBannersData2} />
      <Trend />
      <About />
      <BlogSection />
      <Newsletter />
    </>
  );
};
