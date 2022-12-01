import { Newsletter, Trend } from "components";
import styles from "./BlogDetailPage.module.scss";

export const BlogDetailPage1 = () => {
  return (
    <div className={styles.container}>
      <h2>
        Две культурные иконы прямиком из Японии встречаются в стилизованном
        G-SHOCK SUPER MARIO.
      </h2>
      <img src={require("assets/blog/blog1/1.webp")} alt="mario" />
      <h3>
        Экшн-игра, которая и сегодня продолжает очаровывать поклонников по всему
        миру, оживает знакомыми цветами и причудливым дизайном.
      </h3>
      <h4>
        Когда Nintendo Co., Ltd. выпустила SUPER MARIO BROS. для Nintendo©
        Family Computer™ в 1985 году игра положила начало серии, которая будет
        очаровывать бесчисленных поклонников — как детей, так и взрослых — на
        протяжении 35 лет и более. Серия игр SUPER MARIO разошлась тиражом более
        400 миллионов копий по всему миру, а Марио и остальные его колоритные
        персонажи завоевали сердца поклонников не только в Японии, но и по всему
        миру.
      </h4>

      <img src={require("assets/blog/blog1/package.jpg")} alt="package" />

      <div className={styles.columnWrapper}>
        <div className={styles.column}>
          <img
            src={require("assets/blog/blog1/details-01.webp")}
            alt="banner"
          />
          <div className={styles.infoWrapper}>
            <h3>Ремешок</h3>
            <p>
              Марио встает на ноги после каждого поражения и справляется с
              каждым приключением до самого конца, никогда не сдаваясь. Этот дух
              вызова идеально сочетается с брендом G-SHOCK. Ремешок украшен
              многоугловым рисунком с изображением всеми любимого отважного
              водопроводчика.
            </p>
          </div>
        </div>
        <div className={styles.column}>
          <img
            src={require("assets/blog/blog1/details-02.webp")}
            alt="banner"
          />
          <div className={styles.infoWrapper}>
            <h3>Безель и циферблат</h3>
            <p>
              Безель и циферблат выполнены в ключевом красном цвете Mario и
              синем фоне игровых этапов overworld, с золотыми вставками,
              напоминающими о монетах, которые собирает Марио. Корпус Koopa
              Troopa выполнен из стекла, нанесенного в нижней части циферблата.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.columnWrapper}>
        <div className={styles.column}>
          <img
            src={require("assets/blog/blog1/details-03.webp")}
            alt="banner"
          />
          <div className={styles.infoWrapper}>
            <h3>Подсветка</h3>
            <p>
              Включите подсветку, и на ЖК-дисплее появится Марио, набравший 1
              балл. В сочетании с корпусом Koopa Troopa на циферблате вы всегда
              сможете насладиться культовым игровым ходом.
            </p>
          </div>
        </div>
        <div className={styles.column}>
          <img
            src={require("assets/blog/blog1/details-04.webp")}
            alt="banner"
          />
          <div className={styles.infoWrapper}>
            <h3>Специальная упаковка</h3>
            <p>
              На упаковке ярко-красного цвета во всем дизайне изображен игровой
              мир. Одна из фирменных фраз Марио, “Поехали!”, украшена
              пикселизированным шрифтом.
            </p>
          </div>
        </div>
      </div>
      <Trend />
      <Newsletter />
    </div>
  );
};
