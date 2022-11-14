import { SectionTitle } from "components/sectionTitle/SectionTitle";
import { BlogCard } from "./blogCard/BlogCard";
import styles from "./Blog.module.scss";
import { data } from "./data";

export const Blog = () => {
  return (
    <div className={styles.container}>
      <div className={styles.titleWrapper}>
        <SectionTitle title="Blog" />
      </div>
      <div className={styles.cardWrapper}>
        <BlogCard />
      </div>
    </div>
  );
};
