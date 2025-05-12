import SiteHeader from "./__components/Header";
import Categories from "./__components/Categories";
import Properties from "./__components/Properties";
import FeaturedProperty from "./__components/FeaturedProperty";

const Home = () => {
  return (
    <>
      <SiteHeader />
      <Categories />
      <Properties />
      <FeaturedProperty />
    </>
  );
}

export default Home