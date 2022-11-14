import styles from "./About.module.scss";
import casioImage from "assets/images/casioOffice.webp";

export const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgWrapper}>
        <img src={casioImage} alt="casioImage" />
      </div>
      <div className={styles.infoWrapper}>
        <h2>Casio Philosophy</h2>
        <h3>Creativity and Contribution</h3>
        <h4>
          Casio's corporate creed is "creativity and contribution." It expresses
          the company's commitment to contributing to society by offering the
          kind of original, useful products that only Casio can.
        </h4>
        <h4>
          Products with innovative functions assist people in their daily lives
          and keep society moving forward. They also bring joy to people and
          help to create new culture. When even a single new product is widely
          adopted, whole new markets develop, and this in turn fosters growth in
          related industries. This is the story of Casio's contribution to
          society-innovative products enhancing people's lives.
        </h4>
        <h4>
          The Charter of Creativity for Casio is a statement of the company's
          commitment to the world and an internal guideline designed to ensure
          that every member of the Casio Group practices Casio's corporate creed
          of "creativity and contribution."
        </h4>
      </div>
    </div>
  );
};
