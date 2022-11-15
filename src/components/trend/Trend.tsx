import { Card } from "components/card/Card";
import { SectionTitle } from "components/sectionTitle/SectionTitle";
import styles from "./Trend.module.scss";

export const Trend = () => {
  return (
    <div className={styles.container}>
      <div className={styles.titleWrapper}>
        <SectionTitle title="Trend" />
      </div>
      <div className={styles.cardWrapper}>{/* <Card /> */}</div>
    </div>
  );
};
