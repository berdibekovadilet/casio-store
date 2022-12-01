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
        <h3>ПОДПИШИТЕСЬ НА НАШУ РАССЫЛКУ</h3>
        <div className={styles.wrapper}>
          <Input />
          <Button appearance="secondary" onClick={handler}>
            Подписаться
          </Button>
        </div>
        <p>
          Нажимая «Подписаться» вы соглашаетесь с политикой обработки
          персональных данных.
        </p>
      </div>
      <Modal active={modalActive} setActive={setModalActive}>
        <h2>Спасибо за подписку!</h2>
        <h4>
          Рассылка с акциями будет отправлена вам в ближайшее время на эл.
          почту.
        </h4>
        <Button appearance="secondary" onClick={() => setModalActive(false)}>
          Вернуться назад
        </Button>
      </Modal>
    </>
  );
};
