import { gql } from 'graphql-request';

const GET_ARTICLE = gql`
  query GET_ARTICLE($slug: String) {
    artigos(where: { slug: $slug }) {
      id
      title
      content
      banner {
        url
      }
      slug
      topic
      created_at
    }
  }
`;

export default GET_ARTICLE;
