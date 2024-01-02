import React from "react";
import Image from "next/image";
import Logo from "../../assets/chatgptLogo.svg";

const Answer = () => {
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
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ullam
        nesciunt vel earum tempora sapiente quos temporibus eum libero et? Harum
        voluptatum rem expedita vero incidunt officia qui sit, aut quod, neque
        maiores quam molestias ducimus nemo, deleniti maxime reiciendis ipsum!
        Officia necessitatibus id facere quod quasi voluptatibus delectus
        similique!
      </div>
    </div>
  );
};

export default Answer;
