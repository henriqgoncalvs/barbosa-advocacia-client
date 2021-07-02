import { gql } from 'graphql-request';

const GET_BLOG_PAGE = gql`
  query GET_BLOG_PAGE {
    blogPage {
      title_most_read
      description_most_read
      title_all_articles
    }
  }
`;

export default GET_BLOG_PAGE;
