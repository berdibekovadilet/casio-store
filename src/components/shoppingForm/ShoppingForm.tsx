import { Formik, Form, FormikHelpers } from "formik";
import { Button } from "components/common/button/Button";
import { Input } from "components/common/input/Input";
import styles from "./ShoppingForm.module.scss";

interface Values {
  name: string;
  phone: string;
  email: string;
  city: string;
  address: string;
  comment: string;
}

export const ShoppingForm = () => {
  return (
    <Formik
      initialValues={{
        name: "",
        phone: "",
        email: "",
        city: "",
        address: "",
        comment: "",
      }}
      validate={(values) => {
        const errors = {
          name: "",
          phone: "",
          email: "",
          city: "",
          address: "",
          comment: "",
        };
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
      onSubmit={(values: Values, { setSubmitting }: FormikHelpers<Values>) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
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
        <Form className={styles.wrapper} onSubmit={handleSubmit}>
          <h4>1. Контактные данные</h4>
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
          <div
            className={styles.checkboxFormWrapper}
            role="group"
            aria-labelledby="checkbox-group"
          >
            <div className={styles.checkboxWrapper}>
              <input type="checkbox" name="checked" value="cash" />
              <p>Наличными курьеру</p>
            </div>
            <div className={styles.checkboxWrapper}>
              <input type="checkbox" name="checked" value="mbank" />
              <p>Переводом через МБанк</p>
            </div>
            <div className={styles.checkboxWrapper}>
              <input type="checkbox" name="checked" value="other" />
              <p>Другое</p>
            </div>
          </div>
          <Button appearance="secondary" type="submit">
            Оформить заказ
          </Button>
        </Form>
      )}
    </Formik>
  );
};
