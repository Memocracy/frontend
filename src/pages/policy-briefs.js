import React from "react";
import { graphql } from "gatsby";
import uuid from "react-uuid";
import { Media } from "gatsby-plugin-fresnel";
import { Meta } from "../components/Other/Meta";
import { HeaderMobile, Header } from "../components/Organisms/Header";
import { FooterMobile, Footer } from "../components/Organisms/Footer";
import { ContentHeader } from "../components/Molecules/Content";
import { Container } from "../components/Molecules/Container";
import { PolicyBrief } from "../components/Organisms/PolicyBrief";
import { useFooterMenu } from "../hooks";

const title = "policy-briefs";

const PolicyBriefs = ({ data }) => {
  const headingTitle = "Policy Briefs";
  const footerMenuItems = useFooterMenu();
  const { nodes: policyBriefs } = data.policyBriefs;

  const policyBriefsRendered = <>
    {policyBriefs.map(publication => <PolicyBrief key={uuid()} data={publication} /> )}
  </>;

  return (
    <>
      <Meta title={title} />
      <Media lessThan="md">
        {/* Mobile version */}
        <HeaderMobile />
        <Container>
          <ContentHeader title={headingTitle} size="h3" paddingBottom="md" />
          {policyBriefs.length === 0 && "Sorry, nothing is published at the moment."}
          {policyBriefsRendered}
        </Container>
        <FooterMobile items={footerMenuItems} />
      </Media>

      <Media greaterThanOrEqual="md">
        {/* Destkop version */}
        <Header />
        <Container>
          <ContentHeader title={headingTitle} size="h1" paddingBottom="md" />
          {policyBriefs.length === 0 && "Sorry, nothing is published at the moment."}
          {policyBriefsRendered}
        </Container>
        <Footer items={footerMenuItems} />
      </Media>
    </>
  );
};

export const query = graphql`
  {
    policyBriefs: allWpPolicyBrief(sort: {fields: menuOrder, order: DESC}) {
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
                gatsbyImageData(quality: 85, placeholder: BLURRED, width: 1000)
              }
            }
          }
        }
      }
    }
  }
`;

export default PolicyBriefs;
