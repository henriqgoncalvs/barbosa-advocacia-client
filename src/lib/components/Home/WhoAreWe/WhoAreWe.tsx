import { MdPlayCircleOutline } from 'react-icons/md';
import Image from 'next/image';

function WhoAreWe() {
  return (
    <section className="py-12">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto mb-12 lg:mb-20 text-center">
          <h2 className="mt-8 mb-10 text-3xl font-semibold font-heading">
            Quem somos
          </h2>
        </div>
        <div className="flex flex-wrap flex-col-reverse lg:flex-row -mx-4 items-center mb-12 lg:mb-20">
          <div className="w-full lg:w-1/2 px-4 mb-10 lg:mb-0">
            <h2 className="mt-8 mb-10 text-5xl leading-tight font-semibold font-heading">
              Ulysses Barbosa - Advogado
            </h2>
            <p className="text-xl text-gray-500 mb-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque massa nibh, pulvinar vitae aliquet nec, accumsan
              aliquet orci.
            </p>
            <a className="flex mt-8 w-max mr-auto text-primary-c-500 items-center font-bold justify-start hover:opacity-70 transition duration-200">
              <MdPlayCircleOutline color="#2E3192" size={32} className="mr-2" />
              Assistir vídeo de apresentação
            </a>
          </div>
          <div className="relative mx-auto w-1/2 px-4 rounded-lg">
            <Image
              width={2700}
              height={2700}
              className="object-cover object-center"
              src="/images/perfil.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhoAreWe;
