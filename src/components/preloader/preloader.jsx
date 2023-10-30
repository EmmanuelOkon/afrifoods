import "./preloader.css";
import Logo from "../../assets/icons/africa.png";

function CustomPreloader() {
  return (
    <>
      <div className="flex flex-col w-ful justify-center items-center h-screen">
        <div className="w-[200px] flex justify-center pb-5 ">
          <img src={Logo} alt="logo" className="lg:w-[40%] w-[30%] " />
        </div>
        <div className="flex justify-center items-center">
          <span className="loader"></span>
        </div>
      </div>
    </>
  );
}

export default CustomPreloader;
