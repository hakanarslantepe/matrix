import React from "react";
import Image from "next/image";
import UserImage from "../../assets/user-icon.png";
const LowerSide = () => {
  return (
    <div className="w-full flex flex-row p-2 gap-x-2 hover:bg-slate-400 rounded-md items-center">
      <Image src={UserImage} alt="User Image" width={45} height={45} className="rounded-full"/>
      <p className="text-center font-bold"> User Name</p>
    </div>
  );
};

export default LowerSide;
