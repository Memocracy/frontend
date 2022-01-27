import React from "react";
import { graphql } from "gatsby";
import uuid from "react-uuid";
import { Media } from "gatsby-plugin-fresnel";
import { Meta } from "../components/Other/Meta";
import { HeaderMobile, Header } from "../components/Organisms/Header";
import { FooterMobile, Footer } from "../components/Organisms/Footer";
import { ContentHeader } from "../components/Molecules/Content";
import { Container } from "../components/Molecules/Container";
import { Publication } from "../components/Organisms/Publication";
import { useFooterMenu } from "../hooks";

const title = "publications";

const Publications = ({ data }) => {
  const headingTitle = "Publications";
  const footerMenuItems = useFooterMenu();
  const { nodes: publications } = data.publications;

  const publicationsRendered = <>
    {publications.map(publication => <Publication key={uuid()} data={publication} /> )}
  </>;

  return (
    <>
      <Meta title={title} />
      <Media lessThan="md">
        {/* Mobile version */}
        <HeaderMobile />
        <Container>
          <ContentHeader title={headingTitle} size="h3" paddingBottom="md" />
          {publicationsRendered}
        </Container>
        <FooterMobile items={footerMenuItems} />
      </Media>

      <Media greaterThanOrEqual="md">
        {/* Destkop version */}
        <Header />
        <Container>
          <ContentHeader title={headingTitle} size="h1" paddingBottom="md" />
          {publicationsRendered}
        </Container>
        <Footer items={footerMenuItems} />
      </Media>
    </>
  );
};

export const query = graphql`
  {
    publications: allWpPublication(sort: { fields: menuOrder, order: DESC }) {
      nodes {
        title
        publicationUrl
        content
        menuOrder
        featuredImage {
          node {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(quality: 85, placeholder: BLURRED, width: 1000)
              }
            }
          }
        }
      }
    }
  }
`;

export default Publications;
