import React, { createRef } from "react";
import { graphql } from "gatsby";
import { Media } from "gatsby-plugin-fresnel";
import uuid from "react-uuid";
import { Meta } from "../components/Other/Meta";
import { Container } from "../components/Molecules/Container";
import { ContentHeader } from "../components/Molecules/Content";
import { TableOfContents } from "../components/Molecules/TableOfContents";
import { Bio } from "../components/Organisms/Bio";
import { useFooterMenu } from "../hooks";
import { HeaderMobile, Header } from "../components/Organisms/Header";
import { FooterMobile, Footer } from "../components/Organisms/Footer";

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
        <HeaderMobile />
        <Container>
          <ContentHeader title={headingTitle} size="h3" paddingBottom="xs" />
          <TableOfContents elements={categoryNames} />
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
                  marginBottom="md"
                  textAlign="center"
                  title={category.name}
                  ref={ref}
                />
                {nodes.map((bio, bioIndex) => (
                  <Bio key={uuid()} data={bio} />
                ))}
              </div>
            );
          })}
        </Container>
        <FooterMobile items={footerMenuItems} />
      </Media>
      <Media greaterThanOrEqual="md">
        <Header />
        <Container>
          <ContentHeader title={headingTitle} size="h1" paddingBottom="md" />
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
                      quality: 85,
                      placeholder: BLURRED
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
