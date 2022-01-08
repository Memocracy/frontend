require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: "Memocracy",
    description:
      "The Challenge of Populist Memory Politics for Europe: Towards Effective Responses to Militant Legilsation of the Past",
  },
  pathPrefix: "/snippets",
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@styles": "src/assets/styles"
        },
        extensions: []
      }
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          quality: 70,
          breakpoints: [750, 1080, 1366, 1920],
          backgroundColor: `transparent`,
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url: process.env.API_URL
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "./src/assets/images/logo-memocracy.svg",
        name: "Memocracy",
        short_name: "Memocracy",
        start_url: "/",
        background_color: "#FFF",
        theme_color: "#6BB6DD",
        display: "standalone",
      },
    },
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: "develop.memocracy.eu",
        acl: null,
      },
    },
  ],
};
