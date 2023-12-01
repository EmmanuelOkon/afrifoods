import React from "react";
import Spinner from "../assets/icons/spinner.svg";
// import { TbLoader2 } from "react-icons/tb";

export default function Loading() {
  return (
    <div className="w-[190px] h-[52px] flex justify-center items-center overflow-hidden ">
      <img
        className="w-1/2  object-contain"
        src={Spinner}
        alt="loading..."
      />
    </div>
  );
}
