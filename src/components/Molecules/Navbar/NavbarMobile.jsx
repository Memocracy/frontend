import React from "react";
import { navigate } from "gatsby";
import { Logo } from "../../Atoms/Logo";
import { Button } from "../../Atoms/Button";
import { Hamburger } from "../../Atoms/Icon";
import { useMenu } from "../../../context/MenuContext";
import * as styles from "./NavbarMobile.module.scss";

/**
 * Renders a <Navbar />
 * @param  props
 * @param  {jsx} props.menu
 */
export const NavbarMobile = () => {
  const { toggleMenu } = useMenu();

  return (
    <div className={styles.container}>
      <div>
        <Button
          onClick={() => navigate("/")}
          type="transparent"
          additionalClasses={[styles.logoButton]}
        >
          <Logo />
        </Button>
      </div>
      <div>
        <Button
          onClick={toggleMenu}
          type="transparent"
          additionalClasses={[styles.menuButton]}
        >
          <Hamburger />
        </Button>
      </div>
    </div>
  );
};
