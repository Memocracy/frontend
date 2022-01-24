import React, { createRef } from "react";
import { graphql } from "gatsby";
import { Media } from "gatsby-plugin-fresnel";
import uuid from "react-uuid";
import { Meta } from "../components/Other/Meta";
import { Container, InnerContainer } from "../components/Molecules/Container";
import { ContentHeader } from "../components/Molecules/Content";
import { TableOfContents } from "../components/Molecules/TableOfContents";
import { Bio } from "../components/Organisms/Bio";
import { useFooterMenu } from "../hooks";
import { OffScreenContainer } from "../components/Molecules/OffScreenContainer";
import { HeaderMobile, Header } from "../components/Organisms/Header";
import { FooterMobile, Footer } from "../components/Organisms/Footer";
import * as standardStyles from "../assets/styles/Standard.module.scss";

const title = "team";

const Team = ({ data }) => {
  const { nodes: categories } = data.categories;
  const footerMenuItems = useFooterMenu();
  const headingTitle = "Team";

  const categoryNames = categories.map((category) => ({
    name: category.name,
    slug: category.slug,
    ref: createRef(null),
  }));

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
            additionalClasses={[
              standardStyles.borderLeft
            ]}
          >
            <TableOfContents elements={categoryNames} />
          </InnerContainer>

          {categories.map((category, index) => {
            const { ref } = categoryNames[index];
            const { nodes } = category.teamMembers;

            return (
              <div key={uuid()}>
                <ContentHeader
                  as="h2"
                  size="h4"
                  hr="bottom"
                  paddingBottom="md"
                  marginBottom="xl"
                  textAlign="center"
                  title={category.name}
                  ref={ref}
                />
                {nodes.map((bio) => (
                  <Bio key={uuid()} data={bio} />
                ))}
              </div>
            );
          })}
        </Container>
        <FooterMobile items={footerMenuItems} />
      </Media>
      <Media greaterThanOrEqual="md">
        {/* Destkop version */}
        <Header />
        <Container>
          <ContentHeader title={headingTitle} size="h1" paddingBottom="md" />
          <OffScreenContainer>
            <TableOfContents elements={categoryNames} />
          </OffScreenContainer>
        </Container>
        <Footer items={footerMenuItems} />
      </Media>
    </>
  );
};

export const query = graphql`
  {
    categories: allWpMemberCategory(
      sort: { fields: teamMembers___nodes___menuOrder, order: ASC }
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
                altText
                localFile {
                  childImageSharp {
                    gatsbyImageData(
                      quality: 85
                      placeholder: BLURRED
                      width: 1000
                      height: 1000
                    )
                  }
                }
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
