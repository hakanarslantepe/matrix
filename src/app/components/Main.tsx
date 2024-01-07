"use client";

import React, { useState, ChangeEvent, useEffect, useRef } from "react";
import Image from "next/image";
import Logo from "../../assets/matrixLogo.png";
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
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [chatHistory]);

  const handleUserInput = (e: ChangeEvent<HTMLTextAreaElement>) => {
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
          <Image src={Logo} alt="logo" width={60} height={50} />
          <div className="flex flex-col text-center text-orange">
            <p className="font-bold text-2xl lowercase"> LEARNING MATRIX</p>
            <p className="font-bold text-lg lowercase"> Al Power in Education</p>
          </div>
        </div>
      </div>
      <div
        className="overflow-y-auto flex-1 pl-6 pr-4 py-4 custom-scrollbar"
        ref={chatContainerRef}
      >
        {chatHistory.map((message, index) => (
          <div key={index} className="flex flex-col">
            <Question message={message} />
            <Answer message={message} />
          </div>
        ))}
      </div>

      <div className="sticky bottom-2 z-10 flex items-center justify-center p-4 ">
        <div className="relative border-2 border-orange rounded-xl lg:w-[60%] w-full mx-auto flex">
          <textarea
            value={userInput}
            onChange={handleUserInput}
            onKeyUp={(e) => {
              if (e.key === "Enter") {
                handleSendMessage();
              }
            }}
            rows={1}
            placeholder="Message Matrix Ai..."
            className="bg-transparent focus:outline-none w-[90%] flex p-4 custom-scrollbar resize-none"
          />

          <button
            onClick={handleSendMessage}
            className="absolute right-2 top-2 hover:border-[2px] rounded-xl p-2 border-orange"
          >
            <Image
              src={Send}
              alt="Send Icon"
              className="transform rotate-270"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
