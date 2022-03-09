import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { Date } from "../../Atoms/Date";
import { ContentHeader } from "../../Molecules/Content";
import { ImagePlaceholder } from "../../Molecules/ImagePlaceholder";
import { WithLink } from "../../HOC";
import * as newsExcerptStyles from "./NewsExcerpt.module.scss";

export const NewsExcerpt = ({ data, link, additionalClasses = [] }) => {
  const classes = `
    ${newsExcerptStyles.base}
    ${additionalClasses.join(" ")}
  `;

  const featuredImage = {
    data: data.fieldsForNews.customThumbnail?.localFile?.childImageSharp
      ?.gatsbyImageData,
    alt: data.fieldsForNews.customThumbnail?.alt || ``,
  };

  return (
    <WithLink className={classes} link={link}>
      <figure>
        {featuredImage?.data ? (
          <GatsbyImage image={featuredImage.data} alt={featuredImage.alt} />
        ) : (
          <ImagePlaceholder />
        )}
      </figure>
      <section className={newsExcerptStyles.content}>
        <div className={newsExcerptStyles.date}>
          <Date dateTime={data.date} humanTime={data.date} />
        </div>
        <ContentHeader
          as="h2"
          size="h6"
          title={data.title}
          paddingTop="md"
          paddingBottom="lg"
        />
      </section>
    </WithLink>
  );
};
