import styles from "./Brands.module.scss";
import { Link } from "react-router-dom";
import { brands } from "./data";
import { useState } from "react";

const Brands = () => {
  const [activeIndex, setActiveIndex] = useState<number>();

  const onClickBrand = (index: number) => {
    setActiveIndex(index);
  };
  return (
    <>
      {brands.map((link, index) => (
        <Link
          className={activeIndex === index ? styles.active : styles.menu_item}
          to={link.href}
          key={link.label}
          onClick={() => onClickBrand(index)}
        >
          {link.label}
        </Link>
      ))}
    </>
  );
};

export default Brands;
