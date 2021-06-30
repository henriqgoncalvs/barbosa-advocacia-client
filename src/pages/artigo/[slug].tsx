import Footer from 'lib/components/Footer';
import Navbar from 'lib/components/Navbar';

function Article() {
  return (
    <>
      <Navbar dark />
      <section className="relative pt-20 bg-primary-c-500 text-white">
        <div className="container px-4 mx-auto">
          <div className="relative h-96 mb-16">
            <span className="absolute top-0 right-0 mt-4 mr-4 text-xs text-white px-2 py-1 font-semibold bg-gray-600 bg-opacity-50 rounded-md uppercase">
              Development
            </span>
            <img
              className="w-full h-full object-cover object-top rounded-lg"
              src="https://images.unsplash.com/photo-1525129498994-580709352e20?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80"
              alt=""
            />
          </div>
          <div className="max-w-2xl mx-auto pb-16">
            <h2 className="mb-4 text-4xl font-semibold font-heading">
              Lorem ipsum dolor sit amet consectutar domor at elis
            </h2>
            <span className="inline-block text-xs">10 jun 2020 19:40</span>
          </div>
        </div>
      </section>
      <section className="pb-20 bg-primary-c-500 text-gray-200">
        <div className="container px-4 mx-auto">
          <div className="max-w-2xl mx-auto">
            <p className="mb-6 text-xl">
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
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Article;
