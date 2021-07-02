import { gql } from 'graphql-request';

const GET_FOOTER = gql`
  query GET_FOOTER {
    footer {
      adress
      whatsapp
      instagram
      mail
    }
  }
`;

export default GET_FOOTER;
