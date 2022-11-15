import styles from "./Card.module.scss";
import { Button } from "components/common/button/Button";
import { Link } from "react-router-dom";

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
      <Link to={`/shop/${id}`}>
        <div className={styles.imgWrapper}>
          <img src={require(`assets/${cover}`)} alt="product" />
        </div>
      </Link>
      <div className={styles.infoWrapper}>
        <Link to={`/shop/${id}`}>
          <h4 className={styles.title}>{title}</h4>
        </Link>
        <div className={styles.priceWrapper}>
          <h3 className={styles.price}>{price} $</h3>
          <p className={styles.oldPrice}>{oldPrice} $</p>
        </div>
        <Button appearance="primary">Add to cart</Button>
      </div>
    </div>
  );
};
