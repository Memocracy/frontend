import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import * as newsExcerptStyles from "./NewsExcerpt.module.scss";

export const NewsExcerpt = ({ data, link, additionalClasses = [] }) => {
  const featuredImage = {
    data: data.fieldsForNews.customThumbnail?.localFile?.childImageSharp
      ?.gatsbyImageData,
    alt: data.fieldsForNews.customThumbnail?.alt || ``,
  };

  return (
    <article>
      <div>
        {featuredImage?.data && (
          <GatsbyImage image={featuredImage.data} alt={featuredImage.alt} />
        )}
      </div>
    </article>
  );
};
