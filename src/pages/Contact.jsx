import ContactForm from "../components/contact/contactForm";
import ContactMap from "../components/contact/contactMap";
import Hero from "../components/contact/hero";
import Layout from "../components/layout";

const Contact = () => {
  return (
    <Layout>
      <Hero />
      <ContactForm />
      <ContactMap />
    </Layout>
  );
};

export default Contact;
