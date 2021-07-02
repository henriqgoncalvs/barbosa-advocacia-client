import { CTAProps } from 'lib/types/api';

function CTA({ data, contact }: { data: CTAProps; contact: string }) {
  return (
    <section className="relative py-16 bg-primary-c-500 text-white">
      <img
        className="hidden xl:block absolute bottom-8 left-10 w-2/12"
        src="/images/illust-chat.png"
        alt=""
      />
      <img
        className="hidden xl:block absolute top-8 right-10 w-2/12"
        src="/images/illust-designer.png"
        alt=""
      />
      <div className="relative container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="mt-8 mb-6 lg:mb-10 text-5xl font-semibold">
            {data.title}
          </h2>
          <a
            className="inline-block w-full md:w-auto mb-2 mr-4 py-4 px-8 text-md uppercase font-bold leading-normal bg-white hover:bg-gray-400 text-primary-c-500 transition duration-200"
            href={`https://api.whatsapp.com/send?phone=${contact}`}
          >
            Entre em contato
          </a>
        </div>
      </div>
    </section>
  );
}

export default CTA;
