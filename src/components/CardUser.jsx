import React from "react";

function CardUser({ bColor, tCard, dCard, imgCard }) {
  return (
    <div className="w-[280px] h-44 lg:w-[220px] lg:h-40 shadow-xl border-t-4 border-indigo-500 rounded-[8px] p-4 pl-6 cursor-pointer hover:scale-[1.05] duration-[.5s] mb-5">
      <h2 className="font-bold text-[20px] text-[#00324D]">{tCard}</h2>
      <p className="text-xs pt-5 font-medium text-gray-400">{dCard}</p>
      <div className="w-full flex justify-end">
        <img className="w-12" src={imgCard} alt="" />
      </div>
    </div>
  );
}

export default CardUser;
