import React from "react";
import UpperSide from "./UpperSide";
import LowerSide from "./LowerSide";

const Sidebar = () => {
  return (
    <div className="h-screen relative flex flex-col">
      <div className="sticky left-0 top-2 z-10 mx-2 cursor-pointer flex">
        <div className="w-full flex flex-row p-2 gap-x-2 text-black text-nowrap hover:bg-amber rounded-md items-center justify-center">
          <p className="text-xl font-bold">+</p>
          <p className="text-center font-bold text-black"> New Chat</p>
        </div>
      </div>
      <div className="overflow-y-auto flex-1 custom-scrollbar">
        <UpperSide />
      </div>

      <div className="sticky left-0 bottom-2 z-10 mx-2">
        <LowerSide />
      </div>
    </div>
  );
};

export default Sidebar;
