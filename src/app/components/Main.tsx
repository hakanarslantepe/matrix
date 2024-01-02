import React from "react";
import Image from "next/image";
import Logo from "../../assets/chatgptLogo.svg";
import Send from "../../assets/send.svg";
import Question from "./Question";
import Answer from "./Answer";

const Main = () => {
  return (
    <div className="h-screen relative flex flex-col">
      <div className="flex flex-row sticky top-0 z-10">
        <div className="flex p-4 gap-x-2">
          <Image src={Logo} alt="logo" width={25} height={25} />
          <p className="font-bold text-xl"> LEARNING MATRIX</p>
        </div>
      </div>
      <div className="overflow-y-auto flex-1 p-4">
        <div className="flex flex-col">
          <Question />
          <Answer />
        </div>
        <div className="flex flex-col">
          <Question />
          <Answer />
        </div>
        <div className="flex flex-col">
          <Question />
          <Answer />
        </div>
        <div className="flex flex-col">
          <Question />
          <Answer />
        </div>
      </div>
      <div className="sticky bottom-2 z-10 flex items-center justify-center gap-x-2 p-4">
        <input
          type="text"
          placeholder="Message Matrix Ai..."
          className="bg-transparent p-4 border-2 border-solid border-white rounded-[10px] w-[700px]"
        />
        <button>
          <Image src={Send} alt="Send Icon" className="" />
        </button>
      </div>
    </div>
  );
};

export default Main;
