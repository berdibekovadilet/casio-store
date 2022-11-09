import { Button } from "components/common/button/Button";
import styles from "./SectionTitle.module.scss";

export const SectionTitle = ({ title }: any): JSX.Element => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <Button appearance="primary" icon="right">
        See All
      </Button>
    </div>
  );
};
