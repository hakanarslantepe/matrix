import Sidebar from "./components/Sidebar";
import Main from "./components/Main";

export default function Home() {
  return (
    <div className="flex flex-row text-white h-screen">
      <div className="hidden sm:block sm:w-[25%] lg:w-[15%] bg-gray-700">
        <Sidebar />
      </div>
      <div className="w-[100%] sm:w-[75%] lg:w-[85%] bg-slate-500 ">
        <Main />
      </div>
    </div>
  );
}
