import { Newsletter, Trend } from "components";
import styles from "./BlogDetailPage.module.scss";

export const BlogDetailPage2 = () => {
  return (
    <div className={styles.container}>
      <h2>ИКОНА ПРЯМО ИЗ ЯПОНИИ ПОЗНАКОМЬТЕСЬ С СЕЙЛОР МУН</h2>
      <img src={require("assets/blog/blog2/1.jpeg")} alt="hero" />
      <h3>
        Новая модель, созданная в сотрудничестве с симпатичной хранительницей
        Сейлор Мун.
      </h3>
      <h4>
        От BABY-G, повседневных часов для активных женщин, появилась новая
        модель, созданная в сотрудничестве с Pretty Guardian Sailor Moon. Тема
        этой новой модели - романтические трансформационные способности Сейлор
        Мун. Упаковка этой модели специально разработана в духе симпатичной
        хранительницы Сейлор Мун.
      </h4>

      <img src={require("assets/blog/blog2/img01.webp")} alt="package" />

      <div className={styles.columnWrapper}>
        <div className={styles.column}>
          <img
            src={require("assets/blog/blog2/BA-110XSM-2A_05.webp")}
            alt="banner"
          />
          <div className={styles.infoWrapper}>
            <h3>Ремешок</h3>
            <p>
              Сейлор Мун восстанавливается после каждого поражения и борется с
              каждым приключением до самого конца, никогда не сдаваясь. Этот дух
              вызова идеально сочетается с брендом Baby-G. Ремешок украшен
              многоугловым рисунком с изображением всеми любимой защитницей.
            </p>
          </div>
        </div>
        <div className={styles.column}>
          <img
            src={require("assets/blog/blog2/BA-110XSM-2A_04.webp")}
            alt="banner"
          />
          <div className={styles.infoWrapper}>
            <h3>Безель и циферблат</h3>
            <p>
              Безель и циферблат выполнены в ключевом фиолетовом цвете Сейлор
              Мун. Корпус Koopa Troopa выполнен из стекла, нанесенного в нижней
              части циферблата.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.columnWrapper}>
        <div className={styles.column}>
          <img
            src={require("assets/blog/blog2/BA-110XSM-2A_06.webp")}
            alt="banner"
          />
          <div className={styles.infoWrapper}>
            <h3>Фигура Сейлор Мун</h3>
            <p>
              На обратной стороне, на крышечке часов нарисована фигура Сейлор
              Мун. В сочетании с корпусом Koopa Troopa на циферблате вы всегда
              сможете насладиться культовым игровым ходом.
            </p>
          </div>
        </div>
        <div className={styles.column}>
          <img
            src={require("assets/blog/blog2/BA-110XSM-2A_01.webp")}
            alt="banner"
          />
          <div className={styles.infoWrapper}>
            <h3>Подсветка</h3>
            <p>
              Включите подсветку, и на ЖК-дисплее появится котенок, набравший 1
              балл. В сочетании с корпусом Koopa Troopa на циферблате вы всегда
              сможете насладиться культовым игровым ходом.
            </p>
          </div>
        </div>
      </div>
      <Trend />
      <Newsletter />
    </div>
  );
};
