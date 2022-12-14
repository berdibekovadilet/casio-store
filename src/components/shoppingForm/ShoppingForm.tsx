import { Formik, Form, FormikHelpers, Field } from "formik";
import emailjs from "@emailjs/browser";
import { Button } from "components/common/button/Button";
import { Input } from "components/common/input/Input";
import styles from "./ShoppingForm.module.scss";
import { Modal } from "components/common/modal/Modal";
import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { selectCart } from "store/cart/selectors";

type Values = {
  name: string;
  phone: string;
  email: string;
  city: string;
  address: string;
  comment: string;
  payment: string;
  productName: string;
};

export const ShoppingForm = () => {
  const { items } = useSelector(selectCart);
  const [modalActive, setModalActive] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const form = useRef<any>();

  return (
    <>
      <Formik
        initialValues={{
          name: "",
          phone: "",
          email: "",
          city: "",
          address: "",
          payment: "cash",
          comment: "",
          productName: "",
        }}
        validate={(values) => {
          const errors: Partial<Values> = {};

          if (!values.email) {
            errors.email = "Поле не должно быть пустым";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Неверный адрес эл. почты";
          }
          if (!values.name) {
            errors.name = "Поле не должно быть пустым";
          }
          if (!values.phone) {
            errors.phone = "Поле не должно быть пустым";
          }
          if (!values.city) {
            errors.city = "Поле не должно быть пустым";
          }
          if (!values.address) {
            errors.address = "Поле не должно быть пустым";
          }

          return errors;
        }}
        onSubmit={(
          values: Values,
          { setSubmitting }: FormikHelpers<Values>
        ) => {
          setName(values.name);
          setPhone(values.phone);
          setModalActive(true);

          emailjs
            .sendForm(
              "service_9ngv2qg",
              "cartorder_ys9j03i",
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
          setSubmitting(false);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <Form className={styles.wrapper} onSubmit={handleSubmit} ref={form}>
            <h4>1. Контактные данные</h4>
            {items.map((item) => (
              <div style={{ display: "none" }} key={item.id}>
                <Input
                  type="text"
                  id="productName"
                  name="productName"
                  value={item.title}
                />
              </div>
            ))}
            <div className={styles.formWrapper}>
              <div className={styles.inputWrapper}>
                <p>Имя</p>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                />
                {errors.name && touched.name && (
                  <p className={styles.error}>{errors.name}</p>
                )}
              </div>
              <div className={styles.inputWrapper}>
                <p>Телефон</p>
                <Input
                  type="number"
                  id="phone"
                  name="phone"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.phone}
                />
                {errors.phone && touched.phone && (
                  <p className={styles.error}>{errors.phone}</p>
                )}
              </div>
              <div className={styles.inputWrapper}>
                <p>Почта</p>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                {errors.email && touched.email && (
                  <p className={styles.error}>{errors.email}</p>
                )}
              </div>
            </div>
            <h4>2. Доставка</h4>
            <div className={styles.formWrapper}>
              <div className={styles.inputWrapper}>
                <p>Город</p>
                <Input
                  type="text"
                  id="city"
                  name="city"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.city}
                />
                {errors.city && touched.city && (
                  <p className={styles.error}>{errors.city}</p>
                )}
              </div>
              <div className={styles.inputWrapper}>
                <p>Улица, дом, квартира</p>
                <Input
                  type="text"
                  id="address"
                  name="address"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.address}
                />
                {errors.address && touched.address && (
                  <p className={styles.error}>{errors.address}</p>
                )}
              </div>
              <div className={styles.inputWrapper}>
                <p>Комментарий</p>
                <Input
                  type="text"
                  id="comment"
                  name="comment"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.comment}
                />
              </div>
            </div>
            <h4>3. Оплата</h4>
            <Field
              as="select"
              name="payment"
              className={styles.selectFormWrapper}
            >
              <option value="cash">Наличными курьеру</option>
              <option value="bank">Переводом через МБанк</option>
              <option value="other">Другое</option>
            </Field>
            <Button appearance="secondary" type="submit">
              Оформить заказ
            </Button>
          </Form>
        )}
      </Formik>
      <Modal active={modalActive} setActive={setModalActive}>
        <h2>Ваша заявка принята!</h2>
        <>
          {items.map((item) => (
            <div className={styles.row} key={item.id}>
              <div className={styles.imgWrapper}>
                <img src={require(`assets/${item.cover}`)} alt="productImage" />
              </div>
              <div className={styles.column}>
                <h4>Количество</h4>
                <div className={styles.quantityWrapper}>
                  <p>{item.count}</p>
                </div>
              </div>

              <div className={styles.column}>
                <h4>Сумма</h4>
                <h3>{item.price * item.count} сом</h3>
              </div>
            </div>
          ))}
        </>
        <hr />
        <h4>
          Спасибо за заказ <b>{name}</b>, скоро наш менеджер свяжется с вами по
          указанному телефону <b>{phone}</b>.
        </h4>
        <Button appearance="secondary" onClick={() => setModalActive(false)}>
          Вернуться назад
        </Button>
      </Modal>
    </>
  );
};
