import React from "react";
import { graphql } from "gatsby";
import { Media } from "gatsby-plugin-fresnel";
import { Meta } from "../components/Other/Meta";
import { FrontPage } from "../components/Templates/FrontPage";
import { HeaderMobile } from "../components/Organisms/Header";

const Home = ({ data }) => {
  const { content, title } = data.wpPage;

  return (
    <>
      <Meta title={title} />
      <Media lessThan="md">
        <HeaderMobile />
      </Media>
      <Media greaterThanOrEqual="md">
        aaa
      </Media>
      <FrontPage>
        <div style={{height: "200vh"}} />
      </FrontPage>
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
