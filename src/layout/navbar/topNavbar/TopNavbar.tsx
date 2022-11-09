import { Link } from "react-router-dom";
import { links } from "./links";
import styles from "./TopNavbar.module.scss";

const TopNavbar = () => {
  return (
    <div className={styles.container}>
      <nav className={styles.links}>
        {links.map((link) => (
          <Link className={styles.menu_item} to={link.href} key={link.label}>
            {link.label}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default TopNavbar;
