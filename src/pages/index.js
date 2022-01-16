import React from "react";
import { graphql } from "gatsby";
import { Media } from "gatsby-plugin-fresnel";

import { Meta } from "../components/Other/Meta";
import { Content } from "../components/Molecules/Content";
import { FrontPageMobile, FrontPage } from "../components/Templates/FrontPage";
import { HeaderMobile, Header } from "../components/Organisms/Header";

const Home = ({ data }) => {
  const { content, title } = data.wpPage;

  const contents = (<Content content={content} />);

  return (
    <>
      <Meta title={title} />
      <Media lessThan="md">
        <HeaderMobile />
      </Media>
      <Media greaterThanOrEqual="md">
        <Header />
      </Media>
      <Media lessThan="md">
        <FrontPageMobile>
          {contents}
        </FrontPageMobile>
      </Media>
      <Media greaterThanOrEqual="md">
        <FrontPage>
          {contents}
        </FrontPage>
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
