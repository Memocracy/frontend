import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import * as style from "./TemporaryPage.module.scss";


export default function TemporaryPage() {
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
    <>
      <Helmet>
        <title>{data.site.siteMetadata.title}</title>
        <meta name="description" content={data.site.siteMetadata.description} />
      </Helmet>
      <main className={style.fullPageContainer}>
        <StaticImage
          src="../../assets/images/europa-illustration.jpg"
          alt="Europe map"
          style={{height: "100vh", width: "100vw"}}
        />
        <StaticImage
          src="../../assets/images/Baner_memocracy_logotekst.svg"
          alt="Europe map"
          placeholder="blurred"
          style={{height: "auto", width: "66vw", position: "absolute"}}
        />
      </main>
    </>
  );
}
