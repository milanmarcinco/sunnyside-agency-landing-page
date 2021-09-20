import styles from "./ShowcaseSection.module.scss";

const ShowcaseSection = () => {
  return (
    <section>
      <div className={styles.wrapper}>
        <div className={styles.desktopContainer}>
          <div className={styles.imgContainer}>
            <img src={"/assets/image-gallery-cone-desktop.jpg"} />
          </div>
          <div className={styles.imgContainer}>
            <img src={"/assets/image-gallery-milkbottles-desktop.jpg"} />
          </div>
          <div className={styles.imgContainer}>
            <img src={"/assets/image-gallery-orange-desktop.jpg"} />
          </div>
          <div className={styles.imgContainer}>
            <img src={"/assets/image-gallery-sugar-cubes-desktop.jpg"} />
          </div>
        </div>
        <div className={styles.mobileContainer}>
          <img src={"/assets/image-gallery-cone-mobile.jpg"} />
          <img src={"/assets/image-gallery-milkbottles-mobile.jpg"} />
          <img src={"/assets/image-gallery-orange-mobile.jpg"} />
          <img src={"/assets/image-gallery-sugar-cubes-mobile.jpg"} />
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
