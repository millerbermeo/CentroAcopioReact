import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Navtop() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const formattedDate = date.toLocaleString();
  return (
    <div className="w-[100%] bg-[#F7F9FD] h-20 flex justify-end shadow-lg fixed top-0 right-0">
      <div className="flex items-center gap-2 pr-3 w-full justify-end">
        <p className="absolute top-8 left-72">{formattedDate}</p>
        <img className="w-[25px]" src="notifications-sharp.svg" alt="" />
        <span className="border-l pl-2 text-gray-400">Miller Rivera</span>
        <Link to="/logout">
          <img className="w-[30px]" src="undraw_profile.svg" alt="" />
        </Link>
      </div>
    </div>
  );
}

export default Navtop;
