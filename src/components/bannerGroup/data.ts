import bgBanner1 from "assets/banners/msg-w200.webp";
import bgBanner2 from "assets/banners/gwg-2040fr.webp";
import bgBanner3 from "assets/banners/eqw-a2000hr.webp";
import bgBanner4 from "assets/banners/eqs-940.webp";
import bgBanner5 from "assets/banners/msg-w350.webp";
import bgBanner6 from "assets/banners/bga-310.webp";

import smBanner1 from "assets/banners/gmb2100.webp";
import smBanner2 from "assets/banners/gma-s2100ba.webp";
import smBanner3 from "assets/banners/bga-311.webp";
import smBanner4 from "assets/banners/she-4543.webp";

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
    img: bgBanner1,
  },
  {
    id: 2,
    title: "G-SHOCK GWG-2040FR",
    href: "/",
    img: bgBanner2,
  },
  {
    id: 3,
    title: "Edifice EQW-A2000HR",
    href: "/",
    img: bgBanner3,
  },
];

export const bigBannersData2: IBanner[] = [
  {
    id: 1,
    title: "Edifice EQS-940",
    href: "/",
    img: bgBanner4,
  },
  {
    id: 2,
    title: "Baby-G MSG-W350",
    href: "/",
    img: bgBanner5,
  },
  {
    id: 3,
    title: "Baby-G BGA-310",
    href: "/",
    img: bgBanner6,
  },
];

export const smallBannersData1: IBanner[] = [
  {
    id: 1,
    title: "G-SHOCK GM-b2100",
    href: "/",
    img: smBanner1,
  },
  {
    id: 2,
    title: "BABY-G GMA-S2100",
    href: "/",
    img: smBanner2,
  },
];

export const smallBannersData2: IBanner[] = [
  {
    id: 1,
    title: "Baby-g BGA-310",
    href: "/",
    img: smBanner3,
  },
  {
    id: 2,
    title: "Sheen SHE-4543CGL",
    href: "/",
    img: smBanner4,
  },
];
