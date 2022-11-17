import { useState } from "react";
import { Link } from "react-router-dom";
import ShoppingCart from "assets/icons/ShoppingCart.svg";
import BurgerMenu from "assets/icons/BurgerMenu.svg";
import Close from "assets/icons/Close.svg";
import styles from "./MobileMenu.module.scss";

import { links } from "../topNavbar/links";
import Brands from "components/brands/Brands";

const MobileMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuToggler = () => setMenuOpen(!menuOpen);
  return (
    <>
      {!menuOpen ? (
        <div>
          <div className={styles.container}>
            <div className={styles.nav_left}>
              <div className={styles.menu_icon} onClick={menuToggler}>
                <img
                  src={BurgerMenu}
                  className={styles.icon}
                  alt="burgerMenuIcon"
                />
              </div>
              <h3 className={styles.logo}>
                <Link to="/">Casio store</Link>
              </h3>
            </div>
            <div className={styles.nav_right}>
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
          </div>
        </div>
      ) : (
        <div>
          <div className={styles.container_close}>
            <div className={styles.wrapper_close}>
              <nav className={styles.links}>
                {links.map((link) => (
                  <Link
                    className={styles.menu_item}
                    to={link.href}
                    key={link.label}
                    onClick={menuToggler}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <nav className={styles.links} onClick={menuToggler}>
                <Brands />
              </nav>
            </div>
            <div className={styles.wrapper_close}>
              <div className={styles.menu_icon} onClick={menuToggler}>
                <img src={Close} className={styles.icon} alt="CloseMenuIcon" />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileMenu;
