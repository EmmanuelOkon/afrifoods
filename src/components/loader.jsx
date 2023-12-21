import React from "react";

import "../components/preloader/preloader.css";

export default function Loading() {
  return (
    <>
      <div className="origin">
        <div className="wfull circle w-[28px] h-[28px] sm:w-[40px] sm:h-[40px]  spiner"></div>
      </div>
    </>
  );
}
