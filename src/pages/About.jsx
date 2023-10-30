import AboutStandOut from "../components/about/aboutStandOut";
import CultivateSuccess from "../components/about/cultivateSucces";
import FutureBright from "../components/about/futureBright";
import Hero from "../components/about/hero";
import Intro from "../components/about/intro";
import OurStory from "../components/about/ourStory";
import Layout from "../components/layout";

const About = () => {
  return (
    <Layout>
      <Hero />
      <Intro />
      <OurStory />
      <CultivateSuccess />
      <AboutStandOut />
      <FutureBright />
    </Layout>
  );
};

export default About;
