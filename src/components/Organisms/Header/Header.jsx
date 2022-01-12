import React from "react";
import { Media } from "gatsby-plugin-fresnel";
import * as headerStyles from "./Header.module.scss";
import { Menu } from "../../Molecules/Menu";
import { NavbarMobile } from "../../Molecules/Navbar";
import { OverlayMenu } from "../../Molecules/OverlayMenu";
import { useMainMenu } from "../../../hooks";
import { useMenu } from "../../../context/MenuContext";

export const Header = ({ children }) => {
  const menuItems = useMainMenu();
  const { menuVisible, toggleMenu } = useMenu();

  const MenuPrerendered = <Menu items={menuItems} />;

  return (
    <>

      <Media lessThan="md">
        <NavbarMobile  />
        <OverlayMenu toggle={menuVisible} closeHandler={toggleMenu}>
          {MenuPrerendered}
        </OverlayMenu>
      </Media>

      <div className={headerStyles.header}>{children}</div>
    </>
  );
};
