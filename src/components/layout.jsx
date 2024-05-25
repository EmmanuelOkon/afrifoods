import PropTypes from "prop-types";
import Header from "./Header";
import TopNav from "./TopNav";
import Footer from "./Footer";
import 'react-lazy-load-image-component/src/effects/blur.css';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <TopNav />
      <div className="items-center justify-between  2xl:w-[100%] 2xl:mx-auto sm:mx-auto ">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
