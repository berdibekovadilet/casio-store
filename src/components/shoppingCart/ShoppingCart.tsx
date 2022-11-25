import styles from "./ShoppingCart.module.scss";
import CloseIcon from "assets/icons/Close.svg";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store/store";
import { addItem, removeItem, minusItem } from "store/cart/slice";
import { CartItem } from "store/cart/types";

export const ShoppingCart = () => {
  const { items, totalPrice } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  const totalCount = items.reduce(
    (sum: number, item: any) => sum + item.count,
    0
  );

  const onClickPlus = (id: any) => {
    dispatch(
      addItem({
        id,
      } as CartItem)
    );
  };

  const onClickMinus = (id: any) => {
    dispatch(minusItem(id));
  };

  const onClickRemove = (id: any) => {
    dispatch(removeItem(id));
  };

  return (
    <div className={styles.container}>
      {items.map((item) => (
        <div className={styles.row} key={item.id}>
          <div className={styles.imgWrapper}>
            <img src={require(`assets/${item.cover}`)} alt="productImage" />
          </div>
          <div className={styles.column}>
            <h4>Quantity</h4>
            <div className={styles.quantityWrapper}>
              <h2 onClick={() => onClickMinus(item.id)}>-</h2>
              <p>{item.count}</p>
              <h2 onClick={() => onClickPlus(item.id)}>+</h2>
            </div>
          </div>

          <div className={styles.column}>
            <h4>Total</h4>
            <h3>{item.price * item.count} $</h3>
          </div>
          <img
            onClick={() => onClickRemove(item.id)}
            src={CloseIcon}
            alt="closeIcon"
          />
        </div>
      ))}
      <hr />
      <div className={styles.totalWrapper}>
        <h4>Total:</h4>
        <h4>{totalCount} pcs.</h4>
        <h4>{totalPrice} $</h4>
        <div></div>
      </div>
    </div>
  );
};
