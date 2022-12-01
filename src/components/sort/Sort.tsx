import { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectSort } from "store/filter/selectors";
import { setSort } from "store/filter/slice";
import { SortPropertyEnum } from "store/filter/types";
import styles from "./Sort.module.scss";
import { PopupClick, SortItem } from "./types";

export const sortList: SortItem[] = [
  { name: "Более популярный", sortProperty: SortPropertyEnum.RATING_DESC },
  { name: "Менее популярный", sortProperty: SortPropertyEnum.RATING_ASC },
  {
    name: "Сначала дешевые",
    sortProperty: SortPropertyEnum.PRICE_ASC,
  },
  {
    name: "Сначала дорогие",
    sortProperty: SortPropertyEnum.PRICE_DESC,
  },
  { name: "По названию (А-Я)", sortProperty: SortPropertyEnum.TITLE_ASC },
  { name: "По названию (Я-А)", sortProperty: SortPropertyEnum.TITLE_DESC },
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
        <b>Сортировать по:</b>
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
