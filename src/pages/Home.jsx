import Layout from "../components/layout";
import Hero from "../components/home/hero";
import HeroProducts from "../components/home/heroProducts";

function Home() {
  return (
    <Layout>
      <Hero />
      <HeroProducts />
      Welcome to the home page
    </Layout>
  );
}

export default Home;
