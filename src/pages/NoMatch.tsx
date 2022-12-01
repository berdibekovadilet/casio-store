import React from "react";
import { Button } from "components";
import { Link } from "react-router-dom";
import styles from "styles/pages/NoMatch.module.scss";

export const NoMatch: React.FC = () => {
  return (
    <div className={styles.container}>
      <h2>СТРАНИЦА НЕ НАЙДЕНА</h2>
      <h2 className={styles.bigTitle}>404</h2>
      <p>
        К сожалению, страницу или продукт, который вы ищете, не удается найти.
      </p>
      <Link to="/">
        <Button appearance="primary">На главную</Button>
      </Link>
    </div>
  );
};
