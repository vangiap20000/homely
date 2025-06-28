import SiteHeader from "./__components/Header";
import Categories from "./__components/Categories";
import Properties from "./__components/Properties";
import FeaturedProperty from "./__components/FeaturedProperty";
import Testimonial from "./__components/Testimonial";
import Blog from "./__components/Blog";
import HeroSection from "./__components/HeroSection";
import Faq from "./__components/Faq";

const Home = () => {
  return (
    <>
      <SiteHeader />
      <Categories />
      <Properties />
      <FeaturedProperty />
      <Testimonial />
      <Blog />
      <HeroSection />
      <Faq />
    </>
  );
}

export default Home