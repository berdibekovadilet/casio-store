import ProductService from "API/ProductService";
import { Card } from "components/card/Card";
import { CardSkeleton } from "components/card/cardSkeleton/CardSkeleton";
import { SectionTitle } from "components/sectionTitle/SectionTitle";
import { useEffect, useState } from "react";
import styles from "./Popular.module.scss";

export const Popular = () => {
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

  const products = items
    .slice(0, 8)
    .map((obj: any) => <Card key={obj.id} {...obj} />);
  const skeletons = [...new Array(8)].map((_, index) => (
    <CardSkeleton key={index} />
  ));

  return (
    <div className={styles.container}>
      <div className={styles.titleWrapper}>
        <SectionTitle title="Popular" />
      </div>
      <div className={styles.cardWrapper}>
        {isLoading ? skeletons : products}
      </div>
    </div>
  );
};
