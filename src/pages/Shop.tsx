import { useEffect, useState } from "react";
import { Card, CardSkeleton, Pagination, Search, Sort } from "components";
import styles from "../styles/pages/Shop.module.scss";
import ProductService from "API/ProductService";

export const Shop = () => {
  const [items, setItems] = useState([]);
  let loading = false;

  async function fetchProducts() {
    const products = await ProductService.getAll();
    setItems(products);
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
        {loading ? skeletons : products}
      </div>
      <Pagination />
    </div>
  );
};
