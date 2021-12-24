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
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
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
  ],
};
