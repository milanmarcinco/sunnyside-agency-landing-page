import ImageTransformDesktop from "../../assets/image-transform-desktop.jpg";
import ImageTransformMobile from "../../assets/image-transform-mobile.jpg";
import ImageStandOutDesktop from "../../assets/image-stand-out-desktop.jpg";
import ImageStandOutMobile from "../../assets/image-stand-out-mobile.jpg";

import ImageGraphicDesignDesktop from "../../assets/image-graphic-design-desktop.jpg";
import ImagePhotographyDesktop from "../../assets/image-photography-desktop.jpg";

import Image from "next/image";

import cx from "classnames";
import styles from "./CTAClaimsSection.module.scss";

const CTAClaimsSection = () => {
  return (
    <section>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2>Transform your brand</h2>
            <p>
              We are a full-service creative agency specializing in helping
              brands grow fast. Engage your clients through compelling visuals
              that do most of the marketing for you.
            </p>
            <a className={cx(styles.underline, styles.underlineYellow)} href="">
              LEARN MORE
            </a>
          </div>

          {/* Desktop image */}
          <div className={cx(styles.desktop, styles.fs0)}>
            <Image src={ImageTransformDesktop} layout="responsive" />
          </div>

          {/* Mobile image */}
          <div className={cx(styles.mobile, styles.fs0)}>
            <Image src={ImageTransformMobile} layout="responsive" />
          </div>
        </div>

        <div className={styles.container}>
          {/* Desktop image */}
          <div className={cx(styles.desktop, styles.fs0)}>
            <Image src={ImageStandOutDesktop} layout="responsive" />
          </div>

          <div className={styles.content}>
            <h2>Stand out to the right audience</h2>
            <p>
              Using a collaborative formula of designers, researchers,
              photographers, videographers, and copywriters, we’ll build and
              extend your brand in digital places.
            </p>
            <a className={cx(styles.underline, styles.underlineRed)} href="">
              LEARN MORE
            </a>
          </div>

          {/* Mobile image */}
          <div className={cx(styles.mobile, styles.fs0)}>
            <Image src={ImageStandOutMobile} layout="responsive" />
          </div>
        </div>

        <div className={styles.container}>
          <div className={styles.content}>
            <h2>Graphic Design</h2>
            <p>
              Great design makes you memorable. We deliver artwork that
              underscores your brand message and captures potential clients’
              attention.
            </p>
            <a className={cx(styles.underline, styles.underlineCyan)} href="">
              LEARN MORE
            </a>
          </div>

          {/* Desktop image */}
          <div className={cx(styles.desktop, styles.fs0)}>
            <Image src={ImageGraphicDesignDesktop} layout="responsive" />
          </div>

          {/* Mobile image */}
          <div className={cx(styles.mobile, styles.fs0)}>
            <Image src={ImageGraphicDesignDesktop} layout="responsive" />
          </div>
        </div>

        <div className={styles.container}>
          {/* Desktop image */}
          <div className={cx(styles.desktop, styles.fs0)}>
            <Image src={ImagePhotographyDesktop} layout="responsive" />
          </div>

          <div className={styles.content}>
            <h2>Photography</h2>
            <p>
              Increase your credibility by getting the most stunning,
              high-quality photos that improve your business image.
            </p>
            <a className={cx(styles.underline, styles.underlineBlue)} href="">
              LEARN MORE
            </a>
          </div>

          {/* Mobile image */}
          <div className={cx(styles.mobile, styles.fs0)}>
            <Image src={ImagePhotographyDesktop} layout="responsive" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTAClaimsSection;
