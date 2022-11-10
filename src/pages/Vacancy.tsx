import { Accordion, Newsletter } from "components";
import styles from "../styles/pages/Vacancy.module.scss";

export const Vacancy = () => {
  return (
    <div className={styles.container}>
      <h2>Vacancy</h2>
      <h4>
        Below you can see a list of current vacancies. Join our team and
        let's build a better online watch store together.
      </h4>
      <Accordion title="Sales manager">
        <h3>
          Online store Casio Store invites you to work as a sales manager.
        </h3>
        <h4>Duties:</h4>
        <ul>
          <li> - Providing a high level of personal service and service;</li>
          <li> - Creating an atmosphere of hospitality and friendliness;</li>
          <li> - Advising clients on the range of watches and jewelry;</li>
          <li>
            - Increasing sales by being able to demonstrate their stylistic
            taste and knowledge of watches;
          </li>
          <li> - Working at the cash register and on the sales floor;</li>
          <li>
            - Maintaining standards of visual presentation of brands, window
            dressing;
          </li>
          <li>- Work with orders of customers of the online store.</li>
        </ul>
        <h4>
          Send your resume to e-mail:
          <a href="https://wa.me/79309306674" target="_blank" rel="noreferrer">
            work@casiostore.com
          </a>
        </h4>
      </Accordion>
      <Accordion title="Content manager">
        <h3>
          Online store Casio Store invites you to work as a content manager.
        </h3>
        <h4>Duties:</h4>
        <ul>
          <li>
            - Management of freelancers, set tasks and monitor their
            implementation;
          </li>
          <li>
            - Selection of necessary information for the site or its independent
            creation;
          </li>
          <li> - Entering new product cards on the site;</li>
          <li>- Processing photos to fit the format of the site;</li>
          <li>
            {" "}
            - Control over the relevance of the site and the accuracy of the
            information posted on it;
          </li>
        </ul>
        <h4>
          Send your resume to e-mail:
          <a href="https://wa.me/79309306674" target="_blank" rel="noreferrer">
            work@casiostore.com
          </a>
        </h4>
      </Accordion>
      <Newsletter />
    </div>
  );
};
