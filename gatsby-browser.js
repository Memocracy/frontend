import smoothscroll from "smoothscroll-polyfill";
import Provider from "./src/context/MenuContext";
import "./src/assets/styles/global.scss";

smoothscroll.polyfill();

// eslint-disable-next-line import/prefer-default-export
export const wrapRootElement = Provider;
