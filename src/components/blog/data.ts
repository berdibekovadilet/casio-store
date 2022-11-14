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
    title: "SNOW WHITE FEMININITY",
    img: require("assets/blog/msg-w350-7a.webp"),
    link: "/1",
  },
  {
    id: 2,
    postData: "10.15.2022",
    title: "Car miracle with Bluetooth",
    img: require("assets/blog/ecb-30.webp"),
    link: "/2",
  },
  {
    id: 3,
    postData: "08.31.2022",
    title: "G-Shock's 40th Anniversary",
    img: require("assets/blog/gwg-2040fr.webp"),
    link: "/3",
  },
];
