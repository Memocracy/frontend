import React from "react";
import * as headerStyles from "./HeaderMobile.module.scss";
import { Menu } from "../../Molecules/Menu";
import { NavbarMobile } from "../../Molecules/Navbar";
import { HeroMobile } from "../../Molecules/Hero";
import { OverlayMenu } from "../../Molecules/OverlayMenu";
import { useMainMenu } from "../../../hooks";
import { useMenu } from "../../../context/MenuContext";

export const HeaderMobile = ({ children, showHero = true }) => {
  const menuItems = useMainMenu();
  const { menuVisible, toggleMenu } = useMenu();

  return (
    <div className={headerStyles.base}>
      <NavbarMobile />
      { showHero && <HeroMobile /> }
      <OverlayMenu toggle={menuVisible} closeHandler={toggleMenu}>
        <Menu items={menuItems} />
      </OverlayMenu>
    </div>
  );
};
