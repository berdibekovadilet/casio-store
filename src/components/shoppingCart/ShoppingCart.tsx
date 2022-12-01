import styles from "./ShoppingCart.module.scss";
import CloseIcon from "assets/icons/Close.svg";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem, minusItem } from "store/cart/slice";
import { CartItem } from "store/cart/types";
import { selectCart } from "store/cart/selectors";

export const ShoppingCart = () => {
  const { items, totalPrice } = useSelector(selectCart);
  const dispatch = useDispatch();

  const totalCount = items.reduce(
    (sum: number, item: any) => sum + item.count,
    0
  );

  const onClickPlus = (id: string | any) => {
    dispatch(
      addItem({
        id,
      } as CartItem)
    );
  };

  const onClickMinus = (id: string | any) => {
    dispatch(minusItem(id));
  };

  const onClickRemove = (id: string | any) => {
    dispatch(removeItem(id));
  };

  return (
    <div className={styles.container}>
      {!totalPrice ? (
        <h2>Ваша корзина пуста</h2>
      ) : (
        <>
          {items.map((item) => (
            <div className={styles.row} key={item.id}>
              <div className={styles.imgWrapper}>
                <img src={require(`assets/${item.cover}`)} alt="productImage" />
              </div>
              <div className={styles.column}>
                <h4>Количество</h4>
                <div className={styles.quantityWrapper}>
                  <button
                    disabled={item.count === 1}
                    onClick={() => onClickMinus(item.id)}
                  >
                    -
                  </button>
                  <p>{item.count}</p>
                  <button onClick={() => onClickPlus(item.id)}>+</button>
                </div>
              </div>

              <div className={styles.column}>
                <h4>Итого</h4>
                <h3>{item.price * item.count} сом</h3>
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
            <h4>Итого:</h4>
            <h4>{totalCount} шт.</h4>
            <h4>{totalPrice} сом</h4>
            <div></div>
          </div>
        </>
      )}
    </div>
  );
};
