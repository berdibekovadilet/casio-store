import styles from "./BlogDetailPage.module.scss";

export const BlogDetailPage3 = () => {
  return (
    <div className={styles.container}>
      <h2>[G-SHOCK 2022] GWG-2040FR and MTG-B3000FR - sunbursts on the dial</h2>
      <img
        src={require("assets/blog/40anniversary/hero-pc.webp")}
        className={styles.heroImg}
        alt="gwg-2040fr"
      />
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
        src={require("assets/blog/40anniversary/package.png")}
        className={styles.heroImg}
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
    </div>
  );
};
