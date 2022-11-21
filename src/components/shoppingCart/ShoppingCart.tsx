import styles from "./ShoppingCart.module.scss";
import CloseIcon from "assets/icons/Close.svg";

export const ShoppingCart = () => {
  return (
    <div className={styles.cartWrapper}>
      <div className={styles.productRow}>
        <div className={styles.imgWrapper}>
          <img
            src={require("assets/products/gshock/gwg2040fr1a/GWG-2040FR-1A.webp")}
            alt="productImage"
          />
        </div>
        <div className={styles.column}>
          <h4>Quantity</h4>
          <div className={styles.quantityWrapper}>
            <h2>-</h2>
            <p>1</p>
            <h2>+</h2>
          </div>
        </div>
        <div className={styles.column}>
          <h4>Total</h4>
          <h3>210 $</h3>
        </div>
        <img src={CloseIcon} alt="closeIcon" />
      </div>
      <div className={styles.productRow}>
        <div className={styles.imgWrapper}>
          <img
            src={require("assets/products/gshock/gwg2040fr1a/GWG-2040FR-1A.webp")}
            alt="productImage"
          />
        </div>
        <div className={styles.column}>
          <h4>Quantity</h4>
          <div className={styles.quantityWrapper}>
            <h2>-</h2>
            <p>1</p>
            <h2>+</h2>
          </div>
        </div>
        <div className={styles.column}>
          <h4>Total</h4>
          <h3>210 $</h3>
        </div>
        <img src={CloseIcon} alt="closeIcon" />
      </div>
      <hr />
      <div className={styles.totalWrapper}>
        <div></div>
        <h4>Total:</h4>
        <h4>760 $</h4>
        <div></div>
      </div>
    </div>
  );
};
