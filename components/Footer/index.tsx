import Logo from "../../assets/logo-cyan.svg";

import FacebookLogo from "../../assets/icon-facebook.svg";
import InstagramLogo from "../../assets/icon-instagram.svg";
import TwitterLogo from "../../assets/icon-twitter.svg";
import PinterestLogo from "../../assets/icon-pinterest.svg";

import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <Logo />
          <div className={styles.navLinks}>
            <ul>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Services</a>
              </li>
              <li>
                <a href="">Projects</a>
              </li>
            </ul>
          </div>
          <div className={styles.socialMediaLinks}>
            <ul>
              <li>
                <a href="">
                  <FacebookLogo />
                </a>
              </li>
              <li>
                <a href="">
                  <InstagramLogo />
                </a>
              </li>
              <li>
                <a href="">
                  <TwitterLogo />
                </a>
              </li>
              <li>
                <a href="">
                  <PinterestLogo />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
