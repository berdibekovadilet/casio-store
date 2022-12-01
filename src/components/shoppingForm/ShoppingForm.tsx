import { Button } from "components/common/button/Button";
import { Input } from "components/common/input/Input";
import styles from "./ShoppingForm.module.scss";

export const ShoppingForm = () => {
  return (
    <>
      <form className={styles.wrapper}>
        <h4>1. Контактные данные</h4>
        <div className={styles.formWrapper}>
          <div className={styles.inputWrapper}>
            <p>Имя *</p>
            <Input />
          </div>
          <div className={styles.inputWrapper}>
            <p>Телефон *</p>
            <Input />
          </div>
          <div className={styles.inputWrapper}>
            <p>Почта</p>
            <Input />
          </div>
        </div>
        <h4>2. Доставка</h4>
        <div className={styles.formWrapper}>
          <div className={styles.inputWrapper}>
            <p>Город *</p>
            <Input />
          </div>
          <div className={styles.inputWrapper}>
            <p>Улица, дом, квартира *</p>
            <Input />
          </div>
          <div className={styles.inputWrapper}>
            <p>Комментарий</p>
            <Input />
          </div>
        </div>
        <h4>3. Оплата</h4>
        <div className={styles.checkboxFormWrapper}>
          <div className={styles.checkboxWrapper}>
            <input type="checkbox" />
            <p>Наличными курьеру</p>
          </div>
          <div className={styles.checkboxWrapper}>
            <input type="checkbox" />
            <p>Переводом через МБанк</p>
          </div>
          <div className={styles.checkboxWrapper}>
            <input type="checkbox" />
            <p>Другое</p>
          </div>
        </div>
        <Button appearance="secondary">Оформить заказ</Button>
      </form>
    </>
  );
};
