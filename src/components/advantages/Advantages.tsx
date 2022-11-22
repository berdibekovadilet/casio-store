import styles from "./Advantages.module.scss";

const specs = [
  {
    id: 1,
    img: require("assets/specs/shock_resistant.webp"),
    title: "Shock resistant",
  },
  {
    id: 2,
    img: require("assets/specs/20bar.webp"),
    title: "20 bar water resistant",
  },
  {
    id: 3,
    img: require("assets/specs/dark.webp"),
    title: "Easy to see in darkness",
  },
  {
    id: 4,
    img: require("assets/specs/changingBand.avif"),
    title: "Enjoy changing bands",
  },
];

export const Advantages = () => {
  return (
    <div className={styles.container}>
      {specs.map((item) => (
        <div key={item.id} className={styles.wrapper}>
          <img src={item.img} alt="icon" />
          <h4>{item.title}</h4>
        </div>
      ))}
    </div>
  );
};
