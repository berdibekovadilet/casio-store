export type IBanner = {
  id: number;
  title: string;
  href: string;
  img: string;
};

export const bigBannersData1: IBanner[] = [
  {
    id: 1,
    title: "ЭЛЕГАНТНЫЕ G-SHOCK MSG-W200RL",
    href: "shop/32",
    img: require("assets/banners/msg-w200.webp"),
  },
  {
    id: 2,
    title: "ОГНЕННЫЕ G-SHOCK GWG-2040FR",
    href: "shop/17",
    img: require("assets/banners/gwg-2040fr.webp"),
  },
  {
    id: 3,
    title: "ГОНОЧНЫЕ Edifice EQW-A2000HR",
    href: "shop/6",
    img: require("assets/banners/eqw-a2000hr.webp"),
  },
];

export const bigBannersData2: IBanner[] = [
  {
    id: 1,
    title: "Стальные Edifice EQS-940",
    href: "shop/10",
    img: require("assets/banners/eqs-940.webp"),
  },
  {
    id: 2,
    title: "Стильные Baby-G MSG-W350",
    href: "shop/33",
    img: require("assets/banners/msg-w350.webp"),
  },
  {
    id: 3,
    title: "Яркие Baby-G BGA-310",
    href: "shop/31",
    img: require("assets/banners/bga-310.webp"),
  },
];

export const smallBannersData1: IBanner[] = [
  {
    id: 1,
    title: "Стильные G-SHOCK GM-b2100",
    href: "shop/28",
    img: require("assets/banners/gmb2100.webp"),
  },
  {
    id: 2,
    title: "Модные BABY-G GMA-S2100",
    href: "shop/15",
    img: require("assets/banners/gma-s2100ba.webp"),
  },
];

export const smallBannersData2: IBanner[] = [
  {
    id: 1,
    title: "Спортивные Baby-g BGA-310",
    href: "shop/23",
    img: require("assets/banners/bga-311.webp"),
  },
  {
    id: 2,
    title: "Захватывающие Pro Trek PRG-340",
    href: "shop/4",
    img: require("assets/banners/PRG340.jpg"),
  },
];
