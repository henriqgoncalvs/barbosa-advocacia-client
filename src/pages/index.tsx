import { GetStaticProps } from 'next';

import client from 'core/graphql/client';
import GET_HOMEPAGE from 'core/graphql/queries/getHomepage';
import Footer from 'lib/components/Footer';
import BlogPosts from 'lib/components/Home/BlogPosts';
import CTA from 'lib/components/Home/CTA';
import Header from 'lib/components/Home/Header';
import PrevidenceServices from 'lib/components/Home/PrevidenceServices';
import WhoAreWe from 'lib/components/Home/WhoAreWe';
import Navbar from 'lib/components/Navbar';
import { HomepageProps } from 'lib/types/api';

type HomeProps = {
  homepage: HomepageProps;
};

export default function Home({ homepage }: HomeProps) {
  return (
    <>
      <Navbar />
      <Header data={homepage.hero} />
      <PrevidenceServices data={homepage.servicos_previdencia} />
      <WhoAreWe data={homepage.quem_somos} />
      <CTA data={homepage.cta} />
      <BlogPosts />
      <Footer />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { homepage } = await client.request(GET_HOMEPAGE);

  return {
    props: {
      homepage,
    },
    revalidate: 10,
  };
};
