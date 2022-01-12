import React from "react";
import { Logo } from "../../Atoms/Logo";
import { Button } from "../../Atoms/Button";
import { Hamburger } from "../../Atoms/Icon";
import * as styles from "./NavbarMobile.module.scss";

/**
 * Renders a <Navbar />
 * @param  props
 * @param  {jsx} props.menu
 */
export const NavbarMobile = () => {
  return (
    <div className={styles.container}>
      <div>
        <Button onClick={() => alert(2)} type="transparent" additionalClasses={[ styles.logoButton ]}>
          <Logo />
        </Button>
      </div>
      <div>
        <Button onClick={() => alert(1)} type="transparent" additionalClasses={[ styles.menuButton ]}>
          <Hamburger />
        </Button>
      </div>
    </div>
  );
};
