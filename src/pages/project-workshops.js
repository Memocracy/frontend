import React, { createRef } from "react";
import { graphql } from "gatsby";
import { Media } from "gatsby-plugin-fresnel";
import uuid from "react-uuid";
import { Meta } from "../components/Other/Meta";
import {
  Container,
  InnerContainer
} from "../components/Molecules/Container";
import { ContentHeader } from "../components/Molecules/Content";
import { TableOfContents } from "../components/Molecules/TableOfContents";
import { News } from "../components/Organisms/News";
import { useFooterMenu } from "../hooks";
import { ImagePreview } from "../components/Molecules/ImagePreview";
import { OffScreenContainer } from "../components/Molecules/OffScreenContainer";
import { HeaderMobile, Header } from "../components/Organisms/Header";
import { FooterMobile, Footer } from "../components/Organisms/Footer";
import * as standardStyles from "../assets/styles/Standard.module.scss";

const title = "project workshops";
const headingTitle = "Project workshops";
const pageDescription = "Memocracy project workshops";

const ProjectWorkshops = ({
  data: {
    allWpPost: { nodes },
  },
}) => {
  const footerMenuItems = useFooterMenu();

  // Create refs for content
  const tableOfContentsData = nodes.map((category) => ({
    name: category.title,
    slug: category.slug,
    ref: createRef(null),
  }));

  const newsRendered = (
    <>
      {nodes.map((node, i) => {
        const { ref } = tableOfContentsData[i];
        return (
          <div key={uuid()} ref={ref}>
            <News data={node} />
          </div>
        )
      })}
    </>
  );

  return (
    <>
      <Meta title={title} description={pageDescription} />
      <ImagePreview />
      <Media lessThan="md">
        {/* Mobile version */}
        <HeaderMobile />
        <Container type="standard">
          <ContentHeader
            title={headingTitle}
            size="h3"
            paddingBottom="md"
            paddingTop="lg"
          />

          <InnerContainer
            marginBottom="xl"
            paddingLeft="md"
            paddingTop="xl"
            paddingBottom="xl"
            additionalClasses={[standardStyles.borderLeft]}
          >
            <TableOfContents elements={tableOfContentsData} />
          </InnerContainer>
        </Container>
        {newsRendered}
        <FooterMobile items={footerMenuItems} />
      </Media>

      <Media greaterThanOrEqual="md">
        {/* Destkop version */}
        <OffScreenContainer>
          <TableOfContents elements={tableOfContentsData} />
        </OffScreenContainer>

        <Header />
        <Container>
          <ContentHeader title={headingTitle} size="h1" paddingBottom="md" />
          {newsRendered}
        </Container>
        <Footer items={footerMenuItems} />
      </Media>
    </>
  );
};

export const query = graphql`
  {
    allWpPost(
      sort: { fields: date, order: DESC }
      filter: {
        categories: {
          nodes: { elemMatch: { slug: { eq: "project-workshops" } } }
        }
      }
    ) {
      nodes {
        title
        content
        slug
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

export default ProjectWorkshops;
