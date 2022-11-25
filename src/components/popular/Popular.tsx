import { Card } from "components/card/Card";
import { CardSkeleton } from "components/card/cardSkeleton/CardSkeleton";
import { SectionTitle } from "components/sectionTitle/SectionTitle";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchPopularProducts } from "store/product/asyncActions";
import { RootState, useAppDispatch } from "store/store";
import styles from "./Popular.module.scss";

export const Popular = () => {
  const { items, status } = useSelector((state: RootState) => state.product);
  const dispatch = useAppDispatch();

  useEffect(() => {
    async function getProducts() {
      dispatch(fetchPopularProducts());
    }
    getProducts();
  }, [dispatch]);

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
        {status === "loading" ? skeletons : products}
      </div>
    </div>
  );
};
