import React, { useState, useEffect, useRef } from "react";
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
  const [stickyClass, setStickyClass] = useState("relative");
  const ref = useRef(null);

  const menuItems = useMainMenu();

  useEffect(() => {
    window.addEventListener("scroll", () => stickNavbar(ref.current.clientHeight));

    return () => {
      window.removeEventListener("scroll", stickNavbar);
    };
  }, []);

  const stickNavbar = (height) => {
    if (window !== undefined) {
      const windowHeight = window.scrollY;
      windowHeight > height
        ? setStickyClass(headerStyles.fixed)
        : setStickyClass("relative");
    }
  };

  return (
    <header className={headerStyles.base}>
      <Hero ref={ref} />
      <div className={`${headerStyles.menuContainer} ${stickyClass}`}>
        <Menu items={menuItems} />
      </div>
    </header>
  );
};
