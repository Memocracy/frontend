import React, { createRef } from "react";
import { graphql } from "gatsby";
import uuid from "react-uuid";
import { Media } from "gatsby-plugin-fresnel";
import { Meta } from "../components/Other/Meta";
import { HeaderMobile, Header } from "../components/Organisms/Header";
import { FooterMobile, Footer } from "../components/Organisms/Footer";
import { ContentHeader } from "../components/Molecules/Content";
import { TableOfContents } from "../components/Molecules/TableOfContents";
import { Container, InnerContainer } from "../components/Molecules/Container";
import { PolicyBrief } from "../components/Organisms/PolicyBrief";
import { useFooterMenu } from "../hooks";
import { OffScreenContainer } from "../components/Molecules/OffScreenContainer";
import * as standardStyles from "../assets/styles/Standard.module.scss";

const title = "policy-briefs";

const PolicyBriefs = ({ data }) => {
  const headingTitle = "Policy Briefs";
  const footerMenuItems = useFooterMenu();
  const { nodes: categories } = data.categories;

  const categoryNames = categories.map((category) => ({
    name: category.name,
    slug: category.slug,
    ref: createRef(null),
  }));

  /* const policyBriefsRendered = (
    <>
      {policyBriefs.map((publication) => (
        <PolicyBrief key={uuid()} data={publication} />
      ))}
    </>
  ); */

  return (
    <>
      <Meta title={title} />
      <Media lessThan="md">
        {/* Mobile version */}
        <HeaderMobile />
        <Container>
          <ContentHeader title={headingTitle} size="h3" paddingBottom="md" />
          <InnerContainer
            marginBottom="xl"
            paddingLeft="md"
            paddingTop="xl"
            paddingBottom="xl"
            additionalClasses={[standardStyles.borderLeft]}
          >
            <TableOfContents elements={categoryNames} />
          </InnerContainer>
          {categories.map((category, index) => {
            const { ref } = categoryNames[index];
            const { nodes } = category.policyBriefs;

            return (
              <InnerContainer key={uuid()} paddingBottom="xxl">
                <ContentHeader
                  as="h2"
                  size="h3"
                  hr="top"
                  paddingTop="md"
                  marginBottom="lg"
                  title={category.name}
                  ref={ref}
                />

                {nodes.length === 0 && <p>Sorry, nothing is published at the moment.</p>}

                {nodes.map((policyBrief) => (
                  <PolicyBrief key={uuid()} data={policyBrief} />
                ))}
              </InnerContainer>
            );
          })}
        </Container>
        <FooterMobile items={footerMenuItems} />
      </Media>

      <Media greaterThanOrEqual="md">
        {/* Destkop version */}
        <OffScreenContainer>
          <TableOfContents elements={categoryNames} />
        </OffScreenContainer>

        <Header />
        <Container>
          <ContentHeader title={headingTitle} size="h1" paddingBottom="md" />
          {categories.map((category, index) => {
            const { ref } = categoryNames[index];
            const { nodes } = category.policyBriefs;

            return (
              <InnerContainer key={uuid()} paddingBottom="xxl">
                <ContentHeader
                  as="h2"
                  size="h3"
                  hr="top"
                  paddingTop="md"
                  marginBottom="xl"
                  title={category.name}
                  ref={ref}
                />

                {nodes.length === 0 && <p>Sorry, nothing is published at the moment.</p>}

                {nodes.map((policyBrief) => (
                  <PolicyBrief key={uuid()} data={policyBrief} />
                ))}
              </InnerContainer>
            );
          })}
        </Container>
        <Footer items={footerMenuItems} />
      </Media>
    </>
  );
};

export const query = graphql`
  {
    categories: allWpPolicyBriefCategory(
      sort: {
        fields: [slug, policyBriefs___nodes___menuOrder]
        order: [ASC, ASC]
      }
    ) {
      nodes {
        policyBriefs {
          nodes {
            title
            attachmentFile
            content
            menuOrder
            featuredImage {
              node {
                altText
                localFile {
                  childImageSharp {
                    gatsbyImageData(
                      quality: 85
                      placeholder: BLURRED
                      width: 1000
                    )
                  }
                }
              }
            }
          }
        }
        name
        slug
      }
    }
  }
`;

export default PolicyBriefs;
