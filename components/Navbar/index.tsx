import { useState } from "react";

import Logo from "../../assets/logo.svg";
import HamburgerIcon from "../../assets/icon-hamburger.svg";

import cx from "classnames";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className={styles.wrapper}>
      <div className={styles.navbar}>
        <a className={styles.logo} href="">
          <Logo />
        </a>

        <button
          onClick={() => setShowMenu(!showMenu)}
          className={styles.hamburgerBtn}
          type="button"
        >
          <HamburgerIcon />
        </button>

        <nav
          className={cx(styles.nav, {
            [styles.showMenu]: showMenu,
          })}
        >
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
            <li>
              <a className={styles.btnLink} href="">
                CONTACT
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
