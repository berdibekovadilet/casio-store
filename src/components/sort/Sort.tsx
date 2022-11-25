import { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectSort } from "store/filter/selectors";
import { setSort } from "store/filter/slice";
import { SortPropertyEnum } from "store/filter/types";
import styles from "./Sort.module.scss";

type SortItem = {
  name: string;
  sortProperty: SortPropertyEnum;
};

type PopupClick = MouseEvent & {
  path: Node[];
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
  const sort = useSelector(selectSort);
  const dispatch = useDispatch();
  const sortRef = useRef<HTMLDivElement>(null);
  const [modal, setModal] = useState(false);

  const onClickListItem = (item: any) => {
    dispatch(setSort(item));
    setModal(false);
  };
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const _event = event as PopupClick;

      if (sortRef.current && !_event.path.includes(sortRef.current)) {
        setModal(false);
      }
    };

    document.body.addEventListener("click", handleClickOutside);

    return () => document.body.removeEventListener("click", handleClickOutside);
  }, []);
  return (
    <div className={styles.container} ref={sortRef}>
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
