import { useState } from 'react';
import Link from 'next/link';

function Navbar({ dark }: { dark?: boolean }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev: boolean) => !prev);
  };

  return (
    <section className={`py-3 ${dark && 'bg-primary-c-500 text-white pt-6'}`}>
      <div className={`container px-4 mx-auto`}>
        <nav className="relative">
          <div className="flex justify-between items-center">
            <Link href="/" passHref>
              <a className="text-lg font-medium">
                <img
                  src={`${
                    dark ? '/images/logo_white.png' : '/images/logo.png'
                  }`}
                  alt="Barbosa Advocacia"
                  className={`${dark ? 'w-28' : 'w-16'}`}
                />
              </a>
            </Link>
            <div className="lg:hidden">
              <button
                className="navbar-burger flex items-center p-3 hover:bg-gray-50 rounded"
                onClick={toggleMobileMenu}
              >
                <svg
                  className="block h-6 w-6 text-primary-c-500"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Menu Mobile</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                </svg>
              </button>
            </div>

            <div className="hidden lg:block">
              <Link href="/blog" passHref>
                <a
                  className={`mr-2 ${
                    dark ? 'btn-secondary-outline' : 'btn-primary-outline'
                  }`}
                >
                  Blog
                </a>
              </Link>
              <a
                className={dark ? 'btn-secondary-filled' : 'btn-primary-filled'}
              >
                Entre em contato
              </a>
            </div>
          </div>
        </nav>
      </div>
      <div
        className={`${!mobileMenuOpen && 'hidden'} navbar-menu relative z-50`}
      >
        <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
        <nav className="fixed top-0 right-0 bottom-0 flex flex-col w-full max-w-sm py-6 px-6 bg-primary-c-500 border-r overflow-y-auto">
          <div className="flex items-center mb-8">
            <a className="mr-auto text-2xl font-medium leading-none" href="#">
              <img
                src="images/logo_white.png"
                className="w-32"
                alt="Barbosa Advocacia"
              />
            </a>
            <button className="navbar-close" onClick={toggleMobileMenu}>
              <svg
                className="h-8 w-8 -mt-5 text-white cursor-pointer hover:text-gray-200"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <div className="mt-auto">
            <div className="pt-6">
              <a className="block mb-2 w-max btn-secondary-filled" href="#">
                Entre em contato
              </a>
              <a className="block w-max btn-secondary-outline" href="#">
                Blog
              </a>
            </div>
            <img src="/images/illust-codigo.png" className="my-10" />
            <p className="mt-6 mb-4 text-sm text-center text-gray-200">
              <span>
                Todos os direitos reservados à Barbosa Advocacia.{' '}
                {new Date().getFullYear()}.
              </span>
            </p>
          </div>
        </nav>
      </div>
    </section>
  );
}

export default Navbar;
