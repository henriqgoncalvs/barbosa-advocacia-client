function Header() {
  return (
    <section className="pb-20">
      <div className="container px-4 mx-auto pt-12">
        <div className="flex flex-col-reverse md:flex-row items-center -mx-4 w-full">
          <div className="w-full md:w-1/2 px-4 mb-6 md:mb-0">
            <h2 className="mt-8 mb-6 lg:mb-8 text-4xl leading-snug lg:text-5xl lg:leading-tight font-semibold">
              Seu escritório previdenciário nunca foi tão moderno.
            </h2>
            <div className="max-w-lg mb-6 lg:mb-8">
              <p className="text-lg md:text-xl text-gray-500">
                Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad,
                nam no suscipit quaerendum. At nam minimum ponderum. Est audiam
                animal molestiae te.
              </p>
            </div>
            <div className="flex flex-wrap">
              <a
                className="inline-block mb-3 mr-4 text-sm font-medium btn-primary-filled normal-case"
                href="#"
              >
                Entre em contato
              </a>
            </div>
          </div>
          <div className="relative w-full md:w-1/2 px-4">
            <img className="relative" src="images/illust-header.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
