import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import cn from "classnames";
import styles from "./Button.module.scss";
import ArrowIcon from "./arrow.svg";

interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: React.ReactNode;
  appearance: "primary" | "secondary";
  icon?: "right" | "none";
}

export const Button = ({
  children,
  icon = "none",
  appearance = "primary",
  className,
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <button
      className={cn(styles.button, className, {
        [styles.primary]: appearance == "primary",
        [styles.secondary]: appearance == "secondary",
      })}
      {...props}
    >
      {children}
      {icon != "none" && (
        <img src={ArrowIcon} className={styles.icon} alt="icon" />
      )}
    </button>
  );
};
