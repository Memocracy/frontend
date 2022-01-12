/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable react/display-name */
import React, { useState } from "react";

export const MenuContext = React.createContext();

const Provider = ({ children }) => {
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <MenuContext.Provider
      value={{ menuVisible, toggleMenu: () => setMenuVisible(!menuVisible) }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export const useMenu = () => {
  const context = React.useContext(MenuContext);

  if (context === undefined) {
    throw new Error("There's no valid context MenuContext");
  }

  return context;
};

export default ({ element }) => <Provider>{element}</Provider>;
