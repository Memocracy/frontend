import React from "react";
import { graphql } from "gatsby";
import { Media } from "gatsby-plugin-fresnel";
import { Meta } from "../components/Other/Meta";
import { FrontPage } from "../components/Templates/FrontPage";
import { Header } from "../components/Organisms/Header";
import { Logo } from "../components/Atoms/Logo";

const Home = ({ data }) => {
  const { content, title } = data.wpPage;

  return (
    <>
      <Meta title={title} />
      <Header />
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
