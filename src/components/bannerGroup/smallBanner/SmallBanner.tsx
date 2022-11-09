import styles from "./SmallBanner.module.scss";

const SmallBanner = ({ smBanners }: any) => {
  return (
    <div className={styles.container}>
      {smBanners.map((item: any) => (
        <div className={styles.wrapper} key={item.id}>
          <a href={item.href}>
            <h3>{item.title}</h3>
            <img src={item.img} alt="banner" />
          </a>
        </div>
      ))}
    </div>
  );
};

export default SmallBanner;
