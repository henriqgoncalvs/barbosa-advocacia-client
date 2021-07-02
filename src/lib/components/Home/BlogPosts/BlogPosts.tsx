import { BsArrowRight } from 'react-icons/bs';
import _ from 'lodash';
import Link from 'next/link';

import { BlogSectionProps } from 'lib/types/api';

import formatDate from '@utils/formatDate';

function BlogPosts({ data }: { data: BlogSectionProps }) {
  return (
    <section className="relative py-12">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mb-20">
          <h2 className="mt-8 mb-10 text-3xl font-semibold font-heading">
            {data.title}
          </h2>
          <Link href="/blog" passHref>
            <a className="flex mt-8 w-max items-center text-primary-c-500 font-bold justify-center hover:opacity-70 transition duration-200">
              Ver todos os posts
              <BsArrowRight color="#2E3192" size={22} className="ml-2" />
            </a>
          </Link>
        </div>
        <div className="flex flex-wrap -m-3 mb-16">
          {_.take(data.artigos, 3).map((article) => (
            <div className="w-full md:w-1/2 lg:w-1/3 p-3" key={article.slug}>
              <div className="p-6 border rounded-xl">
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
                <h2 className="mb-4 text-2xl font-semibold font-heading">
                  {article.title}
                </h2>
                <p className="mb-4 text-gray-500 leading-relaxed">
                  {article.content.slice(0, 150) + '...'}
                </p>
                <Link href={`/artigo/${article.slug}`}>
                  <a className="btn-primary-filled mx-auto" href="#">
                    Leia mais
                  </a>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BlogPosts;
