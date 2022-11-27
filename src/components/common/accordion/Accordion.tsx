import cn from "classnames";
import { SlideDown } from "react-slidedown";
import styles from "./Accordion.module.scss";
import "react-slidedown/lib/slidedown.css";
import { useState } from "react";

export type AccordionProps = {
  className?: string;
  title?: string;
  isActive?: boolean;
  children?: React.ReactNode;
};

export const Accordion: React.FC<AccordionProps> = ({
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
        <div className={styles.title}>{title}</div>
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
