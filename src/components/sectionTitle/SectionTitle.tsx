import { Button } from "components/common/button/Button";
import styles from "./SectionTitle.module.scss";

type Props = {
  title: string;
};

export const SectionTitle: React.FC<Props> = ({ title }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <Button appearance="primary" icon="right">
        See All
      </Button>
    </div>
  );
};
