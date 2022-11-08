import { useState } from "react";
import styles from "./BigBanner.module.scss";
import { data } from "./data";

const BigBanner = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  const moveDot = (index: number) => {
    setSlideIndex(index);
  };
  return (
    <div className={styles.container}>
      {data.map((item, index) => (
        <div
          key={item.id}
          className={
            slideIndex === index + 1 ? styles.activeSlide : styles.slide
          }
        >
          <a href={item.href}>
            <h3>{item.title}</h3>
            <img src={item.img} alt="banner" />
          </a>
        </div>
      ))}
      <div className={styles.containerDots}>
        {Array.from({ length: 3 }).map((item, index) => (
          <div
            onClick={() => moveDot(index + 1)}
            className={slideIndex === index + 1 ? styles.dotActive : styles.dot}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default BigBanner;
