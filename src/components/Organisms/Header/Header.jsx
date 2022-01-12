import React from "react";
import { Media } from "gatsby-plugin-fresnel";
import * as headerStyles from "./Header.module.scss";
import { Menu } from "../../Molecules/Menu";
import { NavbarMobile } from "../../Molecules/Navbar";
import { useMainMenu } from "../../../hooks";

export const Header = ({ children }) => {
  const menuItems = useMainMenu();

  const MenuPrerendered = <Menu items={menuItems} />;

  return (
    <>

      <Media lessThan="md">
        <NavbarMobile  />
      </Media>

      <div className={headerStyles.header}>{children}</div>
    </>
  );
};
