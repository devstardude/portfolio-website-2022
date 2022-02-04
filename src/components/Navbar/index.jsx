import React from "react";
import Logo from "./Logo";
import SocialLinks from "./SocialLinks";

import styles from './style.module.css';

const Navbar = () => {
  return (
    <React.Fragment>
      <div className={styles.Wrapper}>
        <Logo />
        <SocialLinks />
      </div>
    </React.Fragment>
  );
};

export default Navbar;
