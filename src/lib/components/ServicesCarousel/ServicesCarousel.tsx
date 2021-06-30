import { BsArrowRight } from 'react-icons/bs';
import Carousel from 'react-multi-carousel';
import responsiveConfig from 'config/carousel-config';
import Link from 'next/link';

import useDeviceType from 'lib/hooks/useDeviceType';

import 'react-multi-carousel/lib/styles.css';

function ServicesCarousel({ title }: { title?: string }) {
  const deviceType = useDeviceType();

  return (
    <section className="py-4 bg-primary-c-500 pb-12 text-white">
      <div className="container mx-auto px-4">
        {title && (
          <h3 className="mb-6 text-3xl font-semibold font-heading">{title}</h3>
        )}
        <Carousel
          deviceType={deviceType}
          showDots
          ssr
          responsive={responsiveConfig}
          centerMode
          // removeArrowOnDeviceType={['mobile']}
          swipeable
          className="w-full justify-between"
        >
          <div className="text-center px-3 mb-6">
            <div className="p-6 md:p-8 h-full">
              <span className="flex-shrink-0 flex items-center justify-center mb-8 mx-auto">
                <img src="/icons/briefcase.svg" alt="" className="w-14" />
              </span>
              <div>
                <h3 className="mb-4 text-2xl font-semibold font-heading">
                  Serviço
                </h3>
                <p className="text-base text-gray-300">
                  Take care to develop resources continually and integrity them
                  with previous projects. More interesting writings for your
                  customers.
                </p>
                <Link href="/servicos/servico">
                  <a className="flex mt-8 w-auto items-center font-medium justify-center hover:opacity-70 transition duration-200">
                    Saiba Mais
                    <BsArrowRight color="#fff" size={22} className="ml-2" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="text-center px-3 mb-6 lg:mb-0">
            <div className="p-6 md:p-8 h-full">
              <span className="flex-shrink-0 flex items-center justify-center mb-8 mx-auto">
                <img src="/icons/briefcase.svg" alt="" className="w-14" />
              </span>
              <div>
                <h3 className="mb-4 text-2xl font-semibold font-heading">
                  Serviço 2
                </h3>
                <p className="text-base text-gray-300">
                  Take care to develop resources continually and integrity them
                  with previous projects. More interesting writings for your
                  customers.
                </p>
                <Link href="/servicos/servico">
                  <a className="flex mt-8 w-auto items-center font-medium justify-center hover:opacity-70 transition duration-200">
                    Saiba Mais
                    <BsArrowRight color="#fff" size={22} className="ml-2" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="text-center px-3 mb-6 lg:mb-0">
            <div className="p-6 md:p-8 h-full">
              <span className="flex-shrink-0 flex items-center justify-center mb-8 mx-auto">
                <img src="/icons/briefcase.svg" alt="" className="w-14" />
              </span>
              <div>
                <h3 className="mb-4 text-2xl font-semibold font-heading">
                  Serviço 3
                </h3>
                <p className="text-base text-gray-300">
                  Take care to develop resources continually and integrity them
                  with previous projects. More interesting writings for your
                  customers.
                </p>
                <Link href="/servicos/servico">
                  <a className="flex mt-8 w-auto items-center font-medium justify-center hover:opacity-70 transition duration-200">
                    Saiba Mais
                    <BsArrowRight color="#fff" size={22} className="ml-2" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
}

export default ServicesCarousel;
