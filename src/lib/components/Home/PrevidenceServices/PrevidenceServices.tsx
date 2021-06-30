import Link from 'next/link';

function PrevidenceServices() {
  return (
    <section className="relative py-8 bg-primary-c-500 text-white">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="mt-8 mb-10 text-4xl font-semibold font-heading">
            Conheça nossos serviços de previdência.
          </h2>
          <p className="text-md tracking-wide">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="flex flex-wrap -m-3">
          <div className="w-full md:w-1/2 p-3">
            <div className="p-6 pb-12 text-center">
              <img
                className="w-full md:w-80 h-80 mx-auto mb-6 object-contain"
                src="/images/illust-planejamento.png"
                alt=""
              />
              <h3 className="mb-8 text-3xl font-semibold font-heading">
                Planejamento Previdenciário
              </h3>
              <p className="mb-8 text-gray-300">
                At eripuit signiferumque sea, vel ad mucius molestie, cu labitur
                iuvaret vulputate sed.
              </p>
              <div>
                <a
                  className="btn-secondary-filled mb-4 sm:mb-0 sm:mr-2 w-full sm:w-auto"
                  href="#"
                >
                  Contratar
                </a>
                <Link href="/servicos/planejamento-previdenciario" passHref>
                  <a className="btn-secondary-outline w-full sm:w-auto">
                    Saber mais
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 p-3">
            <div className="p-6 pb-12 text-center">
              <img
                className="w-full md:w-80 h-80 mx-auto mb-6 object-contain"
                src="/images/illust-descanso.png"
                alt=""
              />
              <h3 className="mb-8 text-3xl font-semibold font-heading break-words">
                Aposentadoria
              </h3>
              <p className="mb-8 text-gray-300">
                At eripuit signiferumque sea, vel ad mucius molestie, cu labitur
                iuvaret vulputate sed.
              </p>
              <div>
                <a
                  className="btn-secondary-filled mb-4 sm:mb-0 sm:mr-2 w-full sm:w-auto"
                  href="#"
                >
                  Contratar
                </a>
                <Link href="/servicos/aposentadoria" passHref>
                  <a className="btn-secondary-outline w-full sm:w-auto">
                    Saber mais
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PrevidenceServices;
