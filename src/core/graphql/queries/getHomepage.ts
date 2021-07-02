import { gql } from 'graphql-request';

const GET_HOMEPAGE = gql`
  fragment hero on Homepage {
    hero {
      title
      description
    }
  }

  fragment servicos_previdencia on Homepage {
    servicos_previdencia {
      title
      description
      servicos {
        id
        title
        short_description
        contact_url
        is_main
        slug
        icon {
          url
        }
      }
    }
  }

  fragment quem_somos on Homepage {
    quem_somos {
      title
      name
      description
      presentation_video_url
    }
  }

  fragment cta on Homepage {
    cta {
      title
    }
  }

  fragment blog_section on Homepage {
    blog_section {
      title
      artigos {
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
  }

  query GET_HOMEPAGE {
    homepage {
      ...hero
      ...servicos_previdencia
      ...quem_somos
      ...cta
      ...blog_section
    }
  }
`;

export default GET_HOMEPAGE;
