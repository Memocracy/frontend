import React from "react";
import { graphql } from "gatsby";
import { Media } from "gatsby-plugin-fresnel";
import { Meta } from "../components/Other/Meta";
import { useFooterMenu } from "../hooks";
import { Content, ContentHeader } from "../components/Molecules/Content";
import { FrontPageMobile, FrontPage } from "../components/Templates/FrontPage";
import { HeaderMobile, Header } from "../components/Organisms/Header";
import { FooterMobile, Footer } from "../components/Organisms/Footer";

const Home = ({ data }) => {
  const { content, title } = data.wpPage;
  const footerMenuItems = useFooterMenu();

  const contents = (
    <>
      <ContentHeader title="About the project" />
      <Content content={content} />
    </>
  );

  return (
    <>
      <Meta title={title} />
      <Media lessThan="md">
        <HeaderMobile />
        <FrontPageMobile>{contents}</FrontPageMobile>
        <FooterMobile items={footerMenuItems} />
      </Media>
      <Media greaterThanOrEqual="md">
        <Header />
        <FrontPage>{contents}</FrontPage>
        <Footer items={footerMenuItems} />
      </Media>
    </>
  );
};

export const query = graphql`
  {
    wpPage(isFrontPage: { eq: true }) {
      content
      title
    }
  }
`;

export default Home;
