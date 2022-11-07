import styles from "./Footer.module.scss";
import { links } from "./links";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.column}>
          {links.map((arr, index) => (
            <div key={index}>
              {arr.map((item, index) => (
                <div key={index}>
                  <h5>{item.title}</h5>
                  <a href={item.href}>
                    <p>{item.label}</p>
                  </a>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
