import cn from "classnames";
import { SlideDown } from "react-slidedown";
import styles from "./Accordion.module.scss";
import "react-slidedown/lib/slidedown.css";
import { useState } from "react";

export interface IAccordionProps {
  className?: string;
  title?: string;
  isActive?: boolean;
  children?: React.ReactNode;
}

export const Accordion: React.FC<IAccordionProps> = ({
  className,
  title = " ",
  isActive = false,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(isActive);

  const handleToggleAccordion = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div
      className={cn(styles.container, className, {
        Accordion_active: isOpen,
      })}
    >
      <div className={styles.header} onClick={handleToggleAccordion}>
        <h3 className={styles.title}>{title}</h3>
        {isOpen ? (
          <h2 className={styles.iconActive}>+</h2>
        ) : (
          <h2 className={styles.icon}>+</h2>
        )}
      </div>
      <SlideDown className={styles.slideDown}>
        {isOpen && <div className={styles.content}>{children}</div>}
      </SlideDown>
    </div>
  );
};
