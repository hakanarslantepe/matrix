import Sidebar from "./components/Sidebar";
import Main from "./components/Main";

export default function Home() {
  return (
    <div className="flex flex-row text-white h-screen">
      <div className="w-[25%] md:w-[20%] bg-gray-700">
        <Sidebar />
      </div>
      <div className="w-[75%] md:w-[80%] bg-slate-500 ">
        <Main />
      </div>
    </div>
  );
}
