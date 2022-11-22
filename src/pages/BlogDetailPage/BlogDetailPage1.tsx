import styles from "./BlogDetailPage.module.scss";

export const BlogDetailPage1 = () => {
  return (
    <div className={styles.container}>
      <h2>[BABY-G 2022] MSG-W350-7A and MSG-W200-7A - white femininity</h2>
      <img
        src={require("assets/blog/blog1/1.webp")}
        className={styles.heroImg}
        alt="gwg-2040fr"
      />
      <h4>
        We just couldn't pass by the new MSG-W200-7A2 and MSG-W350-7A for girls.
        The MSG series has always stood out among the Baby-G line, primarily
        because of its steel case [sometimes also called the women's G-Steel]
        and sophisticated design. Yes, the MSG is clearly not about sports -
        here the positioning is more sophisticated and businesslike.
      </h4>
      <h4>
        The feature of the models is the narrow white strap, which perfectly
        suits the image of a "businesswoman". In other words, for girls who are
        confident in themselves and their image. Despite their innocuous
        appearance, the MSG-W200 and MSG-W350 remain shatterproof and can
        withstand bumps and drops along with their "big brother" G-Shock.
      </h4>
      <h4>
        The pale blue and purple dial symbolizes the purity of the sky and
        emphasizes the elegance of the case. The multidirectional "roughness" of
        the case and bezel creates a quality metal feel, plus the surface is
        less susceptible to minor scratches.
      </h4>
      <img
        src={require("assets/blog/blog1/2.webp")}
        className={styles.heroImg}
        alt="gwg-2040fr package"
      />
      <h4>
        The presence of solar power and radio synchronization causes delight and
        pride in the Japanese manufacturer. In the case of the MSG-W300, the
        basic features are smaller due to the analog indication - here there is
        only a calendar and a date window. The electronic "base" of MSG-W200 is
        presented by the world time, stop-watch, timer, alarm clock and LED
        backlight. Nevertheless, the 350's price tag is even higher [$260 vs.
        $240] - you'll have to pay extra for an arrow classic with an octagonal
        case.
      </h4>
    </div>
  );
};
