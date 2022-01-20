import React from "react";
import { graphql } from "gatsby";
import { Media } from "gatsby-plugin-fresnel";
import { Meta } from "../components/Other/Meta";
import { Container } from "../components/Molecules/Container";
import { ContentHeader } from "../components/Molecules/Content";
import { useFooterMenu } from "../hooks";
import { HeaderMobile, Header } from "../components/Organisms/Header";
import { FooterMobile, Footer } from "../components/Organisms/Footer";

const title = "team";

const Team = ({ data }) => {
  const { categories } = data;
  const footerMenuItems = useFooterMenu();


  return (
    <>
      <Meta title={title} />
      <Media lessThan="md">
        <HeaderMobile />
        <Container>
          <ContentHeader title="Team" />
        </Container>
        <FooterMobile items={footerMenuItems} />
      </Media>
      <Media greaterThanOrEqual="md">
        <Header />
        <Container>
          <ContentHeader title="Team" />
          <pre>{JSON.stringify(categories, null, 4)}</pre>
        </Container>
        <Footer items={footerMenuItems} />
      </Media>
    </>
  );
};

export const query = graphql`
  {
    categories: allWpMemberCategory(
      sort: {fields: teamMembers___nodes___menuOrder, order: ASC}
    ) {
      nodes {
        teamMembers {
          nodes {
            title
            twitterHandle
            content
            menuOrder
            featuredImage {
              node {
                uri
                sourceUrl
              }
            }
          }
        }
        name
      }
    }
  }
`;

export default Team;
