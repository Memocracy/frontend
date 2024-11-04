import React from "react";
import * as buttonStyles from "./NewsletterButton.module.scss";
import MailIcon from "../../../assets/images/mail.inline.svg";
import PdfIcon from "../../../assets/images/pdf.inline.svg"


const { GATSBY_CURRENT_NEWSLETTER, GATSBY_CURRENT_NEWSLETTER_PDF} = process.env;

export const NewsletterButton = () => {
  return (
    <div className={buttonStyles.container}>
      <a
        href={ GATSBY_CURRENT_NEWSLETTER }
        target="_blank"
        rel="noreferrer"
        className={[buttonStyles.btn, buttonStyles.animated].join(" ")}
      >
        Read our latest newsletter here
        <MailIcon className={buttonStyles.icon} />
      </a>
      <a
        href={ GATSBY_CURRENT_NEWSLETTER_PDF }
        target="_blank"
        rel="noreferrer"
        className={buttonStyles.btn}
      >
        Download PDF version
        <PdfIcon className={buttonStyles.icon} />
      </a>
    </div>
  );
};
