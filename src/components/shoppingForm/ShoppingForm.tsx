import { Button } from "components/common/button/Button";
import { Input } from "components/common/input/Input";
import styles from "./ShoppingForm.module.scss";

export const ShoppingForm = () => {
  return (
    <>
      <form className={styles.wrapper}>
        <h4>1. Contact information</h4>
        <div className={styles.formWrapper}>
          <div className={styles.inputWrapper}>
            <p>Name *</p>
            <Input />
          </div>
          <div className={styles.inputWrapper}>
            <p>Phone *</p>
            <Input />
          </div>
          <div className={styles.inputWrapper}>
            <p>Email</p>
            <Input />
          </div>
        </div>
        <h4>2. DELIVERY</h4>
        <div className={styles.formWrapper}>
          <div className={styles.inputWrapper}>
            <p>Your city *</p>
            <Input />
          </div>
          <div className={styles.inputWrapper}>
            <p>Street, house, apartment *</p>
            <Input />
          </div>
          <div className={styles.inputWrapper}>
            <p>Comment</p>
            <Input />
          </div>
        </div>
        <h4>3. Payment</h4>
        <div className={styles.checkboxFormWrapper}>
          <div className={styles.checkboxWrapper}>
            <input type="checkbox" />
            <p>Cash</p>
          </div>
          <div className={styles.checkboxWrapper}>
            <input type="checkbox" />
            <p>By card on the site</p>
          </div>
          <div className={styles.checkboxWrapper}>
            <input type="checkbox" />
            <p>By card upon receipt</p>
          </div>
          <div className={styles.checkboxWrapper}>
            <input type="checkbox" />
            <p>Paypal</p>
          </div>
          <div className={styles.checkboxWrapper}>
            <input type="checkbox" />
            <p>Other</p>
          </div>
        </div>
        <Button appearance="secondary">Proceed to Checkout</Button>
      </form>
    </>
  );
};
