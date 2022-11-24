import { Button } from "components/common/button/Button";
import { Input } from "components/common/input/Input";
import { Modal } from "components/common/modal/Modal";
import { useState } from "react";
import styles from "./Newsletter.module.scss";

export const Newsletter = () => {
  const [modalActive, setModalActive] = useState(false);
  const handler = () => {
    setModalActive(true);
  };
  return (
    <>
      <div className={styles.container}>
        <h3>Receive notices of discounts and new arrivals</h3>
        <div className={styles.wrapper}>
          <Input />
          <Button appearance="secondary" onClick={handler}>
            Sumbit
          </Button>
        </div>
        <p>
          By clicking "Submit" you agree to the personal data processing policy.
        </p>
      </div>
      <Modal active={modalActive} setActive={setModalActive}>
        <h2>Thank you for signing up!</h2>
        <h4>
          Your newsletter will be delivered shortly to the email address
          provided.
        </h4>
        <Button appearance="secondary" onClick={() => setModalActive(false)}>
          Back to page
        </Button>
      </Modal>
    </>
  );
};
