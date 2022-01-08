import React from "react";
import * as headerStyles from "./Header.module.scss";

export const Header = ({ children }) => <div className={headerStyles.header}>{children}</div>;
