import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import cn from "classnames";
import styles from "./Button.module.scss";
import ArrowIcon from "assets/icons/ArrowRight.svg";

export interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: React.ReactNode;
  appearance: "primary" | "secondary";
  icon?: "right" | "none";
  disabled?: boolean;
  onClick?: (event: React.MouseEvent) => void;
}

export const Button = ({
  children,
  icon = "none",
  appearance = "primary",
  className,
  disabled = false,
  onClick,
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <button
      className={cn(styles.button, className, {
        [styles.primary]: appearance === "primary",
        [styles.secondary]: appearance === "secondary",
        [styles.disabled]: disabled,
      })}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
      {icon !== "none" && (
        <img src={ArrowIcon} className={styles.icon} alt="icon" />
      )}
    </button>
  );
};
