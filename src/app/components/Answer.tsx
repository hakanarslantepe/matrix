import React from "react";
import Image from "next/image";
import Logo from "../../assets/chatgptLogo.svg";

interface AnswerProps {
  message: {
    answer: string;
  };
}

const Answer: React.FC<AnswerProps> = ({ message }) => {
  return (
    <div className="lg:w-[60%] w-full mx-auto bg-slate-400 shadow-xl rounded-2xl p-4 mb-4">
      <div className="flex gap-x-2">
        <Image
          src={Logo}
          alt="User Image"
          width={30}
          height={30}
          className="rounded-full"
        />
        <p className="font-bold text-slate-700">Matrix</p>
      </div>
      <div className="text-justify">
        {message?.answer}
      </div>
    </div>
  );
};

export default Answer;
