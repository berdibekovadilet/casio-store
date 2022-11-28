import { BannerDetail } from "components/bannerGroup/types";
import React from "react";
import styles from "./SwiperBannerItem.module.scss";

const SwiperBannerItem: React.FC<BannerDetail> = ({ href, title, img }) => {
  return (
    <li className={styles.swiperItem}>
      <h3>
        <a href={href}>{title} </a>
      </h3>
      <img
        src={img}
        alt="banner"
        className={styles.swiperImg}
        draggable={false}
      />
    </li>
  );
};

export default SwiperBannerItem;
