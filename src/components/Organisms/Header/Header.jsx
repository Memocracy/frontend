import React from "react";
import { Hero } from "../../Molecules/Hero";
import { Menu } from "../../Molecules/Menu";
import { useMainMenu } from "../../../hooks";
import * as headerStyles from "./Header.module.scss";

/**
 * Renders a <Menu /> component
 * @param  props
 * @param  {array} props.items
 */
export const Header = () => {
  const menuItems = useMainMenu();

  return (
    <header className={headerStyles.base}>
      <Hero />
      <div className={headerStyles.menuContainer}>
        <Menu items={menuItems} />
      </div>
    </header>
  );
};
