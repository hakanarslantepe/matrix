import React from "react";
import Image from "next/image";
import UserImage from "../../assets/user-icon.png";

interface AnswerProps {
  message: {
    question: string;
  };
}

const Question: React.FC<AnswerProps> = ({ message }) => {
  return (
    <div className="lg:w-[60%] w-full mx-auto shadow-xl bg-slate-400 rounded-2xl p-4 mb-4">
      <div className="flex gap-x-2">
        <Image
          src={UserImage}
          alt="User Image"
          width={30}
          height={30}
          className="rounded-full"
        />
        <p className="font-bold text-slate-700">You</p>
      </div>
      <div className="text-justify focus:outline-none" contentEditable="true">{message?.question}</div>
    </div>
  );
};

export default Question;
