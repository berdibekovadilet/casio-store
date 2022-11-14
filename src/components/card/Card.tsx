import styles from "./Card.module.scss";
import productImage from "assets/products/gshock/gae2100we3a/GAE-2100WE-3A.webp";
import { Button } from "components/common/button/Button";

export const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgWrapper}>
        <img src={productImage} alt="product" />
      </div>
      <div className={styles.infoWrapper}>
        <h4 className={styles.title}>G-SHOCK GAE2100WE-3A</h4>
        <div className={styles.priceWrapper}>
          <h3 className={styles.price}>210 $</h3>
          <p className={styles.oldPrice}>260 $</p>
        </div>
        <Button appearance="primary">Add to cart</Button>
      </div>
    </div>
  );
};
