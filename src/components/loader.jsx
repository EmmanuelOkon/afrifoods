import React from "react";
import Spinner from "../assets/icons/spinner.svg";
import "../components/preloader/preloader.css";

export default function Loading() {
  return (
    <>
      <div className="hidden w-[190px] h-[52px] fle justify-center items-center overflow-hidden ">
        <img className="w-1/2  object-contain" src={Spinner} alt="loading..." />
      </div>
      <div>
        <div className="w-full spinner">
        </div>
      </div>
    </>
  );
}
