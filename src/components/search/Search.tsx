import { Button } from "components/common/button/Button";
import SearchIcon from "assets/icons/Search.svg";
import styles from "./Search.module.scss";

export const Search = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <img src={SearchIcon} className={styles.icon} alt="SearchIcon" />
        <input
          type="text"
          className={styles.input}
          placeholder="Searching for a watch..."
        />
      </div>
      <Button appearance="primary">Search</Button>
    </div>
  );
};
