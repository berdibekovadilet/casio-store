import { BlogCard } from "./blogCard/BlogCard";
import styles from "./Blog.module.scss";
import { data } from "./data";

export const BlogSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.titleWrapper}>
        <h2>BLOG</h2>
      </div>
      <div className={styles.cardWrapper}>
        <BlogCard data={data} />
      </div>
    </div>
  );
};
