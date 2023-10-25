import Layout from "../components/layout";
import Hero from "../components/home/hero";
import HeroProducts from "../components/home/heroProducts";
import HomeStandOut from "../components/home/homeStandOut";
import ProductsCategories from "../components/home/productsCategories";

function Home() {
  return (
    <Layout>
      <Hero />
      <ProductsCategories />
      <HeroProducts />
      <HomeStandOut />
      
    </Layout>
  );
}

export default Home;
