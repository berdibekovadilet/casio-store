import styles from "./BottomNavbar.module.scss";
import { bottomLinks } from "./links";
import ShoppingCart from "assets/icons/ShoppingCart.svg";

const BottomNavbar = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.logo}>Casio store</h3>
      <nav className={styles.links}>
        {bottomLinks.map((link) => (
          <a className={styles.menu_item} href={link.href} key={link.label}>
            {link.label}
          </a>
        ))}
        <div className={styles.cart_container}>
          <a href="#/" className={styles.cart_link}>
            <span>0 $</span>
            <div className={styles.separator}></div>
            <img
              src={ShoppingCart}
              className={styles.icon}
              alt="shopCartIcon"
            />
            <span>0</span>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default BottomNavbar;
