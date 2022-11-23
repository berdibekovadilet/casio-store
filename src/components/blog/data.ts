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
    postData: "12.12.2022",
    title: "super mario collaborations",
    img: require("assets/blog/nintendo.webp"),
    link: "1",
  },
  {
    id: 2,
    postData: "10.15.2022",
    title: "sailor moon collaborations",
    img: require("assets/blog/sailorMoon.jpeg"),
    link: "2",
  },
  {
    id: 3,
    postData: "08.31.2022",
    title: "G-Shock's 40th Anniversary",
    img: require("assets/blog/gwg-2040fr.webp"),
    link: "3",
  },
];
