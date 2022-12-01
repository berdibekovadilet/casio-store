import { Accordion, Newsletter } from "components";
import styles from "../styles/pages/Discounts.module.scss";

export const Discounts: React.FC = () => {
  return (
    <div className={styles.container}>
      <h2>Скидки</h2>
      <Accordion title="200 сом за отзыв">
        <h4>
          При покупке любых часов 200 сом будут переведены на ваш мобильный
          телефон. Для этого вам необходимо оставить отзыв о своей покупке в
          нашем instagram аккаунте
          <a
            href="https://www.instagram.com/casio_kyrgyzstan/"
            target="_blank"
            rel="noreferrer"
          >
            @casio_kyrgyzstan
          </a>
          .
        </h4>
      </Accordion>
      <Accordion title="скидка 10% для именинников">
        <h4>
          Скидка 10% действительна в течение 14 календарных дней до и после Дня
          рождения включительно. Для подтверждения скидки необходимо
          предоставить паспорт или водительские права.
        </h4>
      </Accordion>
      <Accordion title="скидка 5% для подписчиков нашего instagram аккаунта">
        <h4>
          Все наши подписчики в instagram получают скидку 5%, а также могут
          узнавать последние новости об акциях и распродажах, и еще принимать
          участие в конкурсах и выигрывать стильные призы.
        </h4>
      </Accordion>
      <Newsletter />
    </div>
  );
};
