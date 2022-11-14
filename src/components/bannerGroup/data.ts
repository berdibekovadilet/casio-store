export type IBanner = {
  id: number;
  title: string;
  href: string;
  img: string;
};

export const bigBannersData1: IBanner[] = [
  {
    id: 1,
    title: "G-SHOCK MSG-W200RL",
    href: "/",
    img: require("assets/banners/msg-w200.webp"),
  },
  {
    id: 2,
    title: "G-SHOCK GWG-2040FR",
    href: "/",
    img: require("assets/banners/gwg-2040fr.webp"),
  },
  {
    id: 3,
    title: "Edifice EQW-A2000HR",
    href: "/",
    img: require("assets/banners/eqw-a2000hr.webp"),
  },
];

export const bigBannersData2: IBanner[] = [
  {
    id: 1,
    title: "Edifice EQS-940",
    href: "/",
    img: require("assets/banners/eqs-940.webp"),
  },
  {
    id: 2,
    title: "Baby-G MSG-W350",
    href: "/",
    img: require("assets/banners/msg-w350.webp"),
  },
  {
    id: 3,
    title: "Baby-G BGA-310",
    href: "/",
    img: require("assets/banners/bga-310.webp"),
  },
];

export const smallBannersData1: IBanner[] = [
  {
    id: 1,
    title: "G-SHOCK GM-b2100",
    href: "/",
    img: require("assets/banners/gmb2100.webp"),
  },
  {
    id: 2,
    title: "BABY-G GMA-S2100",
    href: "/",
    img: require("assets/banners/gma-s2100ba.webp"),
  },
];

export const smallBannersData2: IBanner[] = [
  {
    id: 1,
    title: "Baby-g BGA-310",
    href: "/",
    img: require("assets/banners/bga-311.webp"),
  },
  {
    id: 2,
    title: "Pro Trek PRG-340",
    href: "/",
    img: require("assets/banners/PRG340.jpg"),
  },
];
