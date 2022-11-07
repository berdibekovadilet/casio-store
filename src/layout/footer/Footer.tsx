import styles from "./Footer.module.scss";
import { links } from "./links";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.column}>
          {links.map((arr) => (
            <div>
              {arr.map((item) => (
                <>
                  <h5>{item.title}</h5>
                  <a href={item.href}>
                    <p>{item.label}</p>
                  </a>
                </>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
