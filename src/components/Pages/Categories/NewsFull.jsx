import React from "react";
import { Media } from "gatsby-plugin-fresnel";
import uuid from "react-uuid";
import { graphql } from "gatsby";
import { Meta } from "../../Other/Meta";
import { FooterMobile, Footer } from "../../Organisms/Footer";
import { ContentHeader } from "../../Molecules/Content";
import { Header, HeaderMobile } from "../../Organisms/Header";
import { InnerContainer, Container, GridContainer } from "../../Molecules/Container";
import { Pagination } from "../../Molecules/Pagination";
import { News as NewsComponent } from "../../Organisms/News";
import { ImagePreview } from "../../Molecules/ImagePreview";
import { useFooterMenu } from "../../../hooks";

const title = "news";
const headingTitle = "News";
const pageDescription = "Memocracy project news";

const NewsFull = ({ data }) => {
  const footerMenuItems = useFooterMenu();

  return (
    <>
      { JSON.stringify(data) }
    </>
  );
};


export const query = graphql`
  query ($id: String) {
    wpPost(id: { eq: $id }) {
      id
      title
      content
    }
  }
`;

export default NewsFull;
