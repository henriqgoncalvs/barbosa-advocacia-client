import { GetStaticProps } from 'next';
import Link from 'next/link';

import client from 'core/graphql/client';
import GET_ARTICLES from 'core/graphql/queries/getArticles';
import GET_BLOG_PAGE from 'core/graphql/queries/getBlogPage';
import GET_FOOTER from 'core/graphql/queries/getFooter';
import Footer from 'lib/components/Footer';
import Navbar from 'lib/components/Navbar';
import { BlogPageProps } from 'lib/types/api';
import { ArticleProps } from 'lib/types/article';
import { FooterProps } from 'lib/types/footer';

import formatDate from '@utils/formatDate';

function Blog({
  blogPage,
  articles,
  footer,
}: {
  blogPage: BlogPageProps;
  articles: ArticleProps[];
  footer: FooterProps;
}) {
  const [mainArticles, restArticles] = [
    [articles[0], articles[1]],
    articles.splice(1),
  ];
  return (
    <>
      <Navbar />
      <div>
        <section className="relative py-12">
          <div className="container px-4 mx-auto">
            <div className="max-w-2xl mb-20">
              <h2 className="mt-8 mb-10 text-4xl font-semibold font-heading">
                {blogPage?.title_most_read}
              </h2>
              <p className="text-xl text-gray-500">
                {blogPage?.description_most_read}
              </p>
            </div>
            <div className="flex flex-wrap -mx-4 -mb-16">
              {mainArticles[0] && (
                <div className="w-full lg:w-2/3 px-4 mb-16">
                  <div className="flex h-96 mb-10">
                    <img
                      className="w-full h-full object-cover rounded-xl"
                      src={mainArticles[0]?.banner.url}
                      alt=""
                    />
                  </div>
                  <span className="inline-block mb-4 text-xs text-gray-500">
                    {formatDate(mainArticles[0]?.created_at)}
                  </span>
                  <h2 className="mb-4 text-3xl font-semibold font-heading">
                    {mainArticles[0]?.title}
                  </h2>
                  <p className="mb-4 text-xl text-gray-500">
                    {mainArticles[0]?.content.slice(0, 150) + '...'}
                  </p>
                  <Link href={`/artigo/${mainArticles[0]?.slug}`} passHref>
                    <a className="btn-primary-filled mx-auto" href="#">
                      Leia mais
                    </a>
                  </Link>
                </div>
              )}
              {mainArticles[1] && (
                <div className="w-full lg:w-1/3 px-4 mb-16">
                  <div className="flex h-96 mb-10">
                    <img
                      className="w-full h-full object-cover rounded-xl"
                      src={mainArticles[1]?.banner.url}
                      alt=""
                    />
                  </div>
                  <span className="inline-block mb-4 text-xs text-gray-500">
                    {formatDate(mainArticles[1]?.created_at)}
                  </span>
                  <h2 className="mb-4 text-3xl font-semibold font-heading">
                    {mainArticles[1]?.title}
                  </h2>
                  <p className="mb-4 text-xl text-gray-500">
                    {mainArticles[1]?.content.slice(0, 150) + '...'}
                  </p>
                  <Link href={`/artigo/${mainArticles[1]?.slug}`} passHref>
                    <a className="btn-primary-filled mx-auto" href="#">
                      Leia mais
                    </a>
                  </Link>
                </div>
              )}

              {/* <div className="w-full lg:w-1/3 px-4 mb-16">
                <div className="flex h-96 mb-10">
                  <img
                    className="w-full h-full object-cover rounded-xl"
                    src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80"
                    alt=""
                  />
                </div>
                <span className="text-xs font-semibold text-gray-500">
                  10 jun 2020 19:40
                </span>
                <h2 className="mb-4 text-3xl font-semibold font-heading">
                  Lorem ipsum dolor
                </h2>
                <p className="mb-4 text-xl text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <Link href="/artigo/1" passHref>
                  <a className="btn-primary-filled mx-auto" href="#">
                    Leia mais
                  </a>
                </Link>
              </div> */}
            </div>
          </div>
        </section>
        {restArticles.length > 0 && (
          <section className="relative py-16">
            <div className="container px-4 mx-auto">
              <div className="max-w-2xl mb-20">
                <h2 className="mt-8 mb-10 text-3xl font-semibold font-heading">
                  {blogPage?.title_all_articles}
                </h2>
              </div>
              <div className="flex flex-wrap -mx-4 -mb-12 lg:-mb-16">
                {restArticles.map((article) => (
                  <div
                    key={article.id}
                    className="w-full md:w-1/2 lg:w-1/3 px-4 mb-12 lg:mb-16"
                  >
                    <div className="relative h-52 mb-6">
                      <span className="absolute top-0 right-0 mt-4 mr-4 text-xs text-white px-2 py-1 font-semibold bg-gray-600 bg-opacity-50 rounded-md uppercase">
                        {article.topic}
                      </span>
                      <img
                        className="w-full h-full object-cover rounded-lg"
                        src={article.banner.url}
                        alt=""
                      />
                    </div>
                    <span className="inline-block mb-4 text-xs text-gray-500">
                      {formatDate(article.created_at)}
                    </span>
                    <h2 className="mb-4 text-3xl font-semibold font-heading">
                      {article.title}
                    </h2>
                    <p className="mb-4 lg:mb-8 text-base text-gray-500">
                      {article.content}
                    </p>
                    <Link href={`/artigo/${article.slug}`} passHref>
                      <a className="btn-primary-filled mx-auto" href="#">
                        Leia mais
                      </a>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>
      <Footer data={footer} />
    </>
  );
}

export default Blog;

export const getStaticProps: GetStaticProps = async () => {
  const { artigos }: { artigos: ArticleProps[] } = await client.request(
    GET_ARTICLES,
  );

  const { blogPage }: { blogPage: BlogPageProps } = await client.request(
    GET_BLOG_PAGE,
  );

  const { footer } = await client.request(GET_FOOTER);

  return {
    props: {
      articles: artigos,
      blogPage,
      footer,
    },
    revalidate: 10,
  };
};
