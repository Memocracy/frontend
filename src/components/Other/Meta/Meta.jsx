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

  const { title: siteTitle, description: defaultDescription } =
    data.site.siteMetadata;

  const fullTitle = title ? `${siteTitle} — ${title}` : siteTitle;

  return (
    <Helmet
      htmlAttributes={{
        lang: "en",
      }}
    >
      <title>{fullTitle}</title>
      <meta name="description" content={description ?? defaultDescription} />
      <meta name="og:title" content={fullTitle} />
      <meta name="og:description" content={description ?? defaultDescription} />
      <meta name="og:image" content={"/images/opengraph.png"} />
      <meta property="og:type" content="article" />
    </Helmet>
  );
};
