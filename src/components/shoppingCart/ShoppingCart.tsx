import styles from "./ShoppingCart.module.scss";
import CloseIcon from "assets/icons/Close.svg";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store/store";
import { removeItem } from "store/cart/slice";

export const ShoppingCart = () => {
  const { items, totalPrice } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  const onClickRemove = (id: any) => {
    if (window.confirm("Do you really want to remove the product?")) {
      dispatch(removeItem(id));
    }
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
              <h2>-</h2>
              <p>{item.count}</p>
              <h2>+</h2>
            </div>
          </div>

          <div className={styles.column}>
            <h4>Total</h4>
            <h3>{item.price} $</h3>
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
        <h4>{items.length} pcs.</h4>
        <h4>{totalPrice} $</h4>
        <div></div>
      </div>
    </div>
  );
};
