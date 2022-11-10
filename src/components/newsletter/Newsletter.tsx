import { Button } from "components/common/button/Button";
import { Input } from "components/common/input/Input";
import styles from "./Newsletter.module.scss";

export const Newsletter = () => {
  const handler = () => {
    console.log("Clicking");
  };
  return (
    <div className={styles.container}>
      <h3>Receive notices of discounts and new arrivals</h3>
      <div className={styles.wrapper}>
        <Input />
        <Button appearance="secondary" onClick={handler}>Sumbit</Button>
      </div>
      <p>
        By clicking "Submit" you agree to the personal data processing policy.
      </p>
    </div>
  );
};
