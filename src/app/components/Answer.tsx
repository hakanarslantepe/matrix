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
    <div>
      <div className="flex gap-x-2 p-4">
        <Image
          src={Logo}
          alt="User Image"
          width={30}
          height={30}
          className="rounded-full"
        />
        <p className="font-bold">Matrix</p>
      </div>
      <div>{message?.answer}</div>
    </div>
  );
};

export default Answer;
