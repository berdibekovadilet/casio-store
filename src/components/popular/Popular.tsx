import { Card } from "components/card/Card";
import { SectionTitle } from "components/sectionTitle/SectionTitle";
import styles from "./Popular.module.scss";

export const Popular = () => {
  return (
    <div className={styles.container}>
      <div className={styles.titleWrapper}>
        <SectionTitle title="Popular" />
      </div>
      <div className={styles.cardWrapper}>
        {/* <Card /> */}
      </div>
    </div>
  );
};
