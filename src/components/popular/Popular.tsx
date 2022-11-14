import { Card } from "components/card/Card";
import { SectionTitle } from "components/sectionTitle/SectionTitle";
import styles from "./Popular.module.scss";

export const Popular = () => {
  return (
    <div className={styles.container}>
      <SectionTitle title="Popular" />
      <div className={styles.cardWrapper}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};
