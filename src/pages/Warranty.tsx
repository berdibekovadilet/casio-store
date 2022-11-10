import styles from "../styles/pages/Warranty.module.scss";
import ServiceImg from "assets/images/service-header.jpg";
import { Newsletter } from "components";

export const Warranty = () => {
  return (
    <div className={styles.container}>
      <h2>Warranty</h2>
      <h3>
        All products on the site casio store are genuine, are original
        equipment, and are provided with an official guarantee from the
        manufacturers.
      </h3>
      <img src={ServiceImg} alt="warranty" />
      <h4>
        All products are covered by the warranty of the corresponding service
        centers specified in the warranty card (service booklet) - from 1 year
        and over.
      </h4>
      <h4>
        In case of breakage or detection of any defects in the operation of the
        goods purchased in our stores, contact the service centers listed in
        your warranty card.
      </h4>
      <h4>
        После покупки обязательно сохраняйте чеки и бирки приобретенных
        ювелирных изделий – они понадобятся для гарантийного ремонта в случае
        обнаружения дефекта.
      </h4>
      <h3>
        If there is no service center in your city specified in the ticket
      </h3>
      <h4>
        That, in the event of a breakdown of purchased goods from us, Casio
        Store company bears the cost of shipping and delivering it to the
        service center.
      </h4>
      <h3>Please note that warranty service is not covered</h3>
      <hr />
      <h4>On products that show signs of abuse:</h4>
      <ul>
        <li>
          traces of shock and mechanical damage (dents, nicks, rebound hands,
          risks, numerals, deformation of the dial, missing or deformed crown,
          watch buttons, etc.);
        </li>
        <li>
          traces of unauthorized opening outside the warranty service center
          (scratches on the case at the junction with the back cover, damaged
          screw slots, fingerprints inside the mechanism, non-standard battery,
          incorrectly installed cover seal, etc.);
        </li>
        <li>
          traces of high (more than +50°C) or low (less than -20°C) temperatures
          affecting the product;
        </li>
        <li>
          damage (internal and external) caused by any external mechanical
          impact, shock or vibration loads, application of external force to
          parts of the product (broken or dropped out glass, cracks, scratches,
          scrapes, chips, deformation of materials and parts, breaking, bending
          of the translation head axis, warping of the wheel and balance axes,
          deformation of plates, breaking or stretching of parts, tearing of the
          bracelet mounting case lugs, etc.)
        </li>
        <li>
          damage resulting from exposure to moisture and associated with
          improper operation;
        </li>
        <li>
          damage caused by contact with caustic chemicals or solvents (alkalis,
          acids, mercury and its vapors, plastic solvents, etc.);
        </li>
        <li>
          damage caused by ingestion of foreign objects, substances, insects;
        </li>
        <li>
          The calendar mechanism has been damaged by moving the hands from their
          position between 23:00 and 04:00 (when the automatic date change
          mechanism is engaged);
        </li>
        <li>
          other damage caused by the intentional or negligent actions of the
          purchaser or a breach of operating rules.
        </li>
      </ul>
      <Newsletter />
    </div>
  );
};
