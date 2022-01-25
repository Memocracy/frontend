import React from "react";
import { graphql } from "gatsby";

const News = ({ data, pageContext }) => {
  return (
    <div>
      <pre>{JSON.stringify(data, null, 4)}</pre>
      <pre>{JSON.stringify(pageContext, null, 4)}</pre>
      <div dangerouslySetInnerHTML={{ __html: data.news.edges[1].node.content }} />
    </div>
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
