import { useState } from "react";
import styles from "./Sort.module.scss";

export const sortList = [
  { name: "Popular", sortProperty: "rating" },
  { name: "Price-low to high", sortProperty: "priceAsc" },
  { name: "Price-high to low", sortProperty: "priceDesc" },
  { name: "Newest", sortProperty: "idDesc" },
  { name: "Alphabet", sortProperty: "title" },
];

export const Sort = () => {
  const [modal, setModal] = useState(false);
  const [selected, setSelected] = useState(0);

  const onClickListItem = (i: number) => {
    setSelected(i);
    setModal(false);
  };
  return (
    <div className={styles.container}>
      <div className={styles.label}>
        <b>Sort by:</b>
        <span onClick={() => setModal(!modal)}>Popular</span>
      </div>
      {modal && (
        <div className={styles.popup}>
          <ul>
            {sortList.map((item, i) => (
              <li
                key={i}
                onClick={() => onClickListItem(i)}
                className={selected === i ? styles.active : ""}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
