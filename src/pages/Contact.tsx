import { Newsletter } from "components";
import styles from "../styles/pages/Contact.module.scss";

export const Contact: React.FC = () => {
  return (
    <div className={styles.container}>
      <h2>Contact Us</h2>
      <div className={styles.wrapper}>
        <div className={styles.column}>
          <h3>Order or consult</h3>
          <h4>
            <a
              href="https://wa.me/79309306674"
              target="_blank"
              rel="noreferrer"
            >
              question@casiostore.com
            </a>
          </h4>
          <h4>
            <a
              href="https://wa.me/79309306674"
              target="_blank"
              rel="noreferrer"
            >
              7(930) 930-66-74
            </a>
            daily from 10.00 to 21.00.
          </h4>
        </div>
        <div className={styles.column}>
          <h3>Delivery department</h3>
          <h4>
            <a
              href="https://wa.me/79309306674"
              target="_blank"
              rel="noreferrer"
            >
              delivery@casiostore.com
            </a>
          </h4>
        </div>
        <div className={styles.column}>
          <h3>Publicity Department</h3>
          <h4>
            <a
              href="https://wa.me/79309306674"
              target="_blank"
              rel="noreferrer"
            >
              pr@casiostore.com
            </a>
          </h4>
        </div>
        <div className={styles.column}>
          <h3>Complaints and suggestions</h3>
          <h4>
            <a
              href="https://wa.me/79309306674"
              target="_blank"
              rel="noreferrer"
            >
              offers@casiostore.com
            </a>
          </h4>
        </div>
        <div className={styles.column}>
          <h3>Send commercial offers under the name of Adilet B.</h3>
          <h4>
            <a
              href="https://wa.me/79309306674"
              target="_blank"
              rel="noreferrer"
            >
              pr@casiostore.com
            </a>
          </h4>
          <p>
            Commercial proposals are accepted only in written form, sent to the
            above postal address.
          </p>
        </div>
      </div>
      <Newsletter />
    </div>
  );
};
