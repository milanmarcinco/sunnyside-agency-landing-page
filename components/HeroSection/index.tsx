import Arrow from "../../assets/icon-arrow-down.svg";

import styles from "./HeroSection.module.scss";

const HeroSection = () => {
  return (
    <section>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <h1 className={styles.heading}>WE ARE CREATIVES</h1>
          <Arrow className={styles.arrow} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
