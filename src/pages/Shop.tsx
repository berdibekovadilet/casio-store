import { useEffect, useState } from "react";
import { Card, CardSkeleton, Pagination, Search, Sort } from "components";
import styles from "../styles/pages/Shop.module.scss";
import ProductService from "API/ProductService";

export const Shop = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function fetchProducts() {
    const products = await ProductService.getAll();
    setItems(products);
    setIsLoading(false);
  }

  useEffect(() => {
    fetchProducts();
  }, []);

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
