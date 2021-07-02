import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';

import client from 'core/graphql/client';
import GET_ARTICLE from 'core/graphql/queries/getArticle';
import { GET_ARTICLES_SLUG } from 'core/graphql/queries/getArticles';
import GET_FOOTER from 'core/graphql/queries/getFooter';
import Footer from 'lib/components/Footer';
import Navbar from 'lib/components/Navbar';
import { ArticleProps } from 'lib/types/article';
import { FooterProps } from 'lib/types/footer';

import formatDate from '@utils/formatDate';
import markdownToHTML from '@utils/markdownToHTML';

function Article({
  article,
  footer,
}: {
  article: ArticleProps;
  footer: FooterProps;
}) {
  return (
    <>
      <Navbar dark contact={footer.whatsapp} />
      <section className="relative pt-20 bg-primary-c-500 text-white">
        <div className="container px-4 mx-auto">
          <div className="relative h-96 mb-16">
            <span className="absolute top-0 right-0 mt-4 mr-4 text-xs text-white px-2 py-1 font-semibold bg-gray-600 bg-opacity-50 rounded-md uppercase">
              {article.topic}
            </span>
            <img
              className="w-full h-full object-cover object-top rounded-lg"
              src={article.banner.url}
              alt=""
            />
          </div>
          <div className="max-w-2xl mx-auto pb-16">
            <h2 className="mb-4 text-4xl font-semibold font-heading">
              {article.title}
            </h2>
            <span className="inline-block text-xs">
              {formatDate(article.created_at)}
            </span>
          </div>
        </div>
      </section>
      <section className="pb-20 bg-primary-c-500 text-gray-200">
        <div className="container px-4 mx-auto">
          <div className="max-w-2xl mx-auto">
            <div
              className="mb-6 text-xl"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </div>
        </div>
      </section>
      <Footer data={footer} />
    </>
  );
}

export default Article;

export const getStaticPaths: GetStaticPaths = async () => {
  const { artigos } = await client.request(GET_ARTICLES_SLUG);
  const paths = artigos.map((service: { slug: string }) => ({
    params: {
      slug: service.slug,
    },
  }));

  return {
    fallback: 'blocking',
    paths,
  };
};

export const getStaticProps: GetStaticProps = async (
  ctx: GetStaticPropsContext,
) => {
  const slug = ctx.params?.slug;
  const { artigos }: { artigos: ArticleProps[] } = await client.request(
    GET_ARTICLE,
    {
      slug: slug,
    },
  );
  // const { artigos: allartigos }: { artigos: ArticleProps[] } =
  //   await client.request(GET_ARTICLES);

  // const filteredServices = _.partition<ArticleProps>(allartigos, function (o) {
  //   return o.id !== artigos[0].id;
  // });

  const { footer } = await client.request(GET_FOOTER);

  const artigo = {
    ...artigos[0],
    content: await markdownToHTML(artigos[0].content),
  };

  return {
    props: {
      article: artigo,
      footer,
      // services: filteredServices[0],
    },
    revalidate: 10,
  };
};
