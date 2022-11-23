import { Newsletter, Trend } from "components";
import styles from "./BlogDetailPage.module.scss";

export const BlogDetailPage3 = () => {
  return (
    <div className={styles.container}>
      <h2>Red Flare 40th Anniversary Models</h2>
      <img src={require("assets/blog/blog3/hero-pc.webp")} alt="gwg-2040fr" />
      <h3>
        Special solar flare-inspired designs featured on multicolour
        carbon-insert bezels
      </h3>
      <h4>
        Introducing new watches to commemorate the 40th anniversary of the 1983
        debut of G-SHOCK. These first two watches feature a solar flare theme.
        Designs evoking intensely blazing flares combine with the brand colour
        of red. This all-new look is achieved by making the bezels of layered
        carbon and coloured glass fibres, along with a phosphorescent material.
        The stunningly dynamic multicoloured design and the wondrously
        innovative glow-in-the-dark property of the material creates an
        altogether original worldview.
      </h4>
      <h4>
        As CASIO prepares to celebrate the 40th anniversary of its shockproof
        G-SHOCK line, the designers continue to surprise brand fans - this time
        showing off two top-of-the-line new products, the GWG-2040FR-1A and the
        MTG-B3000FR-1A. We got the hint of the great work done, now we can have
        a look at the premium cases with unusual solar flare styling.
      </h4>
      <img
        src={require("assets/blog/blog3/package.png")}
        alt="gwg-2040fr package"
      />
      <h4>
        Look at how cool the case design is - in the spirit of a piece of stone
        or even solidified lava. The GWG-2000 is a dirt-resistant case, Carbon
        Core Guard, carbon bezel, sapphire crystal, radio time synchronization,
        solar power, triple sensor [barometer/altimeter, thermometer, compass].
        The MTG-B3000 is a Dual Core Guard case structure [even stronger,
        thinner and lighter], carbon inner case, sapphire crystal, Triple G
        Resist protection [drops, vibrations, centrifugal force], solar power,
        Multiband radio synchronization.
      </h4>
      <div className={styles.row}>
        <img
          src={require("assets/blog/blog3/features-01b.webp")}
          className={styles.heroImg}
          alt="banner"
        />
        <div className={styles.infoWrapper}>
          <h3>Multicolor carbon-insert bezels evoke solar flares.</h3>
          <p>
            The G-SHOCK spirit of toughness is conveyed by evoking the dynamic
            energy and heat intensity of solar flares. Carbon and colored glass
            fibers are laminated and hewn into bezel forms to produce random
            patterns. Meanwhile, use of glass fiber sheets containing
            phosphorescent particles creates stunning designs of wondrous
            glow-in-the-dark beauty. *Exact bezel patterns and phosphorescent
            hues will vary from watch to watch due to details of the
            manufacturing process.
          </p>
        </div>
      </div>
      <div className={styles.row}>
        <img
          src={require("assets/blog/blog3/features-02a.webp")}
          className={styles.heroImg}
          alt="banner"
        />
        <div className={styles.infoWrapper}>
          <h3>Phosphorescent forged carbon bezel parts.</h3>
          <p>
            Forged carbon fiber, a composite material used in aircraft
            fuselages, is used to make the special pair of components at the 12
            and 6 o'clock positions. Carbon fiber and phosphorescent epoxy resin
            undergo high-temperature, high-pressure metallic molding and cutting
            processess, followed by polishing and painting. While in bright
            light they retain their black appearance, in the dark they glow with
            solar flare patterns that match the bezel. *Exact phosphorescent
            hues will vary from watch to watch due to details if the
            manufacturing process.
          </p>
        </div>
      </div>
      <div className={styles.columnWrapper}>
        <div className={styles.column}>
          <img
            src={require("assets/blog/blog3/details-01.webp")}
            alt="banner"
          />
          <div className={styles.infoWrapper}>
            <h3>Color scheme delivered with IP coatings</h3>
            <p>
              Pink gold IP is used for the bezel ring and rose gold IP for metal
              parts including the buckle, band loop, buttons, and crown. Black
              IP is applied to the case back. Different color finishes applied
              to individual components evoke solar flares.
            </p>
          </div>
        </div>
        <div className={styles.column}>
          <img
            src={require("assets/blog/blog3/features-03.webp")}
            alt="banner"
          />
          <div className={styles.infoWrapper}>
            <h3>
              Special design features to celebrate the 40th anniversary of
              G-SHOCK
            </h3>
            <p>
              An Eric Haze-designed logo commemorating the 40th anniversary of
              G-SHOCK is engraved on the case back, while the stainless-steel
              band loop is laser-engraved with four stars and the words "SINCE
              1983".
            </p>
          </div>
        </div>
      </div>
      <div className={styles.columnWrapper}>
        <div className={styles.column}>
          <img
            src={require("assets/blog/blog3/details-03.webp")}
            alt="banner"
          />
          <div className={styles.infoWrapper}>
            <h3>Smartphone Link for full functionality at your fingertips</h3>
          </div>
        </div>
        <div className={styles.column}>
          <img
            src={require("assets/blog/blog3/details-04.webp")}
            alt="banner"
          />
          <div className={styles.infoWrapper}>
            <h3>
              Multi Band 6 & Tough Solar: Radio-controlled solar watch for
              accurate time keeping
            </h3>
          </div>
        </div>
      </div>
      <Trend />
      <Newsletter />
    </div>
  );
};
