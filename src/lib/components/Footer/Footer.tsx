import { AiFillInstagram } from 'react-icons/ai';
import { BsArrowRight } from 'react-icons/bs';
import { IoLogoWhatsapp } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';
import Link from 'next/link';

function Footer() {
  return (
    <section className="py-12 lg:py-20 bg-primary-c-500 text-white">
      <div className="container mx-auto px-4 mb-12 md:mb-20">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full lg:w-1/3 px-4 mb-6 lg:mb-0">
            <Link href="/" passHref>
              <a
                className="inline-block text-gray-900 text-lg font-semibold"
                href="#"
              >
                <img src="images/logo.png" alt="" />
              </a>
            </Link>
            <Link href="#" passHref>
              <a className="flex mb-2 w-max items-center font-medium justify-center hover:underline hover:opacity-70 transition duration-200">
                Entre em contato
                <BsArrowRight color="#fff" size={22} className="ml-2" />
              </a>
            </Link>
            <Link href="/blog" passHref>
              <a className="flex mb-5 w-max items-center font-medium justify-center hover:underline hover:opacity-70 transition duration-200">
                Conheça nosso blog
                <BsArrowRight color="#fff" size={22} className="ml-2" />
              </a>
            </Link>
            <div className="flex">
              <a
                className="flex justify-center items-center w-10 h-10 mr-4 bg-red-50 rounded-full"
                href="#"
              >
                <IoLogoWhatsapp color="#2E3192" />
              </a>{' '}
              <a
                className="flex justify-center items-center w-10 h-10 mr-4 bg-red-50 rounded-full"
                href="#"
              >
                <MdEmail color="#2E3192" />
              </a>{' '}
              <a
                className="flex justify-center items-center w-10 h-10 mr-4 bg-red-50 rounded-full"
                href="#"
              >
                <AiFillInstagram color="#2E3192" />
              </a>{' '}
            </div>
          </div>
          <div className="w-full lg:w-2/3 px-4">
            <div className="flex flex-wrap justify-end -mx-4">
              <div className="w-1/2 lg:w-1/4 px-4 mb-8 lg:mb-0">
                <h3 className="mb-6 text-base font-medium">Endereço</h3>
                <ul className="text-sm">
                  <li className="mb-4">
                    <p className="text-gray-300">
                      Rua do Endereço, 123. Bairro do Endereço, Petrolina.
                      123456-789
                    </p>
                  </li>
                </ul>
              </div>
              <div className="w-1/2 lg:w-1/4 px-4 mb-8 lg:mb-0">
                <h3 className="mb-6 text-base font-medium">Nossos Serviços</h3>
                <ul className="text-sm">
                  <li className="mb-4">
                    <Link href="/servicos/planejamento" passHref>
                      <a className="text-gray-200 hover:text-gray-400" href="#">
                        Planejamento Previdenciário
                      </a>
                    </Link>
                  </li>
                  <li className="mb-4">
                    <a className="text-gray-200 hover:text-gray-400" href="#">
                      Aposentadoria
                    </a>
                  </li>
                  <li className="mb-4">
                    <a className="text-gray-200 hover:text-gray-400" href="#">
                      Serviço
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center text-sm text-gray-200 pt-8 px-4 border-t">
        Todos os direitos reservados à Barbosa Advocacia.{' '}
        {new Date().getFullYear()}.
      </p>
    </section>
  );
}

export default Footer;
