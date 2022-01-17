import React from "react";
import { graphql } from "gatsby";
import { Media } from "gatsby-plugin-fresnel";
import { Meta } from "../components/Other/Meta";
import { Content, ContentHeader } from "../components/Molecules/Content";
import { FrontPageMobile, FrontPage } from "../components/Templates/FrontPage";
import { HeaderMobile, Header } from "../components/Organisms/Header";
import { FooterMobile } from "../components/Organisms/Footer";

const Home = ({ data }) => {
  const { content, title } = data.wpPage;

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
        <FooterMobile />
      </Media>
      <Media greaterThanOrEqual="md">
        <Header />
        <FrontPage>{contents}</FrontPage>
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
