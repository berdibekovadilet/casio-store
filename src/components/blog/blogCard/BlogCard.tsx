import { Link } from "react-router-dom";
import styles from "./BlogCard.module.scss";

export const BlogCard = ({ data }: any) => {
  return (
    <>
      {data.map(
        (item: {
          link: string;
          id: number;
          postData: string;
          title: string;
          img: string;
        }) => (
          <Link to={`/blog/${item.link}`} key={item.id}>
            <div className={styles.container}>
              <p>{item.postData}</p>
              <h2>{item.title}</h2>
              <img src={item.img} alt="blogImage" />
            </div>
          </Link>
        )
      )}
    </>
  );
};
