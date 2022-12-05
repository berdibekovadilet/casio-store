import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Advantages, Button } from "components";
import { useSelector } from "react-redux";
import { useAppDispatch } from "store/store";
import { fetchOneProduct } from "store/product/asyncActions";
import { selectProductData } from "store/product/selectors";
import { ToastContainer, toast } from "react-toastify";
import { addItem } from "store/cart/slice";
import SwipeImages from "components/swipeImages/SwipeImages";
import styles from "styles/pages/ProductDetailPage.module.scss";

const ProductDetailPage: React.FC = () => {
  const { id } = useParams();
  const { items, status } = useSelector(selectProductData);
  const dispatch = useAppDispatch();

  useEffect(() => {
    async function fetchProducts(id: string) {
      dispatch(fetchOneProduct(id));
      window.scrollTo(0, 0);
    }
    fetchProducts(String(id));
  }, [dispatch, id]);

  const onClickAdd = () => {
    const [{ id, title, price, cover, count }] = items;

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
    <>
      {status === "loading" ? (
        <h2>Загрузка страницы</h2>
      ) : (
        <>
          {items.map((item) => (
            <div key={item.id}>
              <div className={styles.container}>
                <div className={styles.topWrapper}>
                  <SwipeImages item={item} />
                  <div className={styles.titleWrapper}>
                    <h2>{item.title}</h2>
                    <h2>{item.price} сом</h2>
                    <Button appearance="primary" onClick={onClickAdd}>
                      Добавить в корзину
                    </Button>
                    <ToastContainer />
                    <p>
                      Расскажите о публикации, и мы вернем 200 сом с вашей
                      покупки
                    </p>
                  </div>
                </div>
                <div className={styles.descriptionWrapper}>
                  <h2>Описание</h2>
                  <p>{item.description}</p>
                </div>
                <div className={styles.advantagesWrapper}>
                  <h2>Преимущества</h2>
                  <Advantages />
                </div>
              </div>
            </div>
          ))}
        </>
      )}
    </>
  );
};

export default ProductDetailPage;
