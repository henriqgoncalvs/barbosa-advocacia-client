import _ from 'lodash';
import Link from 'next/link';

import ServicesCarousel from 'lib/components/ServicesCarousel';
import { PrevidenceServicesProps } from 'lib/types/api';
import { ServiceProps } from 'lib/types/services';

function PrevidenceServices({ data }: { data: PrevidenceServicesProps }) {
  const [mainServices, otherServices] = _.partition<ServiceProps>(
    data.servicos,
    ['is_main', true],
  );

  return (
    <section className="relative py-8 bg-primary-c-500 text-white">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="mt-8 mb-10 text-4xl font-semibold font-heading">
            {data?.title}
          </h2>
          <p className="text-md tracking-wide">{data?.description}</p>
        </div>
        <div className="flex flex-wrap -m-3">
          {mainServices.map((service, index) => (
            <div className="w-full md:w-1/2 p-3" key={service.id}>
              <div className="p-6 pb-12 text-center">
                <img
                  className="w-full md:w-80 h-80 mx-auto mb-6 object-contain"
                  src={`${
                    index
                      ? '/images/illust-descanso.png'
                      : '/images/illust-planejamento.png'
                  }`}
                  alt=""
                />
                <h3 className="mb-8 text-3xl font-semibold font-heading">
                  {service.title}
                </h3>
                <p className="mb-8 text-gray-300">
                  {service.short_description}
                </p>
                <div>
                  <a
                    className="btn-secondary-filled mb-4 sm:mb-0 sm:mr-2 w-full sm:w-auto"
                    href={service.contact_url}
                  >
                    Contratar
                  </a>
                  <Link href={`/servicos/${service.slug}`} passHref>
                    <a className="btn-secondary-outline w-full sm:w-auto">
                      Saber mais
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ServicesCarousel services={otherServices} />
    </section>
  );
}

export default PrevidenceServices;
