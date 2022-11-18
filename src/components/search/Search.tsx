import { useCallback, useRef, useState } from "react";
import debounce from "lodash.debounce";
import SearchIcon from "assets/icons/Search.svg";
import CloseIcon from "assets/icons/Close.svg";
import styles from "./Search.module.scss";
import { useDispatch } from "react-redux";
import { setSearchValue } from "store/filter/slice";

export const Search = () => {
  const [value, setValue] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  const onClickClear = () => {
    dispatch(setSearchValue(""));
    setValue("");
    inputRef.current?.focus();
  };

  const updateSearchValue = useCallback(
    debounce((str: string) => {
      dispatch(setSearchValue(str));
    }, 150),
    []
  );

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <img src={SearchIcon} className={styles.icon} alt="SearchIcon" />
        <input
          type="text"
          ref={inputRef}
          value={value}
          onChange={onChangeInput}
          className={styles.input}
          placeholder="Searching for a watch..."
        />
        {value && (
          <img
            src={CloseIcon}
            className={styles.icon}
            alt="CloseIcon"
            onClick={onClickClear}
          />
        )}
      </div>
    </div>
  );
};
