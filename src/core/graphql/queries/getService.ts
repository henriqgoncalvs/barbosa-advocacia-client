import { gql } from 'graphql-request';

const GET_SERVICE = gql`
  query GET_SERVICE($slug: String) {
    servicos(where: { slug: $slug }) {
      id
      title
      long_description
      contact_url
      is_main
      slug
      icon {
        url
      }
    }
  }
`;

export default GET_SERVICE;
