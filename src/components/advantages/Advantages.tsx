import styles from "./Advantages.module.scss";

const specs = [
  {
    id: 1,
    img: require("assets/specs/shock_resistant.webp"),
    title: "Ударопрочный",
  },
  {
    id: 2,
    img: require("assets/specs/20bar.webp"),
    title: "Водонепроницаемость 200м",
  },
  {
    id: 3,
    img: require("assets/specs/dark.webp"),
    title: "Легко разглядеть в темноте",
  },
  {
    id: 4,
    img: require("assets/specs/changingBand.avif"),
    title: "Наслаждайтесь сменой ремешков",
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
