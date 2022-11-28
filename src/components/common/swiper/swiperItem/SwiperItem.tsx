import React from "react";
import { SwiperItemType } from "../types";
import styles from "./SwiperItem.module.scss";

const SwiperItem: React.FC<SwiperItemType> = ({ imageSrc, imageAlt }) => {
  return (
    <li className={styles.swiperItem}>
      <img
        src={imageSrc}
        alt={imageAlt}
        className={styles.swiperImg}
        draggable={false}
      />
    </li>
  );
};

export default SwiperItem;
