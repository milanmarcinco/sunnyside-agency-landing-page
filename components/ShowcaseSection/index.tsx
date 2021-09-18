import Image from "next/image";

import ConeImageDesktop from "../../assets/image-gallery-cone-desktop.jpg";
import MilkBottlesImageDesktop from "../../assets/image-gallery-milkbottles-desktop.jpg";
import OrangeImageDesktop from "../../assets/image-gallery-orange-desktop.jpg";
import SugarCubesImageDesktop from "../../assets/image-gallery-sugar-cubes-desktop.jpg";

import ConeImageMobile from "../../assets/image-gallery-cone-mobile.jpg";
import MilkBottlesImageMobile from "../../assets/image-gallery-milkbottles-mobile.jpg";
import OrangeImageMobile from "../../assets/image-gallery-orange-mobile.jpg";
import SugarCubesImageMobile from "../../assets/image-gallery-sugar-cubes-mobile.jpg";

import styles from "./ShowcaseSection.module.scss";

const ShowcaseSection = () => {
  return (
    <section>
      <div className={styles.wrapper}>
        <div className={styles.desktopContainer}>
          <Image src={ConeImageDesktop} layout="responsive" />
          <Image src={MilkBottlesImageDesktop} layout="responsive" />
          <Image src={OrangeImageDesktop} layout="responsive" />
          <Image src={SugarCubesImageDesktop} layout="responsive" />
        </div>
        <div className={styles.mobileContainer}>
          <Image src={ConeImageMobile} layout="responsive" />
          <Image src={MilkBottlesImageMobile} layout="responsive" />
          <Image src={OrangeImageMobile} layout="responsive" />
          <Image src={SugarCubesImageMobile} layout="responsive" />
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
