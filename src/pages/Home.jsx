import Layout from "../components/layout";
import Hero from "../components/home/hero";
import HeroProducts from "../components/home/heroProducts";
import HomeStandOut from "../components/home/homeStandOut";
import ProductsCategories from "../components/home/productsCategories";
import CultivateSuccess from "../components/home/cultivateSuccess";
import FeaturedProducts from "../components/home/featuredProducts";

function Home() {
  return (
    <Layout>
      <Hero />
      <ProductsCategories />
      <HeroProducts />
      <HomeStandOut />
      <CultivateSuccess />
      <FeaturedProducts />
      
    </Layout>
  );
}

export default Home;
