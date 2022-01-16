import React from "react";
import * as frontPageStyles from "./FrontPage.module.scss";

export const FrontPage = ({ children }) => (
  <div className={frontPageStyles.base}>{children}</div>
);
