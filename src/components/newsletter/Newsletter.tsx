import { FocusEvent, FormEvent, useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "components/common/button/Button";
import { Input } from "components/common/input/Input";
import { Modal } from "components/common/modal/Modal";
import styles from "./Newsletter.module.scss";

export const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [emailDirty, setEmailDirty] = useState(false);
  const [emailError, setEmailError] = useState("Поле не должно быть пустым");
  const [formValidation, setFormValidation] = useState(false);
  const [modalActive, setModalActive] = useState(false);
  const inputEl = useRef<HTMLInputElement | null>(null);
  const form = useRef<any>();

  useEffect(() => {
    if (emailError) {
      setFormValidation(false);
    } else {
      setFormValidation(true);
    }
  }, [emailError]);

  const sendEmail = (e: any) => {
    e.preventDefault();
    if (formValidation) {
      emailjs
        .sendForm(
          "service_9ngv2qg",
          "newsletter_dpqgr67",
          form.current,
          "qKbMefsa-wGu4oWCN"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      setModalActive(true);
      e.target.reset();
    } else {
      if (inputEl.current != null) {
        inputEl.current.focus();
      }
    }
  };

  const closeModal = () => {
    setModalActive(false);
    setEmail("");
  };

  const emailHandler = (e: FormEvent<HTMLInputElement>) => {
    setEmail((e.target as HTMLInputElement).value);
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String((e.target as HTMLInputElement).value).toLowerCase())) {
      setEmailError("Неверный адрес эл. почты");
    } else setEmailError("");
  };

  const blurHandler = (e: FocusEvent<HTMLInputElement, Element>) => {
    switch (e.target.name) {
      case "email":
        setEmailDirty(true);
        break;
    }
  };
  return (
    <>
      <div className={styles.container}>
        <h3>ПОДПИШИТЕСЬ НА НАШУ РАССЫЛКУ</h3>
        {emailDirty && emailError && <h4>{emailError}</h4>}
        <form className={styles.wrapper} ref={form} onSubmit={sendEmail}>
          <Input
            onChange={(e) => emailHandler(e)}
            onBlur={(e) => blurHandler(e)}
            name="email"
            value={email}
            ref={inputEl}
          />
          <Button appearance="secondary" type="submit">
            Подписаться
          </Button>
        </form>
        <p>
          Нажимая «Подписаться» вы соглашаетесь с политикой обработки
          персональных данных.
        </p>
      </div>
      <Modal active={modalActive} setActive={setModalActive}>
        <h2>Спасибо за подписку!</h2>
        <h4>
          Рассылка с акциями будет отправлена вам в ближайшее время на эл. почту{" "}
          <b>{email}</b>.
        </h4>
        <Button appearance="secondary" onClick={closeModal}>
          Вернуться назад
        </Button>
      </Modal>
    </>
  );
};
