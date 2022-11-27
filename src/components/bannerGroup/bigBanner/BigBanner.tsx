import { useState } from "react";
import { BannerBig } from "../types";
import styles from "./BigBanner.module.scss";

const BigBanner: React.FC<BannerBig> = ({ banners }) => {
  const [slideIndex, setSlideIndex] = useState(1);

  const moveDot = (index: number) => {
    setSlideIndex(index);
  };

  return (
    <div className={styles.container}>
      {banners.map((item, index: number) => (
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
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={index}
            onClick={() => moveDot(index + 1)}
            className={slideIndex === index + 1 ? styles.dotActive : styles.dot}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default BigBanner;
