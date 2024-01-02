import React from "react";
import UpperSide from "./UpperSide";
import LowerSide from "./LowerSide";
import Image from "next/image";

const Sidebar = () => {
  return (
    <div className="h-screen relative flex flex-col">
      <div className="sticky left-0 top-2 z-10 mx-2 cursor-pointer flex">
        <div className="w-full flex flex-row p-2 gap-x-2 hover:bg-slate-400 rounded-md items-center justify-center md:gap-x-5">
          <Image src="/add.png" alt="Add Image" width={25} height={25} />
          <p className="text-center font-bold"> New Chat</p>
        </div>
      </div>
      <div className="overflow-y-auto flex-1">
        <UpperSide />
      </div>

      <div className="sticky left-0 bottom-2 z-10 mx-2">
        <LowerSide />
      </div>
    </div>
  );
};

export default Sidebar;
