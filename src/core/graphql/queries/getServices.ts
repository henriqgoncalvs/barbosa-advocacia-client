import { gql } from 'graphql-request';

const GET_SERVICES = gql`
  query GET_SERVICES {
    servicos {
      id
      title
      short_description
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

export const GET_SERVICES_SLUG = gql`
  query GET_SERVICES_SLUG {
    servicos {
      slug
    }
  }
`;

export default GET_SERVICES;
