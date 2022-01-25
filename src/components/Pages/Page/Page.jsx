import React from "react";
import { graphql } from "gatsby";

const Post = ({ data }) => {
  return (
    <div>
      <pre>{JSON.stringify(data, null, 4)}</pre>
    </div>
  );
};

export const query = graphql`
  query ($id: String) {
    wpPage(id: { eq: $id }) {
      id
      title
      content
    }
  }
`;

export default Post;
