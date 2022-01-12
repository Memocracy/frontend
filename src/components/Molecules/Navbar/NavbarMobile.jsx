import React from "react";
import { Logo } from "../../Atoms/Logo";
import { Button } from "../../Atoms/Button";
import * as styles from "./NavbarMobile.module.scss";

/**
 * Renders a <Navbar />
 * @param  props
 * @param  {jsx} props.menu
 */
export const NavbarMobile = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <Logo />
      </div>
      <div>
        <Button onClick={() => alert(1)} type="primary">Test</Button>
      </div>
    </div>
  );
};
