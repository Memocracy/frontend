import React from "react";
import * as buttonStyles from "./NewsletterButton.module.scss";
import MailIcon from "../../../assets/images/mail.inline.svg";
import PdfIcon from "../../../assets/images/pdf.inline.svg"

export const NewsletterButton = ({ newsletterLink, NewsletterLinkPdf }) => {
  return (
    <div className={buttonStyles.container}>
      <a
        href={ newsletterLink }
        target="_blank"
        rel="noreferrer"
        className={[buttonStyles.btn, buttonStyles.animated].join(" ")}
      >
        Read our latest newsletter here
        <MailIcon className={buttonStyles.icon} />
      </a>
      <a
        href={ NewsletterLinkPdf  }
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
