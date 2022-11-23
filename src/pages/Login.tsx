import { isDisabled } from "@testing-library/user-event/dist/utils";
import { Button } from "components";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "styles/pages/Login.module.scss";

const useValidations = (value: any, validations: any) => {
  const [isEmpty, setIsEmpty] = useState(true);
  const [minLengthError, setMinLengthError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [inputValidation, setInputValidation] = useState(false);

  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case "minLength":
          value.length < validations[validation]
            ? setMinLengthError(true)
            : setMinLengthError(false);
          break;

        case "isEmpty":
          value ? setIsEmpty(false) : setIsEmpty(true);
          break;

        case "isEmail":
          const re =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          re.test(String(value).toLowerCase())
            ? setEmailError(false)
            : setEmailError(true);
          break;
      }
    }
  }, [value]);

  useEffect(() => {
    if (isEmpty || minLengthError || emailError) {
      setInputValidation(false);
    } else {
      setInputValidation(true);
    }
  }, [isEmpty, minLengthError, emailError]);

  return { isEmpty, minLengthError, emailError, inputValidation };
};

const useInput = (initialValue: any, validations: any) => {
  const [value, setValue] = useState(initialValue);
  const [isDirty, setIsDirty] = useState(false);
  const valid = useValidations(value, validations);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const onBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsDirty(true);
  };

  return { value, onChange, onBlur, isDirty, ...valid };
};

export const Login = () => {
  const email = useInput("", { isEmpty: true, minLength: 3, isEmail: true });
  const password = useInput("", { isEmpty: true, minLength: 8 });
  return (
    <div>
      <h2>Sign in to your profile</h2>
      <form className={styles.container}>
        <div className={styles.row}>
          <p>Email</p>
          {email.isDirty && email.isEmpty && (
            <p style={{ color: "red" }}>The field cannot be empty</p>
          )}
          {email.isDirty && email.minLengthError && (
            <p style={{ color: "red" }}>
              Length must be more than 3 characters
            </p>
          )}
          {email.isDirty && email.emailError && (
            <p style={{ color: "red" }}>Invalid email</p>
          )}
          <input
            onChange={(e) => email.onChange(e)}
            onBlur={(e) => email.onBlur(e)}
            value={email.value}
            name="email"
            type="text"
          />
        </div>
        <div className={styles.row}>
          <p>Password</p>
          {password.isDirty && password.isEmpty && (
            <p style={{ color: "red" }}>The field cannot be empty</p>
          )}
          {password.isDirty && password.minLengthError && (
            <p style={{ color: "red" }}>
              Length must be more than 8 characters
            </p>
          )}
          <input
            onChange={(e) => password.onChange(e)}
            onBlur={(e) => password.onBlur(e)}
            value={password.value}
            name="password"
            type="password"
          />
        </div>
        <Link to="/">
          <Button
            disabled={!email.inputValidation || !password.inputValidation}
            type="submit"
            appearance="primary"
          >
            Login
          </Button>
        </Link>
      </form>
    </div>
  );
};
