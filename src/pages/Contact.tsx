import { Newsletter } from "components";
import styles from "../styles/pages/Contact.module.scss";

export const Contact: React.FC = () => {
  return (
    <div className={styles.container}>
      <h2>Контакты</h2>
      <div className={styles.wrapper}>
        <div className={styles.column}>
          <h3>Заказ или консультация в интернет-магазине</h3>
          <h4>
            <a
              href="mailto:question@casiostore.com"
              target="_blank"
              rel="noreferrer"
            >
              question@casiostore.com
            </a>
          </h4>
          <h4>
            <a href="tel:996551377373" target="_blank" rel="noreferrer">
              +996 (551) 37-73-73
            </a>
            <h4>График работы: с 10.00 до 22.00.</h4>
          </h4>
        </div>
        <div className={styles.column}>
          <h3>Отдел доставки</h3>
          <h4>
            <a
              href="mailto:delivery@casiostore.com"
              target="_blank"
              rel="noreferrer"
            >
              delivery@casiostore.com
            </a>
          </h4>
          <h4>
            <a href="tel:996551387373" target="_blank" rel="noreferrer">
              +996 (551) 38-73-73
            </a>
          </h4>
        </div>
        <div className={styles.column}>
          <h3>Рекламный отдел</h3>
          <h4>
            <a href="mailto:pr@casiostore.com" target="_blank" rel="noreferrer">
              pr@casiostore.com
            </a>
          </h4>
        </div>
        <div className={styles.column}>
          <h3>Жалобы и предложения</h3>
          <h4>
            <a
              href="mailto:offers@casiostore.com"
              target="_blank"
              rel="noreferrer"
            >
              offers@casiostore.com
            </a>
          </h4>
        </div>
        <div className={styles.column}>
          <h3>Коммерческие предложения</h3>
          <h4>
            <a href="mailto:pr@casiostore.com" target="_blank" rel="noreferrer">
              pr@casiostore.com
            </a>
          </h4>
          <p>
            Внимание! Коммерческие предложения принимаются к рассмотрению только
            в письменной форме.
          </p>
        </div>
      </div>
      <Newsletter />
    </div>
  );
};
