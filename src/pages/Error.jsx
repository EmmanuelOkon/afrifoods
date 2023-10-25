// import Head from "../components/head";
import Layout from "../components/layout";

const Error = () => {
  return (
    <Layout>
      {/* <Head /> */}
      <div className="pt[20rem] flex items-center h-screen justify-center w-full bg-fadeOrange ">
        <div className="flex-col justify-center text-center">
          <h1 className="text-9xl font-bold font-roboto">404</h1>
          <h1 className="font-raleway font-medium text-lg">
            This page does not exist
          </h1>
          <button className="hover:text-orange bg-orange hover:bg-fadeOrange border-2 border-orange text-white  font-semibold font-raleway text-lg px-4 py-2 mt-3 rounded-md">
            <a href="/">Go Home</a>
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Error;
