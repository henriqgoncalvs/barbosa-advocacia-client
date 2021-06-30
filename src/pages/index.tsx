import Footer from 'lib/components/Footer';
import BlogPosts from 'lib/components/Home/BlogPosts';
import CTA from 'lib/components/Home/CTA';
import Header from 'lib/components/Home/Header';
import PrevidenceServices from 'lib/components/Home/PrevidenceServices';
import WhoAreWe from 'lib/components/Home/WhoAreWe';
import Navbar from 'lib/components/Navbar';
import ServicesCarousel from 'lib/components/ServicesCarousel';

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <PrevidenceServices />
      <ServicesCarousel />
      <WhoAreWe />
      <CTA />
      <BlogPosts />
      <Footer />
    </>
  );
}
