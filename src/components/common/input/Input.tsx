import React from "react";
import styles from "./Input.module.scss";

export const Input = React.forwardRef<HTMLInputElement>((props, ref) => {
  return <input ref={ref} className={styles.container} {...props} />;
});
