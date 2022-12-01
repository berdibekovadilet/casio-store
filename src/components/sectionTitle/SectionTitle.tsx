import { Button } from "components/common/button/Button";
import { Link } from "react-router-dom";
import styles from "./SectionTitle.module.scss";

type Props = {
  title: string;
};

export const SectionTitle: React.FC<Props> = ({ title }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <Link to="shop">
        <Button appearance="primary" icon="right">
          Смотреть все
        </Button>
      </Link>
    </div>
  );
};
