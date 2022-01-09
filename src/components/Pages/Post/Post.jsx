import React from "react";
import { graphql } from "gatsby";
import { Meta } from "../../Other/Meta";

const Post = ({
  data: {
    wpPost: { title, content, id },
  },
}) => {
  return (
    <div>
      <Meta title={title} />
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export const query = graphql`
  query ($id: String) {
    wpPost(id: { eq: $id }) {
      id
      title
      content
    }
  }
`;

export default Post;
