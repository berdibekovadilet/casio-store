import styles from "./Card.module.scss";
import { Button } from "components/common/button/Button";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "store/cart/slice";
import { ToastContainer, toast } from "react-toastify";

type CardProps = {
  id: number;
  cover: string;
  title: string;
  price: number;
  oldPrice: number;
  rating: number;
  description: string;
  images: string[];
  count: number;
};

export const Card: React.FC<CardProps> = ({
  id,
  cover,
  title,
  price,
  oldPrice,
  count = 1,
}) => {
  const dispatch = useDispatch();

  const onClickAdd = () => {
    const item = {
      id,
      title,
      price,
      cover,
      count,
    };

    dispatch(addItem(item));
    toast.success("Добавлено в корзину! 🤩", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };
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
          <h3 className={styles.price}>{price} сом</h3>
          <p className={styles.oldPrice}>{oldPrice} сом</p>
        </div>
        <Button appearance="primary" onClick={onClickAdd}>
          Добавить в корзину
        </Button>
        <ToastContainer />
      </div>
    </div>
  );
};
