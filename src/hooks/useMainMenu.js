import { useStaticQuery, graphql } from "gatsby";

export const useMainMenu = () => {
  const data = useStaticQuery(
    graphql`
      {
        allWpMenuItem(
          sort: { order: ASC, fields: order }
          filter: {
            locations: { eq: GATSBY_HEADER_MENU }
            parentDatabaseId: { eq: 0 }
          }
        ) {
          nodes {
            id
            label
            path
            order
            childItems {
              nodes {
                id
                label
                path
                order
              }
            }
          }
        }
      }
    `
  );
  return data.allWpMenuItem?.nodes;
};
