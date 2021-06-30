import { BsArrowRight } from 'react-icons/bs';

import Footer from 'lib/components/Footer';
import Navbar from 'lib/components/Navbar';
import ServicesCarousel from 'lib/components/ServicesCarousel';

function Servico() {
  return (
    <>
      <Navbar dark />
      <section className="py-20 bg-primary-c-500 text-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="mb-16">
              <h2 className="mb-6 text-4xl md:text-5xl font-semibold font-heading">
                Aposentadoria
              </h2>
              <a className="flex mt-8 w-max items-center text-white font-medium justify-center hover:opacity-70 transition duration-200">
                Contratar
                <BsArrowRight color="#fff" size={22} className="ml-2" />
              </a>
            </div>
            <p className="mb-6 text-lg lg:text-xl text-gray-300">
              Building websites from wireframes that I had received. Some of
              those questions were: <br />
              These types of questions led me to miss numerous deadlines, and I
              wasted time and energy in back-and-forth communication. Sadly,
              this situation could have been avoided if the wireframes had
              provided enough detail. <br />
              Now that I am a UX designer, I notice that some designers tend to
              forget that wireframes are equally creative and technical. We are
              responsible for designing great ideas, but we are also responsible
              for creating product specifications. I admit that there can be so
              many details to remember that it’s easy to lose track. To save
              time and energy for myself, I gathered all of my years of
              wireframing knowledge into a single checklist that I refer to
              throughout the process. And now I am sharing this knowledge with
              you, so that you can get back to being creative.
            </p>
            <a className="btn-secondary-filled mt-6" href="#">
              Contratar
            </a>
          </div>
        </div>
      </section>
      <ServicesCarousel title="Veja outros serviços" />
      <Footer />
    </>
  );
}

export default Servico;
