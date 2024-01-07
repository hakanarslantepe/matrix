"use client";
import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";

export default function Home() {
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const [showTextOnHover, setShowTextOnHover] = useState(false);

  const openSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  const handleMouseEnter = () => {
    setShowTextOnHover(true);
  };

  const handleMouseLeave = () => {
    setShowTextOnHover(false);
  };
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setSidebarVisible(true);
      } else {
        setSidebarVisible(false);
      }
    };
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="flex flex-row text-white h-screen">
      <div
        className={`bg-[#D69723] ${
          sidebarVisible ? "block w-[18%]" : "hidden"
        }`}
      >
        <Sidebar />
      </div>
      <div
        className={`relative bg-white text-black ${
          sidebarVisible ? "w-[82%]" : "w-[100%]"
        }`}
      >
        <Main />
        <div
          className="left-4 sm:block hidden absolute top-[45%] cursor-pointer"
          onClick={openSidebar}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {showTextOnHover && (
            <span className="absolute top-0 left-3 p-2 bg-orange rounded-lg text-sm text-nowrap">
             { sidebarVisible ? "Close Sidebar" : "Open Sidebar"}
            </span>
          )}
          <div
            className={`h-5 w-1 rounded-full  bg-orange ${
              sidebarVisible ? "transform-2" : "transform-3"
            }`}
          />
          <div
            className={`h-5 w-1 rounded-full  bg-orange ${
              sidebarVisible ? "transform-1" : "transform-4"
            }`}
          />
        </div>
      </div>
    </div>
  );
}
