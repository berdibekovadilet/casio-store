import styles from "../styles/pages/Delivery.module.scss";
import { Newsletter } from "components";

export const Delivery = () => {
  return (
    <div className={styles.container}>
      <h2>Delivery</h2>
      <h3>Delivery cost</h3>
      <ol>
        <li>No delivery fees for all Click and Collect orders.</li>
        <li>
          For all orders on Casio Store, CASIO ID Members enjoy:
          <ol>
            <li>Free delivery for all orders above $100</li>
            <li>
              For orders below $100, there's a home delivery fee of $8.50.
            </li>
            <li>For orders below $100, Click and Collect is free of charge.</li>
          </ol>
        </li>
        <li>
          For all orders on Casio Store, non CASIO ID Members:{" "}
          <ol>
            <li>Delivery cost $8.50 for all orders, regardless of spend.</li>
          </ol>
        </li>
      </ol>
      <h3>Shipping</h3>
      <h4>
        We provide standard delivery to your doorstep via courier within one to
        three (10 – 30) working days. Your order will be dispatched within 48
        hours upon payment verification.
      </h4>
      <h4>
        *Some shipments may be delayed depending on the overall order status.{" "}
      </h4>
      <h3>What happens if I've missed my delivery?</h3>
      <h4>
        If your parcel has not been successfully delivered, our courier partner
        will contact you to schedule for re-delivery. If you miss the
        re-delivery once again, your order will be transferred to the CASIO
        warehouse and do email to sales@casiostore.com on what are the options
        in regards to your Products.
      </h4>
      <h2>RETURNS & CANCELLATIONS</h2>
      <h3>Can I return or exchange a product?</h3>
      <h4>
        Returns can only be accepted for products purchased through Casio Store
        and they will need to fulfil all the general return conditions below.
      </h4>
      <h4>General Return Conditions:</h4>
      <ul>
        <li>
          Period: You can return your order within 14 days from the day you
          received the product.
        </li>
        <li>
          Product condition: The product must be in its original state and
          packaging with the original box and tags. All GWP must be in its
          original form and packaged in the original box with tags.
        </li>
        <li>
          Product limitations: No return is allowed for the Limited Edition
          model - details will be indicated in the product page description.
        </li>
      </ul>
      <h3>Can I cancel my order? </h3>
      <h4>
        If your order has been delivered, please drop an email to
        sales@casiostore.com (with proof of purchase) and our staff will assist
        you on the cancellation process.
      </h4>
      <Newsletter />
    </div>
  );
};
