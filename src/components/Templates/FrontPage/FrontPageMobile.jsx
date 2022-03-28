import React from "react";
import * as frontPageStyles from "./FrontPageMobile.module.scss";

export const FrontPageMobile = ({ children }) => (
  <div className={frontPageStyles.base}>{children}</div>
);
