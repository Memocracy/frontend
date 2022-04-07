require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: "Memocracy",
    description:
      "The Challenge of Populist Memory Politics for Europe: Towards Effective Responses to Militant Legilsation of the Past",
    url: "https://memocracy.eu"
  },
  pathPrefix: "/snippets",
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-fresnel`,
      options: {
        breakpoints: {
          sm: 0,
          md: 768,
          lg: 1024,
          xl: 1192,
        },
      },
    },
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@fonts": "src/assets/fonts",
          "@images": "src/assets/images",
          "@styles": "src/assets/styles",
          "@components": "src/components",
        },
        extensions: [],
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          quality: 80,
          breakpoints: [750, 1080, 1366, 1920],
          backgroundColor: `transparent`,
        },
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Arimo:400,400i,700&display=swap"],
        },
        custom: {
          families: ["Acumin Pro ExtraCondensed"],
          urls: ["/fonts/fonts.css"]
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url: process.env.API_URL,
        html: {
          createStaticFiles: true,
          useGatsbyImage: true,
        },
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
    `gatsby-plugin-twitter`
  ],
};
