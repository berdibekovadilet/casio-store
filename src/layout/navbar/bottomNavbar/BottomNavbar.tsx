import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "store/store";
import Brands from "components/brands/Brands";
import ShoppingCart from "assets/icons/ShoppingCart.svg";
import styles from "./BottomNavbar.module.scss";

const BottomNavbar = () => {
  const { items, totalPrice } = useSelector((state: RootState) => state.cart);
  const totalCount = items.reduce(
    (sum: number, item: any) => sum + item.count,
    0
  );
  const isMounted = useRef(false);

  useEffect(() => {
    if (isMounted.current) {
      const json = JSON.stringify(items);
      localStorage.setItem("cart", json);
    }
    isMounted.current = true;
  }, [items]);

  return (
    <div className={styles.container}>
      <h3 className={styles.logo}>
        <Link to="/">Casio store</Link>
      </h3>
      <nav className={styles.links}>
        <Brands />
        <div className={styles.cart_container}>
          <Link to="cart" className={styles.cart_link}>
            <span>{totalPrice} сом</span>
            <div className={styles.separator}></div>
            <img
              src={ShoppingCart}
              className={styles.icon}
              alt="shopCartIcon"
            />
            <span>{totalCount}</span>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default BottomNavbar;
