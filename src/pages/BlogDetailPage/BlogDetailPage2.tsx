import { Newsletter, Trend } from "components";
import styles from "./BlogDetailPage.module.scss";

export const BlogDetailPage2 = () => {
  return (
    <div className={styles.container}>
      <h2>Icon straight out of Japan meet the Sailor Moon</h2>
      <img src={require("assets/blog/blog2/1.jpeg")} alt="hero" />
      <h3>
        A new model created in collaboration with Pretty Guardian Sailor Moon.
      </h3>
      <h4>
        From BABY-G, the casual watch for active women, comes a new model
        created in collaboration with Pretty Guardian Sailor Moon. The theme of
        this new model is the romantic transformational capabilities of Sailor
        Moon. The packaging of this model is specially designed in the Pretty
        Guardian Sailor Moon spirit.
      </h4>

      <img src={require("assets/blog/blog2/img01.webp")} alt="package" />

      <div className={styles.columnWrapper}>
        <div className={styles.column}>
          <img
            src={require("assets/blog/blog2/BA-110XSM-2A_05.webp")}
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
            src={require("assets/blog/blog2/BA-110XSM-2A_04.webp")}
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
            src={require("assets/blog/blog2/BA-110XSM-2A_06.webp")}
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
             src={require("assets/blog/blog2/BA-110XSM-2A_01.webp")}
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
