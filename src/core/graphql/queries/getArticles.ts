import { gql } from 'graphql-request';

const GET_ARTICLES = gql`
  query GET_ARTICLES {
    artigos {
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

export const GET_ARTICLES_SLUG = gql`
  query GET_ARTICLES_SLUG {
    artigos {
      slug
    }
  }
`;

export default GET_ARTICLES;
