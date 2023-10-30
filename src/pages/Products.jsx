import Layout from "../components/layout";
import Fruits from "../components/products/fruits";
import HeadCategories from "../components/products/headCategories";
import Hero from "../components/products/hero";

const Products = () => {
  return (
    <Layout>
      <Hero />
      <HeadCategories />
      <Fruits />
    </Layout>
  );
};

export default Products;
