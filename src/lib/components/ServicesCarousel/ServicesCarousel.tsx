import { BsArrowRight } from 'react-icons/bs';
import Carousel from 'react-multi-carousel';
import responsiveConfig from 'config/carousel-config';
import Link from 'next/link';

import useDeviceType from 'lib/hooks/useDeviceType';
import { ServiceProps } from 'lib/types/services';

import 'react-multi-carousel/lib/styles.css';

function ServicesCarousel({
  title,
  services,
}: {
  title?: string;
  services: ServiceProps[];
}) {
  const deviceType = useDeviceType();

  return (
    <section className="py-4 bg-primary-c-500 pb-12 text-white">
      {services && (
        <div className="container mx-auto px-4">
          {title && (
            <h3 className="mb-6 text-3xl font-semibold font-heading">
              {title}
            </h3>
          )}
          <Carousel
            deviceType={deviceType}
            showDots
            ssr
            responsive={responsiveConfig}
            swipeable
          >
            {services.map((service) => (
              <div
                className="text-center px-3 mx-auto mb-6 w-11/12"
                key={service?.id}
              >
                <div className="p-6 md:p-8 h-full">
                  <span className="flex-shrink-0 flex items-center justify-center mb-8 mx-auto">
                    <img src={service?.icon.url} alt="" className="w-14" />
                  </span>
                  <div>
                    <h3 className="mb-4 text-2xl font-semibold font-heading">
                      {service?.title}
                    </h3>
                    <p className="text-base text-gray-300">
                      {service?.short_description}
                    </p>
                    <Link href={`/servicos/${service?.slug}`}>
                      <a className="flex mt-8 w-auto items-center font-medium justify-center hover:opacity-70 transition duration-200">
                        Saiba Mais
                        <BsArrowRight color="#fff" size={22} className="ml-2" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      )}
    </section>
  );
}

export default ServicesCarousel;
