"use client";

import React, { ChangeEvent, useState } from "react";
import Image from "next/image";
import Logo from "../../assets/chatgptLogo.svg";
import Send from "../../assets/send.svg";
import Question from "./Question";
import Answer from "./Answer";

interface Message {
  question: string;
  answer: string;
}

const Main: React.FC = () => {
  const [chatHistory, setChatHistory] = useState<Message[]>([]);
  const [userInput, setUserInput] = useState<string>("");
  const handleUserInput = (e: ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  const handleSendMessage = () => {
    const newMessage: Message = {
      question: userInput,
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore nemo sequi quisquam consequatur ducimus. At ea ullam labore minima optio!",
    };
    setChatHistory([...chatHistory, newMessage]);
    setUserInput("");
  };
  return (
    <div className="h-screen relative flex flex-col">
      <div className="flex flex-row sticky top-0 z-10">
        <div className="flex p-4 gap-x-2">
          <Image src={Logo} alt="logo" width={25} height={25} />
          <p className="font-bold text-xl"> LEARNING MATRIX</p>
        </div>
      </div>
      <div className="overflow-y-auto flex-1 p-4 custom-scrollbar">
        {chatHistory.map((message: Message, index) => (
          <div key={index} className="flex flex-col">
            <Question message={message} />
            <Answer message={message} />
          </div>
        ))}
      </div>

      <div className="sticky bottom-2 z-10 flex items-center justify-center gap-x-2 p-4">
        <input
          type="text"
          value={userInput}
          onChange={handleUserInput}
          placeholder="Message Matrix Ai..."
          className="bg-transparent p-4 border-2 border-solid border-white rounded-[10px] w-[700px] focus:outline-none "
        />
        <button onClick={handleSendMessage}>
          <Image src={Send} alt="Send Icon" className="transform rotate-270" />
        </button>
      </div>
    </div>
  );
};

export default Main;
