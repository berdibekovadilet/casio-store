import { useEffect, useState } from "react";
import { Card, CardSkeleton, Pagination, Search, Sort } from "components";
import styles from "../styles/pages/Shop.module.scss";
import axios from "axios";
import { useSelector } from "react-redux";
import { RootState } from "store/store";

export const Shop = () => {
  const brandId = useSelector((state: RootState) => state.filter.brandId);
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const baseUrl = "https://63734623348e947299079d45.mockapi.io/products?brand=";

  async function fetchProducts() {
    setIsLoading(true);
    const brandChoose = brandId > 0 ? String(brandId) : '';
    const response = await axios.get(baseUrl + brandChoose);
    setItems(response.data);
    setIsLoading(false);
    window.scrollTo(0, 0);
  }

  useEffect(() => {
    fetchProducts();
  }, [brandId]);

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
