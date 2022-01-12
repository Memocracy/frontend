import { useStaticQuery, graphql } from "gatsby";

export const useMainMenu = () => {
  const data = useStaticQuery(
    graphql`
      {
        allWpMenuItem(filter: { locations: { eq: GATSBY_HEADER_MENU } }) {
          nodes {
            id
            label
            path
          }
        }
      }
    `
  );
  return data.allWpMenuItem?.nodes;
};
