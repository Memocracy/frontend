import React from "react";
import { Button } from "../../Atoms/Button";
import { Twitter } from "../../Atoms/Icon";
import { Partners } from "../Partners";
import { Menu } from "../../Molecules/Menu";
import { Container, InnerContainer } from "../../Molecules/Container";
import { NewsletterForm } from "../../Molecules/Form";
import * as footerStyles from "./FooterMobile.module.scss";

const twitterUrl = "https://twitter.com/MEMOCRACY_team";

/**
 * Renders a <Menu /> component
 * @param  props
 * @param  {array} props.items
 */
export const FooterMobile = ({ items = [] }) => {
  return (
    <>
      <Container type="standard" additionalClasses={[footerStyles.newsletter]}>
        <InnerContainer marginBottom="xxl" paddingTop="xxl">
          <NewsletterForm />
        </InnerContainer>
      </Container>

      <footer className={footerStyles.base}>
        <div className={footerStyles.callToAction}>
          <Button
            type="twitter"
            onClick={() => window.location.assign(twitterUrl)}
            additionalClasses={[footerStyles.twitterButton]}
          >
            <Twitter />
            <span>Follow us on Twitter</span>
          </Button>
        </div>

        <div className={footerStyles.logoGrid}>
          <Partners additionalClasses={[footerStyles.logoGrid]} />
        </div>

        <div className={footerStyles.menu}>
          <Menu items={items} />
        </div>
      </footer>
    </>
  );
};
