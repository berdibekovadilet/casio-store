import { Button, Input } from "components";
import styles from "styles/pages/Login.module.scss";

export const Login = () => {
  return (
    <div>
      <h2>Sign in to your profile</h2>
      <form className={styles.container}>
        <div className={styles.row}>
          <p>Email</p>
          <input type="text" />
        </div>
        <div className={styles.row}>
          <p>Password</p>
          <input type="password" />
        </div>
        <Button appearance="primary">Login</Button>
      </form>
    </div>
  );
};
