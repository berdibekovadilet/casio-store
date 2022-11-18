import styles from "./Pagination.module.scss";
import ArrowLeft from "assets/icons/ArrowLeft.svg";
import ArrowRight from "assets/icons/ArrowRight.svg";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store/store";
import { useCallback } from "react";
import { setCurrentPage } from "store/filter/slice";

export const Pagination = () => {
  const currentPage = useSelector(
    (state: RootState) => state.filter.currentPage
  );
  const dispatch = useDispatch();

  const changePage = useCallback(
    (idx: number) => {
      dispatch(setCurrentPage(idx));
    },
    [dispatch]
  );

  const prevPage = () => {
    dispatch(setCurrentPage(currentPage - 1));
  };

  const nextPage = () => {
    dispatch(setCurrentPage(currentPage + 1));
  };

  const pageArray = [1, 2, 3];

  return (
    <div className={styles.container}>
      <img src={ArrowLeft} alt="leftIcon" onClick={prevPage} />
      {pageArray.map((page) => (
        <h4
          key={page}
          onClick={() => changePage(page)}
          className={currentPage === page ? styles.active : ""}
        >
          {page}
        </h4>
      ))}
      <img src={ArrowRight} alt="leftIcon" onClick={nextPage} />
    </div>
  );
};
