import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Advantages, Button } from "components";
import { useSelector } from "react-redux";
import { useAppDispatch } from "store/store";
import { fetchOneProduct } from "store/product/asyncActions";
import { selectProductData } from "store/product/selectors";
import { ToastContainer, toast } from "react-toastify";
import styles from "styles/pages/ProductDetailPage.module.scss";
import { addItem } from "store/cart/slice";

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
    toast.success("Added to cart! 🤩", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  return (
    <>
      {status === "loading" ? (
        <h2>Загрузка страницы</h2>
      ) : (
        <>
          {items.map((item: any) => (
            <div key={item.id}>
              <div className={styles.container}>
                <div className={styles.topWrapper}>
                  <div className={styles.imageWrapper}>
                    <div className={styles.carouselWrapper}>
                      {item.images.map((image: any) => (
                        <img
                          key={image}
                          src={require(`assets/${image}`)}
                          alt="product"
                        />
                      ))}
                    </div>
                    <img src={require(`assets/${item.cover}`)} alt="cover" />
                  </div>
                  <div className={styles.titleWrapper}>
                    <h2>{item.title}</h2>
                    <h2>{item.price} $</h2>
                    <Button appearance="primary" onClick={onClickAdd}>
                      Add to cart
                    </Button>
                    <ToastContainer />
                    <p>
                      Tell about the publication and we will refund 2$ from your
                      purchase
                    </p>
                  </div>
                </div>
                <div className={styles.descriptionWrapper}>
                  <h2>Description</h2>
                  <p>{item.description}</p>
                </div>
                <div className={styles.advantagesWrapper}>
                  <h2>Advantages</h2>
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
