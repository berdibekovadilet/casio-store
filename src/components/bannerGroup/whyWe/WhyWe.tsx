import styles from "./WhyWe.module.scss";
import { data } from "./data";

const WhyWe = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h2 className={styles.sectionTitle}>WHY WE</h2>
        <div className={styles.row}>
          {data.map((item) => (
            <div className={styles.column} key={item.id}>
              <h2 className={styles.number}>{item.id}</h2>
              <div className={styles.info}>
                <h3 className={styles.title}>{item.title}</h3>
                <p className={styles.desc}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyWe;
