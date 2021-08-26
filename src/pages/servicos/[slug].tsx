import _ from 'lodash';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';

import client from 'core/graphql/client';
import GET_FOOTER from 'core/graphql/queries/getFooter';
import GET_SERVICE from 'core/graphql/queries/getService';
import GET_SERVICES, {
  GET_SERVICES_SLUG,
} from 'core/graphql/queries/getServices';
import Footer from 'lib/components/Footer';
import Navbar from 'lib/components/Navbar';
import ServicesCarousel from 'lib/components/ServicesCarousel';
import { FooterProps } from 'lib/types/footer';
import { ServiceProps } from 'lib/types/services';

import markdownToHTML from '@utils/markdownToHTML';

function Servico({
  service,
  services,
  footer,
}: {
  service: ServiceProps;
  services: ServiceProps[];
  footer: FooterProps;
}) {
  return (
    <>
      <Navbar dark contact={footer.whatsapp} />
      <section className="py-20 bg-primary-c-500 text-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="mb-16">
              <h2 className="mb-6 text-4xl md:text-5xl font-semibold font-heading">
                {service.title}
              </h2>
              {/* <a
                href={service.contact_url}
                className="flex mt-8 w-max items-center text-white font-medium justify-center hover:opacity-70 transition duration-200"
              >
                Contratar
                <BsArrowRight color="#fff" size={22} className="ml-2" />
              </a> */}
            </div>
            <div
              className="mb-6 text-lg lg:text-xl text-gray-300"
              dangerouslySetInnerHTML={{ __html: service.long_description }}
            />
            <a className="btn-secondary-filled mt-6" href={service.contact_url}>
              Contratar
            </a>
          </div>
        </div>
      </section>
      <ServicesCarousel services={services} title="Veja outros serviços" />
      <Footer data={footer} />
    </>
  );
}

export default Servico;

export const getStaticPaths: GetStaticPaths = async () => {
  const { servicos } = await client.request(GET_SERVICES_SLUG);
  const paths = servicos.map((service: { slug: string }) => ({
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
  const { servicos }: { servicos: ServiceProps[] } = await client.request(
    GET_SERVICE,
    {
      slug: slug,
    },
  );
  const { servicos: allservicos }: { servicos: ServiceProps[] } =
    await client.request(GET_SERVICES);

  const { footer } = await client.request(GET_FOOTER);

  const filteredServices = _.partition<ServiceProps>(allservicos, function (o) {
    return o.id !== servicos[0].id;
  });

  const servico = {
    ...servicos[0],
    long_description: await markdownToHTML(servicos[0].long_description),
  };

  return {
    props: {
      service: servico,
      services: filteredServices[0],
      footer,
    },
    revalidate: 10,
  };
};
