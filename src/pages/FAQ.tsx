import { Accordion, Newsletter } from "components";
import styles from "../styles/pages/FAQ.module.scss";

export const FAQ: React.FC = () => {
  return (
    <div className={styles.container}>
      <h2>Frequently Asked Questions</h2>
      <Accordion title="Several models of watches to choose">
        <h4>
          It is possible, but by additional agreement with the manager and no
          more than 3 models. This service is free of charge. If you did not
          like any of the brought watches or did not fit, then you pay only the
          cost of the service in the amount of $ 8.
        </h4>
      </Accordion>
      <Accordion title="Payment for delivery if I didn't like the watch">
        <h4>
          No need. Moreover, the watch can be returned or exchanged even after
          making a purchase while maintaining the presentation, payment
          documents.
        </h4>
      </Accordion>
      <Accordion title="What is the weight of the watch and how to calculate the cost of delivery?">
        <h4>
          All small-sized parcels weigh up to 1kg and therefore you do not need
          to count anything. The cost of delivery corresponds to the above
          tariffs.
        </h4>
      </Accordion>
      <Accordion title="Can I refuse delivery or change the day/address/time?">
        <h4>
          Of course you can! Just contact us in any convenient way and let us
          know about changes in the order.
        </h4>
      </Accordion>
      <Accordion title="I can't track the package. What to do?">
        <h4>
          If two days after receiving the tracking number from us, the parcel is
          not tracked on the courier service website, please contact us in any
          way convenient for you and we will find out the reason.
        </h4>
      </Accordion>
      <Accordion title="My order was not delivered. The courier didn't call me back.">
        <h4>
          Please contact us in any way convenient for you and we will find out
          the reason.
        </h4>
      </Accordion>
      <Accordion title="I bought a watch, but it doesn't fit me. Can I return it?">
        <h4>
          Yes, of course you can! Within 14 days from the date of purchase. You
          can return them by sending them to us at the actual address. You can
          send it by any courier service. As soon as the watch arrives to us, we
          will check it and contact you to clarify how you can get your money
          back.
        </h4>
      </Accordion>
      <Newsletter />
    </div>
  );
};
