import styles from "./BottomNavbar.module.scss";
import { links } from "./links";

const BottomNavbar = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.logo}>Casio store</h3>
      <nav className={styles.links}>
        {links.map((link) => (
          <a className={styles.menu_item} href={link.href} key={link.label}>
            {link.label}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default BottomNavbar;
