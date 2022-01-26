import React from "react";
import { Media } from "gatsby-plugin-fresnel";
import uuid from "react-uuid";
import { graphql } from "gatsby";
import { Meta } from "../../Other/Meta";
import { FooterMobile } from "../../Organisms/Footer";
import { ContentHeader } from "../../Molecules/Content";
import { HeaderMobile } from "../../Organisms/Header";
import { InnerContainer, Container } from "../../Molecules/Container";
import { Pagination } from "../../Molecules/Pagination";
import { News as NewsComponent } from "../../Organisms/News";
import { useFooterMenu } from "../../../hooks";

const title = "news";

const News = ({ data, pageContext }) => {
  const footerMenuItems = useFooterMenu();
  const headingTitle = "News";

  const { edges: news } = data.news;

  return (
    <>
      <Meta title={title} />
      <Media lessThan="md">
        {/* Mobile version */}
        <HeaderMobile />
        <Container type="standard">
          <ContentHeader title={headingTitle} size="h3" paddingBottom="md" paddingTop="lg" />
        </Container>

          {news.map(({node}) => {
            return (
              <NewsComponent key={uuid()} data={node} />
            );
          })}

          <Pagination {...pageContext} />

        <FooterMobile items={footerMenuItems} />
      </Media>

      <Media greaterThanOrEqual="md">
        {/* Destkop version */}
        <pre>{JSON.stringify(data, null, 4)}</pre>
        <pre>{JSON.stringify(pageContext, null, 4)}</pre>
      </Media>
    </>
  );
};

export const query = graphql`
  query newsListQuery($skip: Int!, $limit: Int!) {
    news: allWpPost(
      sort: { fields: date, order: DESC }
      # filter: { categories: { nodes: { elemMatch: { slug: { eq: "news" } } } } }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          title
          content
          date(formatString: "YYYY-MM-DD")
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
    }
  }
`;

export default News;
