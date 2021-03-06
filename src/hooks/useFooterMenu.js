import { useStaticQuery, graphql } from "gatsby";

export const useFooterMenu = () => {
  const data = useStaticQuery(
    graphql`
      {
        allWpMenuItem(
          filter: { locations: { eq: GATSBY_FOOTER_MENU } }
          sort: { order: ASC, fields: order }
        ) {
          nodes {
            id
            label
            path
            order
          }
        }
      }
    `
  );
  return data.allWpMenuItem?.nodes;
};
