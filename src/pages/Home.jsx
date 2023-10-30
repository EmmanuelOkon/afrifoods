import Layout from "../components/layout";
import Hero from "../components/home/hero";
import HeroProducts from "../components/home/heroProducts";
import HomeStandOut from "../components/home/homeStandOut";
import ProductsCategories from "../components/home/productsCategories";
import CultivateSuccess from "../components/home/cultivateSuccess";
import FeaturedProducts from "../components/home/featuredProducts";
import CustomerReview from "../components/home/customerReview";
import ReadyExperience from "../components/home/readyExperience";
import HomeFaq from "../components/home/homeFaq";
import FootGallery from "../components/home/footGallery";

function Home() {
  return (
    <Layout>
      <Hero />
      <ProductsCategories />
      <HeroProducts />
      <HomeStandOut />
      <CultivateSuccess />
      <FeaturedProducts />
      <CustomerReview />
      <ReadyExperience />
      <HomeFaq />
      <FootGallery />
      
    </Layout>
  );
}

export default Home;
