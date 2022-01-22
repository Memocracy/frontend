import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { ContentHeader } from "../../Molecules/Content";
import * as bioStyles from "./Bio.module.scss";

/**
 * Renders a <Menu /> component
 * @param  props
 * @param  {array} props.items
 */
export const Bio = ({ additionalClasses = [], data }) => {
  const classes = `
    ${bioStyles.base}
    ${additionalClasses.join(" ")}
  `;

  const featuredImage = {
    data: data.featuredImage?.node?.localFile?.childImageSharp?.gatsbyImageData,
    alt: data.featuredImage?.node?.alt || ``,
  };

  return (
    <article className={classes}>
      {/* if we have a featured image for this post let's display it */}
      {featuredImage?.data && (
        <div className={bioStyles.portrait}>
          <GatsbyImage image={featuredImage.data} alt={featuredImage.alt} />
        </div>
      )}
      <ContentHeader as="h2" size="h5" title={data.title} textAlign="center" />
    </article>
  );
};
