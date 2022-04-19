import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { Media } from "gatsby-plugin-fresnel";
import { ContentHeader, Content } from "../../Molecules/Content";
import * as policyBriefStyles from "./PolicyBrief.module.scss";

/**
 * Renders a <Menu /> component
 * @param  props
 * @param  {array} props.items
 */
export const PolicyBrief = ({ data, additionalClasses = [] }) => {
  const classes = `
    ${policyBriefStyles.base}
    ${additionalClasses.join(" ")}
  `;

  const featuredImage = {
    data: data.featuredImage?.node?.localFile?.childImageSharp?.gatsbyImageData,
    alt: data.featuredImage?.node?.alt || ``,
  };

  const { attachmentFiles } = data.fieldsForPolicyBriefs;

  return (
    <article className={classes}>
      {/* if we have a featured image for this post let's display it */}
      <header className={policyBriefStyles.illustration}>
        {featuredImage?.data && (
          <GatsbyImage image={featuredImage.data} alt={featuredImage.alt} />
        )}
      </header>

      <section className={policyBriefStyles.container}>
        <Media lessThan="md">
          {/* Mobile version */}
          <ContentHeader
            as="h2"
            size="h5"
            title={data.title}
            paddingTop="md"
            paddingBottom="lg"
          />
        </Media>
        <Media greaterThanOrEqual="md">
          {/* Desktop version */}
          <ContentHeader
            as="h2"
            size="h3"
            title={data.title}
            paddingTop="md"
            paddingBottom="lg"
          />
        </Media>
        <Content
          content={data.content}
          additionalClasses={[policyBriefStyles.content]}
        />

        <div className={policyBriefStyles.navigation}>
          {attachmentFiles.attachmentFile1 && (
            <a
              href={attachmentFiles.attachmentFile1.localFile.url}
              target="_blank"
              rel="noreferrer"
            >
              {attachmentFiles.attachmentFileTitle1}
            </a>
          )}

          {attachmentFiles.attachmentFile2 && (
            <a
              href={attachmentFiles.attachmentFile2.localFile.url}
              target="_blank"
              rel="noreferrer"
            >
              {attachmentFiles.attachmentFileTitle2}
            </a>
          )}
        </div>
      </section>
    </article>
  );
};
