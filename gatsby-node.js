exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    {
      allWpPost {
        nodes {
          id
          uri
          slug
        }
      }
    }
  `);

  if (result.errors) {
    reporter.error("There was an error fetching posts", result.errors);
  }

  const { allWpPost } = result.data;

  // Define the template to use
  const template = require.resolve(`./src/components/Pages/Post`);

  if (allWpPost.nodes.length) {
    // eslint-disable-next-line array-callback-return
    allWpPost.nodes.map((post) => {
      actions.createPage({
        // It's best practice to use the uri field from WPGraphQL nodes when
        // building
        path: post.slug,
        component: template,
        context: post,
      });
    });
  }
};
