import React from "react";
import { LuNetwork } from "react-icons/lu";


const ServiceCard = () => {
  return (
    <div className="flex flex-col md:flex-row m-4">
      <div className="h-full w-full bg-[#f8fbff] shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] p-5 px-12 m-6 text-center flex flex-col items-center justify-center hover:bg-[#ffffff] rounded-xl cursor-pointer ">
        <LuNetwork size="80" className="text-blue-500" />
        <div>Lorem Ipsum</div>
      </div>
      <div className="h-full w-full bg-[#f8fbff] shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] p-5 px-12 m-6 text-center flex flex-col items-center justify-center hover:bg-[#ffffff] rounded-xl cursor-pointer ">
        <LuNetwork size="80" className="text-blue-500" />
        <div>Lorem Ipsum</div>
      </div>
      <div className="h-full w-full bg-[#f8fbff] shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] p-5 px-12 m-6 text-center flex flex-col items-center justify-center hover:bg-[#ffffff] rounded-xl cursor-pointer ">
        <LuNetwork size="80" className="text-blue-500" />
        <div>Lorem Ipsum</div>
      </div>
      <div className="h-full w-full bg-[#f8fbff] shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] p-5 px-12 m-6 text-center flex flex-col items-center justify-center hover:bg-[#ffffff] rounded-xl cursor-pointer ">
        <LuNetwork size="80" className="text-blue-500" />
        <div>Lorem Ipsum</div>
      </div>
     
    </div>
  );
};

export default ServiceCard;
