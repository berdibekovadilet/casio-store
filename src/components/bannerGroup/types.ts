export type BannerDetail = {
  id: number;
  href: string;
  title: string;
  img: string;
};

export type BannerGroupType = {
  smBanners: BannerDetail[];
  banners: BannerDetail[];
};

export type BannerSm = {
  smBanners: BannerDetail[];
};

export type BannerBig = {
  banners: BannerDetail[];
};
