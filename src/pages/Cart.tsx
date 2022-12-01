import { Newsletter, ShoppingCart, ShoppingForm } from "components";
import { Link, useNavigate } from "react-router-dom";
import styles from "styles/pages/Cart.module.scss";

export const Cart: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className={styles.titleWrapper}>
        <h2>Корзина</h2>
        <Link to="/" onClick={() => navigate(-1)}>
          Назад к покупкам
        </Link>
      </div>
      <ShoppingCart />
      <ShoppingForm />
      <Newsletter />
    </>
  );
};
