/* eslint-disable react/display-name */
import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { Media } from "gatsby-plugin-fresnel";
import { ContentHeader, Content } from "../../Molecules/Content";
import { ImagePlaceholder } from "../../Molecules/ImagePlaceholder";
import { Date } from "../../Atoms/Date";
import { WithLink } from "../../HOC";
import * as newsStyles from "./News.module.scss";

/**
 * Renders a <Menu /> component
 * @param  props
 * @param  {array} props.items
 */
export const News = React.forwardRef(
  ({ data, link, additionalClasses = [], enablePlaceholder = true }, ref) => {
    const classes = `
    ${newsStyles.base}
    ${additionalClasses.join(" ")}
  `;

    const featuredImage = {
      data: data.featuredImage?.node?.localFile?.childImageSharp
        ?.gatsbyImageData,
      alt: data.featuredImage?.node?.alt || ``,
    };

    return (
      <WithLink className={classes} link={link}>
        {/* if we have a featured image for this post let's display it */}
        {/* <div className={newsStyles.illustration}>
          {featuredImage?.data && (
            <GatsbyImage image={featuredImage.data} alt={featuredImage.alt} />
          )}
        </div> */}
        <figure className={newsStyles.illustration}>
          {featuredImage?.data ? (
            <GatsbyImage image={featuredImage.data} alt={featuredImage.alt} />
          ) : (
            ( enablePlaceholder && <ImagePlaceholder /> )
          )}
        </figure>
        <section className={newsStyles.container}>
          <div className={newsStyles.date}>
            <Date dateTime={data.date} humanTime={data.date} />
          </div>
          <Media lessThan="md">
            {/* Mobile version */}
            <ContentHeader
              as="h2"
              size="h5"
              title={data.title}
              paddingTop="md"
              paddingBottom="lg"
              additionalClasses={[newsStyles.header]}
              ref={ref}
            />
          </Media>
          <Media greaterThanOrEqual="md">
            {/* Desktop version */}
            <ContentHeader
              as="h2"
              size="h2"
              title={data.title}
              paddingTop="md"
              paddingBottom="lg"
              additionalClasses={[newsStyles.header]}
              ref={ref}
            />
          </Media>
          <Content
            content={data.content}
            additionalClasses={[newsStyles.content]}
          />
        </section>
      </WithLink>
    );
  }
);
