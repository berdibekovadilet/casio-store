import styles from "./Brands.module.scss";
import { Link } from "react-router-dom";
import { brands } from "./data";

const Brands = () => {
  return (
    <>
      {brands.map((link) => (
        <Link className={styles.menu_item} to={link.href} key={link.label}>
          {link.label}
        </Link>
      ))}
    </>
  );
};

export default Brands;
