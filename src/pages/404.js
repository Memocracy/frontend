import React from "react";
import { Media } from "gatsby-plugin-fresnel";
import { Meta } from "../components/Other/Meta";
import { Container } from "../components/Molecules/Container";
import { ContentHeader, Content } from "../components/Molecules/Content";
import { useFooterMenu } from "../hooks";
import { HeaderMobile, Header } from "../components/Organisms/Header";
import { FooterMobile, Footer } from "../components/Organisms/Footer";

const title = "not found";
const headingTitle = "Not found";
const message404 = "<p>Sorry, there's nothing here</p>";

const NotFound = () => {
  const footerMenuItems = useFooterMenu();

  return (
    <>
      <Meta title={title} />
      <Media lessThan="md">
        {/* Mobile version */}
        <HeaderMobile />
        <Container>
          <ContentHeader title={headingTitle} size="h3" paddingBottom="md" />
          <Content content={message404} />
        </Container>
        <FooterMobile items={footerMenuItems} />
      </Media>
      <Media greaterThanOrEqual="md">
        {/* Destkop version */}
        <Header />
        <Container>
          <ContentHeader title={headingTitle} size="h1" paddingBottom="md" />
          <Content content={message404} />
        </Container>
        <Footer items={footerMenuItems} />
      </Media>
    </>
  );
};

export default NotFound;
