import styles from "./BlogCard.module.scss";
import { data } from "../data";

export const BlogCard = () => {
  return (
    <>
      {data.map((item) => (
        <a href={item.link} key={item.id}>
          <div className={styles.container}>
            <p>{item.postData}</p>
            <h2>{item.title}</h2>
            <img src={item.img} alt="blogImage" />
          </div>
        </a>
      ))}
    </>
  );
};
