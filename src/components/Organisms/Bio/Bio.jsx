import React from "react";
import { Media } from "gatsby-plugin-fresnel";
import { Portrait } from "../../Atoms/Portrait";
import { ContentHeader, Content } from "../../Molecules/Content";
import { InnerContainer } from "../../Molecules/Container";
import { TwitterHandle } from "../../Atoms/TwitterHandle";
import * as bioStyles from "./Bio.module.scss";

/**
 * Renders a <Menu /> component
 * @param  props
 * @param  {array} props.items
 */
export const Bio = ({ data, additionalClasses = [] }) => {
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
          <Portrait featuredImage={featuredImage} />
        </div>
      )}
      <Media lessThan="md">
        <ContentHeader
          as="h2"
          size="h5"
          title={data.title}
          textAlign="center"
          marginBottom="sm"
        />
      </Media>
      <Media greaterThanOrEqual="md">
        <ContentHeader
          as="h2"
          size="h4"
          title={data.title}
          textAlign="center"
          marginBottom="sm"
        />
      </Media>
      {/* if we have a Twitter handle let's display it */}
      {data.twitterHandle && (
        <InnerContainer textAlign="center" marginBottom="md">
          <TwitterHandle handle={data.twitterHandle} />
        </InnerContainer>
      )}
      <div className={bioStyles.separator} />

      <InnerContainer marginTop="xl" marginBottom="md">
        <Content content={data.content} additionalClasses={[bioStyles.content]} />
      </InnerContainer>
    </article>
  );
};
