/* eslint-disable no-console */
const fs = require("fs");
const path = require("path");

const pageSize = 6;

/**
 * Helper for creating paginated pages based on categories.
 *
 * @param {*} data
 * @param {*} createPage
 */
const createPaginationPages = (categories, createPage) => {
  const { categorizedPosts } = categories;

  // Loop through the categories
  // eslint-disable-next-line array-callback-return
  categorizedPosts.map((category) => {
    const pageCount = Math.ceil(category.edges.length / pageSize);
    const { fieldValue: categoryName } = category;
    let template;
    let templateFull;
    let niceHeader;

    // Switch based on a category slug
    switch (categoryName) {
      /* case "project-workshops":
        template = "./src/components/Pages/Categories/ProjectWorkshops.jsx";
        break; */
      case "podcasts":
        niceHeader = "podcasts";
        template = "./src/components/Pages/Categories/MediaCategory.jsx";
        break;
      case "printed-media":
        niceHeader = "printed";
        template = "./src/components/Pages/Categories/MediaCategory.jsx";
        break;
      case "videos":
        niceHeader = "videos";
        template = "./src/components/Pages/Categories/MediaCategory.jsx";
        break;
      case "news":
        template = "./src/components/Pages/Categories/News.jsx";
        templateFull = "./src/components/Pages/Categories/NewsFull.jsx";
        break;
      default:
        template = false;
        templateFull = false;
    }

    /**
     * Create category pagination
     */
    if (template) {
      Array.from({ length: pageCount }).forEach((_, i) => {
        createPage({
          path: i === 0 ? `/${categoryName}` : `/${categoryName}/${i + 1}`,
          component: path.resolve(template),
          context: {
            skip: i * pageSize,
            limit: pageSize,
            pageCount,
            currentPage: i + 1,
            base: categoryName,
            niceHeader
          },
        });
      });
    }

    /**
     * Create permalinks.
     */
    if (templateFull) {
      category.edges.map((r) => {
        const urlHandle = `/${categoryName}/${r.node.slug}`;

        return createPage({
          path: urlHandle,
          component: path.resolve(templateFull),
          context: {
            slug: r.node.slug,
            id: r.node.id,
          },
        });
      });
    }
  });
};

exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    {
      pages: allWpContentNode(filter: { nodeType: { eq: "Page" } }) {
        nodes {
          id
          uri
          slug
          __typename
        }
      }

      categories: allWpPost {
        categorizedPosts: group(field: categories___nodes___slug) {
          fieldValue
          edges {
            node {
              id
              title
              date(formatString: "MMMM DD, YYYY")
              content
              slug
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.error("There was an error fetching posts", result.errors);
  }

  const { pages, categories } = result.data;

  /**
   * Categories
   */
  createPaginationPages(categories, actions.createPage);

  /**
   * Page nodes
   */
  if (pages.nodes.length) {
    // eslint-disable-next-line array-callback-return
    pages.nodes.map((node) => {
      let template;

      // eslint-disable-next-line no-underscore-dangle
      const templatePath = `./src/components/Pages/Page/Page.jsx`;

      try {
        if (fs.existsSync(templatePath)) {
          template = require.resolve(templatePath);
        }
      } catch (err) {
        console.error(err);
      }

      if (template && node.slug) {
        actions.createPage({
          // It's best practice to use the uri field from WPGraphQL nodes when
          // building
          path: node.slug,
          component: template,
          context: {
            slug: node.slug,
            id: node.id,
          },
        });
      }
    });
  }
};
