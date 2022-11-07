import BottomNavbar from "./bottomNavbar/BottomNavbar";
import TopNavbar from "./topNavbar/TopNavbar";
import MobileMenu from "./mobileMenu/MobileMenu";

import styles from "./Navbar.module.scss";
const Navbar = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.desktop_nav}>
        <TopNavbar /> <BottomNavbar />
      </div>
      <div className={styles.mobile_nav}>
        <MobileMenu />
      </div>
    </div>
  );
};

export default Navbar;
