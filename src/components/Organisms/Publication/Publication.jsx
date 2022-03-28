import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { Content } from "../../Molecules/Content";
import * as publicationStyles from "./Publication.module.scss";

/**
 * Renders a <Menu /> component
 * @param  props
 * @param  {array} props.items
 */
export const Publication = ({ data, additionalClasses = [] }) => {
  const classes = `
    ${publicationStyles.base}
    ${additionalClasses.join(" ")}
  `;

  const featuredImage = {
    data: data.featuredImage?.node?.localFile?.childImageSharp?.gatsbyImageData,
    alt: data.featuredImage?.node?.alt || ``,
  };

  return (
    <article className={classes}>
      {/* if we have a featured image for this post let's display it */}
      <header className={publicationStyles.illustration}>
        {featuredImage?.data && (
          <GatsbyImage image={featuredImage.data} alt={featuredImage.alt} />
        )}
      </header>

      <section className={publicationStyles.container}>
        <Content
          content={data.content}
          additionalClasses={[publicationStyles.content]}
        />
        <div className={publicationStyles.navigation}>
          <a href={data.publicationUrl} target="_blank" rel="noreferrer">
            View publication
          </a>
        </div>
      </section>
    </article>
  );
};
