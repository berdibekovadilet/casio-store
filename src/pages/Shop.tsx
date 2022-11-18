import { useEffect, useState } from "react";
import axios from "axios";
import { Card, CardSkeleton, Pagination, Search, Sort } from "components";
import { useSelector } from "react-redux";
import { RootState } from "store/store";
import styles from "../styles/pages/Shop.module.scss";

export const Shop = () => {
  const { brandId, sort, searchValue, currentPage } = useSelector(
    (state: RootState) => state.filter
  );
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const baseUrl = "https://63734623348e947299079d45.mockapi.io/products?brand=";

  async function fetchProducts() {
    setIsLoading(true);
    const brand = brandId > 0 ? String(brandId) : "";
    const sortBy = sort.sortProperty.replace("-", "");
    const order = sort.sortProperty.includes("-") ? "asc" : "desc";
    const search = searchValue ? `$search=${searchValue}` : "";

    const response = await axios.get(
      `${baseUrl + brand}&sortBy=${sortBy}&order=${
        order + search
      }&page=${currentPage}&limit=1`
    );

    setItems(response.data);
    setIsLoading(false);
    window.scrollTo(0, 0);
  }

  useEffect(() => {
    fetchProducts();
  }, [brandId, sort.sortProperty, searchValue, currentPage]);

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
      <div className={styles.productsWrapper}>
        {isLoading ? skeletons : products}
      </div>
      <Pagination />
    </div>
  );
};
