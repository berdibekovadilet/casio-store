import { Link } from "react-router-dom";
import styles from "./BottomNavbar.module.scss";
import ShoppingCart from "assets/icons/ShoppingCart.svg";
import { bottomLinks } from "./links";

const BottomNavbar = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.logo}>
        <Link to="/">Casio store</Link>
      </h3>
      <nav className={styles.links}>
        {bottomLinks.map((link) => (
          <Link className={styles.menu_item} to={link.href} key={link.label}>
            {link.label}
          </Link>
        ))}
        <div className={styles.cart_container}>
          <Link to="cart" className={styles.cart_link}>
            <span>0 $</span>
            <div className={styles.separator}></div>
            <img
              src={ShoppingCart}
              className={styles.icon}
              alt="shopCartIcon"
            />
            <span>0</span>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default BottomNavbar;
