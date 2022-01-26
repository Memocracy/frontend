import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { ContentHeader, Content } from "../../Molecules/Content";
import { Date } from "../../Atoms/Date";
import * as newsStyles from "./News.module.scss";

/**
 * Renders a <Menu /> component
 * @param  props
 * @param  {array} props.items
 */
export const News = ({ data, additionalClasses = [] }) => {
  const classes = `
    ${newsStyles.base}
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
        <div className={newsStyles.illustration}>
          <GatsbyImage image={featuredImage.data} alt={featuredImage.alt} />
        </div>
      )}
      <div className={newsStyles.date}>
        <Date dateTime={data.date} humanTime={data.date} />
      </div>
      <ContentHeader
        as="h2"
        size="h5"
        title={data.title}
        paddingTop="md"
        paddingBottom="md"
        additionalClasses={[newsStyles.header]}
      />
      <Content
        content={data.content}
        additionalClasses={[newsStyles.content]}
      />
    </article>
  );
};
