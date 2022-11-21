import { ShoppingCart } from "components";
import { Link, useNavigate } from "react-router-dom";
import styles from "styles/pages/Cart.module.scss";

export const Cart = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className={styles.titleWrapper}>
        <h2>Shopping Cart</h2>
        <Link to="/" onClick={() => navigate(-1)}>
          Back to shopping
        </Link>
      </div>
      <ShoppingCart />
      <form className={styles.formWrapper}>
        <h3>1. Contact information</h3>
      </form>
    </>
  );
};
