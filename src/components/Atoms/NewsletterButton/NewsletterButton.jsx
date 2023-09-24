import React from "react";
import * as buttonStyles from "./NewsletterButton.module.scss";
import MailIcon from "../../../assets/images/mail.inline.svg";
import PdfIcon from "../../../assets/images/pdf.inline.svg"

export const NewsletterButton = () => {
  return (
    <div className={buttonStyles.container}>
      <a
        href="https://mailchi.mp/89ae0a812cba/memocracy-2nd-newsletter"
        target="_blank"
        rel="noreferrer"
        className={[buttonStyles.btn, buttonStyles.animated].join(" ")}
      >
        Read our latest newsletter here
        <MailIcon className={buttonStyles.icon} />
      </a>
      <a
        href="http://admin.memocracy.eu/wp-content/uploads/2023/09/Newsletter-II-2022-2023-.pdf"
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
