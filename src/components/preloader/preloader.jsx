import "./preloader.css";
import Logo from "../../assets/icons/africa.png";

function CustomPreloader() {
  return (
    <>
      <div className="flex flex-col w-full justify-center items-center h-screen bg-gray-200">
        <div className="w-[200px] h-auto flex justify-center pb-3  ">
          <img src={Logo} alt="logo" className="lg:w-[40%] w-[30%] " />
        </div>
        <div className="h-[20px] ">
          <span className="loader"></span>
        </div>
      </div>
    </>
  );
}

export default CustomPreloader;
