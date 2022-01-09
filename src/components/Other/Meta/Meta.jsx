import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Helmet } from "react-helmet";

/**
 * Component for showing details of the user.
 *
 * @component
 * @example
 * const age = 21
 * const name = 'Jitendra Nirnejak'
 * return (
 *   <User age={age} name={name} />
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
    <Helmet>
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
