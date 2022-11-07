import styles from "./MobileMenu.module.scss";
import ShoppingCart from "assets/icons/ShoppingCart.svg";
import BurgerMenu from "assets/icons/BurgerMenu.svg";

const MobileMenu = () => {
  return (
    <div className={styles.container}>
      <div className={styles.nav_left}>
        <div className={styles.menu_icon}>
          <img src={BurgerMenu} className={styles.icon} alt="burgerMenuIcon" />
        </div>
        <h3 className={styles.logo}>Casio store</h3>
      </div>
      <div className={styles.nav_right}>
        <a href="#/" className={styles.cart_link}>
          <span>0 $</span>
          <div className={styles.separator}></div>
          <img src={ShoppingCart} className={styles.icon} alt="shopCartIcon" />
          <span>0</span>
        </a>
      </div>
    </div>
  );
};

export default MobileMenu;
