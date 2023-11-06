import { NavLink } from "react-router-dom";
import Layout from "../components/layout";

const Error = () => {
  return (
    <Layout>
      <div className="pt[20rem] flex items-center h-screen justify-center w-full bg-lemonGreen bg-opacity-20 ">
        <div className="flex-col justify-center text-center">
          <h1 className="text-9xl font-bold font-roboto">404</h1>
          <h1 className="font-raleway font-medium text-lg">
            This page does not exist
          </h1>
          <button className="bg-green hover:bg-lemonGreen text-white font-semibold text-lg px-4 py-2 mt-3 rounded-md">
            <NavLink to="/">Go Home</NavLink>
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Error;
