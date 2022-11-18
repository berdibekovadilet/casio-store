import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSort } from "store/filter/slice";
import { SortPropertyEnum } from "store/filter/types";
import { RootState } from "store/store";
import styles from "./Sort.module.scss";

type SortItem = {
  name: string;
  sortProperty: SortPropertyEnum;
};

export const sortList: SortItem[] = [
  { name: "More Popular", sortProperty: SortPropertyEnum.RATING_DESC },
  { name: "Less Popular", sortProperty: SortPropertyEnum.RATING_ASC },
  {
    name: "Price: low to high",
    sortProperty: SortPropertyEnum.PRICE_ASC,
  },
  {
    name: "Price: high to low",
    sortProperty: SortPropertyEnum.PRICE_DESC,
  },
  { name: "Alphabetical (A-Z)", sortProperty: SortPropertyEnum.TITLE_ASC },
  { name: "Alphabetical (Z-A)", sortProperty: SortPropertyEnum.TITLE_DESC },
];

export const Sort = () => {
  const sort = useSelector((state: RootState) => state.filter.sort);
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);

  const onClickListItem = (item: any) => {
    dispatch(setSort(item));
    setModal(false);
  };
  return (
    <div className={styles.container}>
      <div className={styles.label}>
        <b>Sort by:</b>
        <span onClick={() => setModal(!modal)}>{sort.name}</span>
      </div>
      {modal && (
        <div className={styles.popup}>
          <ul>
            {sortList.map((item, i) => (
              <li
                key={i}
                onClick={() => onClickListItem(item)}
                className={
                  sort.sortProperty === item.sortProperty ? styles.active : ""
                }
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
