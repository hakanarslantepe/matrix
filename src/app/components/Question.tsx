import React from "react";
import Image from "next/image";
import UserImage from "../../assets/user-icon.png";

const Question = () => {
  return (
    <div>
      <div className="flex gap-x-2 p-4">
        <Image
          src={UserImage}
          alt="User Image"
          width={30}
          height={30}
          className="rounded-full"
        />
        <p className="font-bold">You</p>
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore nemo
        sequi quisquam consequatur ducimus. At ea ullam labore minima optio!
      </div>
    </div>
  );
};

export default Question;
