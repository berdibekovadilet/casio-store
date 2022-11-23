import { Newsletter, Trend } from "components";
import styles from "./BlogDetailPage.module.scss";

export const BlogDetailPage1 = () => {
  return (
    <div className={styles.container}>
      <h2>
        Two cultural icons straight out of Japan meet in this SUPER MARIO BROS.
        themed G-SHOCK.
      </h2>
      <img
        src={require("assets/blog/blog1/1.webp")}
        alt="mario"
      />
      <h3>
        The action game that continues even today to captivate fans around the
        world comes to life with familiar colours and a whimsical design.
      </h3>
      <h4>
        When Nintendo Co., Ltd. released the SUPER MARIO BROS. for the Nintendo©
        Family Computer™ in 1985, the game sparked a series that would captivate
        countless fans — children and adults alike — for 35 years and counting.
        The SUPER MARIO series of games has sold over 400 million copies
        worldwide, with Mario and the rest of its cast of colourful characters
        winning the hearts of fans not only in Japan, but all over the globe.
      </h4>

      <img src={require("assets/blog/blog1/package.jpg")} alt="package" />

      <div className={styles.columnWrapper}>
        <div className={styles.column}>
          <img
            src={require("assets/blog/blog1/details-01.webp")}
            alt="banner"
          />
          <div className={styles.infoWrapper}>
            <h3>Band</h3>
            <p>
              Mario gets back up after every defeat and tackles each adventure
              to the very end, without ever giving up. This spirit of challenge
              aligns perfectly with the G-SHOCK brand. The band features a
              multi-angle pattern print of everybody’s favourite plucky plumber.
            </p>
          </div>
        </div>
        <div className={styles.column}>
          <img
            src={require("assets/blog/blog1/details-02.webp")}
            alt="banner"
          />
          <div className={styles.infoWrapper}>
            <h3>Bezel and dial</h3>
            <p>
              The bezel and dial are finished in the key Mario colour red and
              the background blue of the game’s overworld stages, with gold
              accents that recall the coins Mario collects. A Koopa Troopa shell
              is glass printed at the bottom of the dial.
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
            <h3>EL backlight</h3>
            <p>
              Activate the light and Mario appears on the LCD, scoring a 1-UP.
              When combined with the Koopa Troopa shell on the dial, an iconic
              game move is always there to enjoy.
            </p>
          </div>
        </div>
        <div className={styles.column}>
          <img
            src={require("assets/blog/blog1/details-04.webp")}
            alt="banner"
          />
          <div className={styles.infoWrapper}>
            <h3>Special packaging</h3>
            <p>
              The packaging in vivid red features the game world in an all-over
              design. One of Mario’s signature phrases, “Here we go!,” is
              embellished in a pixelated font.
            </p>
          </div>
        </div>
      </div>
      <Trend />
      <Newsletter />
    </div>
  );
};
