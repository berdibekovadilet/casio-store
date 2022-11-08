import { useState } from "react";
import ShoppingCart from "assets/icons/ShoppingCart.svg";
import BurgerMenu from "assets/icons/BurgerMenu.svg";
import Close from "assets/icons/Close.svg";
import styles from "./MobileMenu.module.scss";

import { links } from "../topNavbar/links";
import { bottomLinks } from "../bottomNavbar/links";

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
              <h3 className={styles.logo}>Casio store</h3>
            </div>
            <div className={styles.nav_right}>
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
          </div>
        </div>
      ) : (
        <div>
          <div className={styles.container_close}>
            <div className={styles.wrapper_close}>
              <nav className={styles.links}>
                {links.map((link) => (
                  <a
                    className={styles.menu_item}
                    href={link.href}
                    key={link.label}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
              <nav className={styles.links}>
                {bottomLinks.map((link) => (
                  <a
                    className={styles.menu_item}
                    href={link.href}
                    key={link.label}
                  >
                    {link.label}
                  </a>
                ))}
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
