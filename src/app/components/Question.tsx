import React from "react";
import Image from "next/image";
import UserImage from "../../assets/user-icon.png";

const Question = ({message}) => {
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
        {message?.question}
      </div>
    </div>
  );
};

export default Question;
