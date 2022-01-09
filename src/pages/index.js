import React from "react";
import { graphql } from "gatsby";
import { Meta } from "@components/Other/Meta";
import { FrontPage } from "../components/Templates/FrontPage";
import { Header } from "../components/Organisms/Header";

const Home = ({ data }) => {
  return (
    <>
      <Meta />
      <FrontPage>
        <Header>Test</Header>
        <pre>{JSON.stringify(data, null, 4)}</pre>
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
