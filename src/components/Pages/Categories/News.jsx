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

const News = ({ data, pageContext }) => {
  const footerMenuItems = useFooterMenu();

  const { edges: news } = data.news;

  const NewsRendered =
    <>
      {news.map(({ node }) => {
        return <NewsComponent key={uuid()} data={node} />;
      })}
    </>;

  const PaginationRendered = <Pagination {...pageContext} />;

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
        </Container>

        {NewsRendered}

        <Container type="standard">
          <InnerContainer paddingBottom="xxl">
            {PaginationRendered}
          </InnerContainer>
        </Container>

        <FooterMobile items={footerMenuItems} />
      </Media>

      <Media greaterThanOrEqual="md">
        {/* Destkop version */}
        <Header />
        <Container>
          <ContentHeader title={headingTitle} size="h1" paddingBottom="md" />

          {NewsRendered}

          <InnerContainer paddingBottom="lg">
            <GridContainer columns={12}>
              <div style={{gridColumnStart: "5", gridColumnEnd: "12"}}>
                {PaginationRendered}
              </div>
            </GridContainer>
          </InnerContainer>

        </Container>
        <Footer items={footerMenuItems} />
      </Media>
    </>
  );
};

export const query = graphql`
  query newsListQuery($skip: Int!, $limit: Int!) {
    news: allWpPost(
      sort: { fields: date, order: DESC }
      filter: { categories: { nodes: { elemMatch: { slug: { eq: "news" } } } } }
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
