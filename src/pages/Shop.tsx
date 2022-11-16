import { useEffect, useState } from "react";
import { Card, Pagination, Search, Sort } from "components";
import styles from "../styles/pages/Shop.module.scss";
import ProductService from "API/ProductService";

export const Shop = () => {
  const [items, setItems] = useState([]);

  async function fetchProducts() {
    const products = await ProductService.getAll();
    setItems(products);
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  const products = items.map((obj: any) => <Card key={obj.id} {...obj} />);

  return (
    <div className={styles.container}>
      <div className={styles.topWrapper}>
        <Sort />
        <Search />
      </div>
      <div className={styles.productsWrapper}>{products}</div>
      <Pagination />
    </div>
  );
};
