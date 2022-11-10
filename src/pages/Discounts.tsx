import { Accordion, Newsletter } from "components";
import styles from "../styles/pages/Discounts.module.scss";

export const Discounts = () => {
  return (
    <div className={styles.container}>
      <h2>Discounts</h2>
      <Accordion title="$10 per review">
        <h4>
          When buying any watch, $ 10 will be transferred to your mobile phone.
          To do this, you need to leave a review about your purchase and fill
          out the form.
        </h4>
      </Accordion>
      <Accordion title="-10% for birthday people">
        <h4>
          The 10% discount is valid for 14 calendar days before and after the
          Birthday inclusive. To confirm the discount, you must provide a
          passport or driver's license.
        </h4>
      </Accordion>
      <Accordion title="-5% to the members of our group in social networks">
        <h4>
          All our subscribers in social networks get a 5% discount (using the
          social promo code), the opportunity to learn the latest news about
          promotions and sales, as well as take part in contests and win stylish
          prizes.
        </h4>
      </Accordion>
      <Newsletter />
    </div>
  );
};
