import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Helmet } from "react-helmet";

/**
 * Component for adding page meta.
 *
 * @component
 * @example
 * const title = "page subtitle"
 * const description = "Page description"
 * return (
 *   <Meta title={title} description={description} />
 * )
 */
export const Meta = ({ title = "", description }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  return (
    <Helmet
      htmlAttributes={{
        lang: "en",
      }}
    >
      <title>
        {data.site.siteMetadata.title}
        {title && ` – ${title}`}
      </title>
      <meta
        name="description"
        content={description ?? data.site.siteMetadata.description}
      />
    </Helmet>
  );
};
