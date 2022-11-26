import { Newsletter } from "components";
import styles from "../styles/pages/Refund.module.scss";

export const Refund: React.FC = () => {
  return (
    <div className={styles.container}>
      <h2>Refund</h2>
      <h3>Refund of products of proper quality *</h3>
      <h4>
        The product has not been used, its consumer properties, trade dress,
        packaging and documentation are preserved.
      </h4>
      <h4>You can return the product within 14 days of purchase.</h4>
      <h4>
        Returns are made through shipping to the main office of the company.
      </h4>
      <h4>
        When exchanging or refurding a product, you must have your complete
        product, your passport and an application for return.
      </h4>
      <h4>
        * We do not accept watches with scuffs, scratches or other external
        defects.
      </h4>
      <h3>
        Refund of products of improper quality (marriage, defects, breakage)
      </h3>
      <h4>
        In case of breakage, defect, marriage, you can return the goods in
        accordance with articles 18-24 of the Law "On Protection of Consumer
        Rights". Return of the goods purchased in our online store is carried
        out to the address of the head office.
      </h4>
      <h4>
        To return a product, contact our managers at{" "}
        <a href="https://wa.me/79309306674" target="_blank" rel="noreferrer">
          7(930) 930-66-74
        </a>
        or email
        <a href="https://wa.me/79309306674" target="_blank" rel="noreferrer">
          back@casiostore.com
        </a>
        and inform them of your decision to return the product.
      </h4>
      <h4>
        During the warranty period, exchange or refund for goods purchased in
        our stores in all cases covered by the law "On Protection of Consumer
        Rights" (art. 18-24).
      </h4>
      <h4>
        Applications for refund, exchange are considered within 10 calendar days
        from the date of application to the e-mail address
        <a href="https://wa.me/79309306674" target="_blank" rel="noreferrer">
          back@casiostore.com.
        </a>
      </h4>
      <h4>
        During this period, you will be asked to have the defect diagnosed by
        yourself at a service center, or to send your watch to us for onward
        transmission to a service center if no specialized service center is
        available in your city. It is also possible to send your watch to one of
        our retail stores for diagnosis. It takes an average of 14 calendar days
        for the service center to diagnose the product.
      </h4>
      <h3>Articles 18-24 of the Consumer Rights Protection Law</h3>
      <h4>
        During the warranty period, exchange or refund for goods purchased in
        our stores in all cases covered by the law "On Protection of Consumer
        Rights" (art. 18-24).
      </h4>
      <h4>
        Applications for refund, exchange are considered within 10 calendar days
        from the date of application to the e-mail address
        <a href="https://wa.me/79309306674" target="_blank" rel="noreferrer">
          back@casiostore.com.
        </a>
      </h4>
      <h4>
        Diagnosis of the product by the service center takes an average of 14
        calendar days.
      </h4>
      <h4>
        If the service center attributes the claimed defect to a factory defect,
        we will refund the cost of the product or replace it with the product of
        the same brand (model, article) or the same product of another brand
        (model, article) with a corresponding recalculation of the price with
        the money you spent for shipping. If the alleged defect is not confirmed
        as a factory defect, and there is a misuse of the product, our manager
        or manager of the service center will contact you and report the cost of
        repair, after which you will decide on further action. In this case, the
        amount of money you spent for shipping is not refundable!
      </h4>
      <h4>
        In addition, the watch can be returned or exchanged if: - the service
        center tries to repair your watch within 45 days, but eventually issues
        an official report that it cannot be done; - the watch has been in the
        service center more than once during each year of the warranty period
        and has been there in the aggregate for at least 30 days, and you have
        the corresponding entries in the warranty card.
      </h4>
      <h4>
        For more information about the warranty and product operation, please
        refer to the warranty card of the product.
      </h4>
      <h4>
        Please note that any issues on the return and exchange of goods of
        improper quality we solve ONLY with the official conclusion of the
        warranty service center.
      </h4>
      <Newsletter />
    </div>
  );
};
