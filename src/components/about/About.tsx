import styles from "./About.module.scss";
import casioImage from "assets/images/storelocation.webp";

export const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgWrapper}>
        <img src={casioImage} alt="storelocation" />
      </div>
      <div className={styles.infoWrapper}>
        <h2>Наш Магазин</h2>
        <h3>Мы находимся в ТЦ Евразия, 2 этаж</h3>
        <h4>
          Приходите в наш магазин и делайте покупки с комфортом: наши
          консультанты – настоящие эксперты в своем деле и всегда помогут
          определиться с выбором.
        </h4>
        <h4>
          Или закажите сразу несколько понравившихся моделей на сайте – с
          финальным выбором вы сможете определиться на месте - и наша курьерская
          служба доставит их бесплатно в удобное для вас время.
        </h4>
        <h4>
          Какой бы способ покупки вы не выбрали, мы гарантируем только
          оригинальные товары, самые низкие цены и премиальный сервис.
        </h4>
      </div>
    </div>
  );
};
