/* eslint-disable no-console */
const fs = require("fs");

exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    {
      allWpContentNode {
        nodes {
          id
          uri
          slug
          __typename
        }
      }
    }
  `);

  if (result.errors) {
    reporter.error("There was an error fetching posts", result.errors);
  }

  const { allWpContentNode } = result.data;

  // Define the template to use
  if (allWpContentNode.nodes.length) {
    // eslint-disable-next-line array-callback-return
    allWpContentNode.nodes.map((node) => {
      let template;

      // eslint-disable-next-line no-underscore-dangle
      const typeName = node.__typename.substr(2);
      const templatePath = `./src/components/Pages/${typeName}/${typeName}.jsx`;

      try {
        if (fs.existsSync(templatePath)) {
          template = require.resolve(templatePath)
        }
      } catch (err) {
        console.error(err)
      }

      if (template && node.slug) {
        actions.createPage({
          // It's best practice to use the uri field from WPGraphQL nodes when
          // building
          path: node.slug,
          component: template,
          context: node,
        });
      }
    });
  }
};
