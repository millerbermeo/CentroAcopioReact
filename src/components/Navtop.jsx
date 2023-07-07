import React from "react";
import { Link } from "react-router-dom";

function Navtop() {
  return (
    <div className="w-[100%] bg-[#F7F9FD] h-20 flex justify-end shadow-lg fixed top-0 right-0">
      <div className="flex items-center gap-2 pr-3">
        <img className="w-[25px]" src="notifications-sharp.svg" alt="" />
        <span className="border-l pl-2 text-gray-400">Miller Rivera</span>
        <Link to="/login">
          <img className="w-[30px]" src="undraw_profile.svg" alt="" />
        </Link>
      </div>
    </div>
  );
}

export default Navtop;
