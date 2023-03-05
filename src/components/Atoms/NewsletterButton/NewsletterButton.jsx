import React from "react";
import * as buttonStyles from "./NewsletterButton.module.scss";
import MailIcon from "../../../assets/images/mail.inline.svg";

export const NewsletterButton = () => {
  return (
    <a
      href="https://mailchi.mp/f42ed5f9bc4c/memocracy-newsletter-16518053"
      target="_blank"
      rel="noreferrer"
      className={buttonStyles.base}
    >
      Read our latest newsletter here
      <MailIcon className={buttonStyles.icon} />
    </a>
  );
};
