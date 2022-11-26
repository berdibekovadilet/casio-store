import { useCallback } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setbrandId } from "store/filter/slice";
import styles from "./Brands.module.scss";
import { brands } from "./data";

const Brands = () => {
  const dispatch = useDispatch();

  const onChangeCategory = useCallback(
    (idx: number) => {
      dispatch(setbrandId(idx));
    },
    [dispatch]
  );

  return (
    <>
      {brands.map((link, index) => (
        <Link
          className={styles.menu_item}
          to={link.href}
          key={link.label}
          onClick={() => onChangeCategory(index)}
        >
          {link.label}
        </Link>
      ))}
    </>
  );
};

export default Brands;
