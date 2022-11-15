import styles from "./Card.module.scss";
import productImage from "assets/products/gshock/gae2100we3a/GAE-2100WE-3A.webp";
import { Button } from "components/common/button/Button";

type CardProps = {
  id: number;
  cover: string;
  title: string;
  price: number;
  oldPrice: number;
  brand: string;
  rating: number;
  description: string;
  images: string[];
};

export const Card: React.FC<CardProps> = ({
  id,
  cover,
  title,
  price,
  oldPrice,
}) => {

  return (
    <div className={styles.container}>
      <div className={styles.imgWrapper}>
        <img src={require(cover)} alt="product" />
      </div>
      <div className={styles.infoWrapper}>
        <h4 className={styles.title}>{title}</h4>
        <div className={styles.priceWrapper}>
          <h3 className={styles.price}>{price} $</h3>
          <p className={styles.oldPrice}>{oldPrice} $</p>
        </div>
        <Button appearance="primary">Add to cart</Button>
      </div>
    </div>
  );
};
