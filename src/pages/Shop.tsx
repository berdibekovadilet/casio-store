import { useEffect } from "react";
import { Card, CardSkeleton, Pagination, Search, Sort } from "components";
import { useSelector } from "react-redux";
import { useAppDispatch } from "store/store";
import styles from "../styles/pages/Shop.module.scss";
import { fetchProducts } from "store/product/asyncActions";
import { selectProductData } from "store/product/selectors";
import { selectFilter } from "store/filter/selectors";

export const Shop = () => {
  const { brandId, sort, searchValue, currentPage } = useSelector(selectFilter);
  const { items, status } = useSelector(selectProductData);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const getProducts = async () => {
      const brand = brandId > 0 ? String(brandId) : "";
      const sortBy = sort.sortProperty.replace("-", "");
      const order = sort.sortProperty.includes("-") ? "asc" : "desc";
      const search = searchValue ? `$search=${searchValue}` : "";

      dispatch(
        fetchProducts({
          brand,
          sortBy,
          order,
          search,
          currentPage: String(currentPage),
        })
      );

      window.scrollTo(0, 0);
    };

    getProducts();
  }, [brandId, sort.sortProperty, searchValue, currentPage, dispatch]);

  const products = items.map((obj: any) => <Card key={obj.id} {...obj} />);
  const skeletons = [...new Array(8)].map((_, index) => (
    <CardSkeleton key={index} />
  ));

  return (
    <div className={styles.container}>
      <div className={styles.topWrapper}>
        <Sort />
        <Search />
      </div>
      <>
        {status === "error" ? (
          <div>
            <h2>An error has occurred 😕</h2>
            <p>
              Unfortunately, the data could not be retrieved. Try again later.
            </p>
          </div>
        ) : (
          <div className={styles.productsWrapper}>
            {status === "loading" ? skeletons : products}
          </div>
        )}
      </>
      <Pagination />
    </div>
  );
};
