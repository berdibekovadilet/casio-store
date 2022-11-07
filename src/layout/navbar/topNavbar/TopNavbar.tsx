import { links } from "./links";
import styles from "./TopNavbar.module.scss";

const TopNavbar = () => {
  return (
    <div className={styles.container}>
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

export default TopNavbar;
