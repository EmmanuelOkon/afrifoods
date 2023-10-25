import PropTypes from "prop-types";
import Header from "./Header";
import TopNav from "./TopNav";
// import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <TopNav />

      <div className="items-center justify-between  2xl:w-[100%] 2xl:mx-auto sm:mx-auto ">
        <main>{children}</main>
      </div>
      {/* <Footer /> */}
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
