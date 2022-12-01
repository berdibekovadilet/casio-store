export interface BlogProps {
  id: number;
  postData: string;
  title: string;
  img: string;
  link: string;
}

export const data: BlogProps[] = [
  {
    id: 1,
    postData: "01.12.2022",
    title: "Коллаборация с Супер Марио",
    img: require("assets/blog/nintendo.webp"),
    link: "1",
  },
  {
    id: 2,
    postData: "17.11.2022",
    title: "Коллаборация с СЕЙЛОР МУН",
    img: require("assets/blog/sailorMoon.jpeg"),
    link: "2",
  },
  {
    id: 3,
    postData: "15.10.2022",
    title: "40-ЛЕТие G-SHOCK",
    img: require("assets/blog/gwg-2040fr.webp"),
    link: "3",
  },
];
