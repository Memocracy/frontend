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

  const contents = <Content content={content} />;

  return (
    <>
      <Meta title={title} />
      <Media lessThan="md">
        <HeaderMobile />
        <FrontPageMobile>
          <ContentHeader
            title="About the project"
            size="h3"
            spacingBottom="md"
          />
          {contents}
        </FrontPageMobile>
        <FooterMobile items={footerMenuItems} />
      </Media>
      <Media greaterThanOrEqual="md">
        <Header />
        <FrontPage>
          <ContentHeader
            title="About the project"
            size="h1"
            spacingBottom="md"
          />
          {contents}
        </FrontPage>
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
