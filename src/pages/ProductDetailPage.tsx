import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductService from "API/ProductService";
import { Advantages, Button } from "components";
import styles from "styles/pages/ProductDetailPage.module.scss";

const ProductDetailPage = () => {
  const { id } = useParams();
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function fetchProducts(id: any) {
    const products = await ProductService.getOne(id);
    setItems(products);
    setIsLoading(false);
    window.scrollTo(0, 0);
  }

  useEffect(() => {
    fetchProducts(id);
  }, []);

  return (
    <>
      {isLoading ? (
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
                    <Button appearance="primary">Add to cart</Button>
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
