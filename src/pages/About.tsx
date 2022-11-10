import styles from "../styles/pages/About.module.scss";
import HeroImg from "assets/images/about.webp";
import { Newsletter } from "components";

export const About = () => {
  return (
    <div className={styles.container}>
      <h2>About Company</h2>
      <img src={HeroImg} alt="banner" />
      <div className={styles.row}>
        <div className={styles.column}>
          <h3>
            Casio Store online store was founded in 2000. We have been working
            with watches since 1994.
          </h3>
          <h4>
            Thanks to years of experience and excellent knowledge of the watch
            industry, we offer customers only original men's and women's
            wristwatches from renowned Japanese manufacturers.
          </h4>
        </div>
        <div>
          <h3>Large assortment - more than 6 brands, more than 2,000 items</h3>
          <h4>
            We follow the news of the watch industry and replenish the
            assortment with current novelties. We have a flexible system of
            discounts, various promotions and special offers for our customers.
            They come to us again and again to buy the best watches!
          </h4>
        </div>
      </div>
      <h2>Casio Philosophy</h2>
      <h3>Creativity and Contribution</h3>
      <h4>
        Casio's corporate creed is "creativity and contribution." It expresses
        the company's commitment to contributing to society by offering the kind
        of original, useful products that only Casio can.
      </h4>
      <h4>
        Products with innovative functions assist people in their daily lives
        and keep society moving forward. They also bring joy to people and help
        to create new culture. When even a single new product is widely adopted,
        whole new markets develop, and this in turn fosters growth in related
        industries. This is the story of Casio's contribution to
        society-innovative products enhancing people's lives.
      </h4>
      <Newsletter />
    </div>
  );
};
