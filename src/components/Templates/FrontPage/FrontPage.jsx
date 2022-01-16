import React from "react";
import { Parallax, Background } from "react-parallax";
import BackgroundImage from "../../../assets/images/europe-illustration-optimized-desktop.png";
import * as frontPageStyles from "./FrontPage.module.scss";

export const FrontPage = ({ children }) => (
  <div className={frontPageStyles.base}>
    <article className={frontPageStyles.innerContainer}>{children}</article>
    <Parallax strength={500} className={frontPageStyles.backgroundContainer}>
      <Background className={frontPageStyles.backgroundImage}>
        <img src={BackgroundImage} alt="fill murray" />
      </Background>
    </Parallax>
  </div>
);
