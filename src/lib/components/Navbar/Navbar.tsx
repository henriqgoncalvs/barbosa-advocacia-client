import Link from 'next/link';

function Navbar({ dark }: { dark?: boolean }) {
  return (
    <section className={`py-3 ${dark && 'bg-primary-c-500 text-white'}`}>
      <div className="container px-4 mx-auto">
        <nav className="relative">
          <div className="flex justify-between items-center">
            <Link href="/" passHref>
              <a className="text-lg font-medium">
                <img
                  src="/images/logo.png"
                  alt="Barbosa Advocacia"
                  width="NaN"
                />
              </a>
            </Link>
            <div className="lg:hidden">
              <button className="navbar-burger flex items-center p-3 hover:bg-gray-50 rounded">
                <svg
                  className="block h-4 w-4"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Mobile menu</title>
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
                  href="#"
                >
                  Blog
                </a>
              </Link>
              <a
                className={dark ? 'btn-secondary-filled' : 'btn-primary-filled'}
                href="#"
              >
                Entre em contato
              </a>
            </div>
          </div>
        </nav>
      </div>
      <div className="hidden navbar-menu relative z-50">
        <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
        <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
          <div className="flex items-center mb-8">
            <a className="mr-auto text-2xl font-medium leading-none" href="#">
              <img
                src="images/logo-1.png"
                alt="Barbosa Advocacia"
                width="NaN"
              />
            </a>
            <button className="navbar-close">
              <svg
                className="h-6 w-6 text-gray-500 cursor-pointer hover:text-gray-500"
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
          <div>
            <ul>
              <li className="mb-1">
                <a
                  className="block p-4 text-sm font-medium text-gray-900 hover:bg-gray-50 rounded"
                  href="#"
                >
                  Início
                </a>
              </li>
              <li className="mb-1">
                <a
                  className="block p-4 text-sm font-medium text-gray-900 hover:bg-gray-50 rounded"
                  href="#"
                >
                  Serviço
                </a>
              </li>
              <li className="mb-1">
                <a
                  className="block p-4 text-sm font-medium text-gray-900 hover:bg-gray-50 rounded"
                  href="#"
                >
                  Quem somos
                </a>
              </li>
            </ul>
          </div>
          <div className="mt-auto">
            <div className="pt-6">
              <a
                className="block mb-2 py-3 text-sm text-center leading-normal rounded border font-medium"
                href="#"
              >
                Blog
              </a>
              <a
                className="block py-3 text-sm text-center text-white leading-normal rounded bg-red-400 hover:bg-red-300 font-medium transition duration-200"
                href="#"
              >
                Entre em contato
              </a>
            </div>
            <p className="mt-6 mb-4 text-sm text-center text-gray-500">
              <span>© 2021 All rights reserved.</span>
            </p>
          </div>
        </nav>
      </div>
    </section>
  );
}

export default Navbar;
