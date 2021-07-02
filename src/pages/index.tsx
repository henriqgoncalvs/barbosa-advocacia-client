import { GetStaticProps } from 'next';

import client from 'core/graphql/client';
import GET_FOOTER from 'core/graphql/queries/getFooter';
import GET_HOMEPAGE from 'core/graphql/queries/getHomepage';
import Footer from 'lib/components/Footer';
import BlogPosts from 'lib/components/Home/BlogPosts';
import CTA from 'lib/components/Home/CTA';
import Header from 'lib/components/Home/Header';
import PrevidenceServices from 'lib/components/Home/PrevidenceServices';
import WhoAreWe from 'lib/components/Home/WhoAreWe';
import Navbar from 'lib/components/Navbar';
import { HomepageProps } from 'lib/types/api';
import { FooterProps } from 'lib/types/footer';

type HomeProps = {
  homepage: HomepageProps;
  footer: FooterProps;
};

export default function Home({ homepage, footer }: HomeProps) {
  return (
    <>
      <Navbar />
      <Header data={homepage.hero} contact={footer.whatsapp} />
      <PrevidenceServices data={homepage.servicos_previdencia} />
      <WhoAreWe data={homepage.quem_somos} />
      <CTA data={homepage.cta} contact={footer.whatsapp} />
      <BlogPosts data={homepage.blog_section} />
      <Footer data={footer} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { homepage } = await client.request(GET_HOMEPAGE);
  const { footer } = await client.request(GET_FOOTER);

  return {
    props: {
      homepage,
      footer,
    },
    revalidate: 10,
  };
};
