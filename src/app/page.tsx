import Image from "next/image";
import { MdKeyboardArrowDown, MdOutlineSearch } from "react-icons/md";

export default function Home() {
  return (
    <div className="container  pt-10 pb-4">
      <nav className="flex items-center shadow-sm rounded-full px-10 py-4">
        <a className="py-4 pe-6" href="#">
          <h1>
            <Image
              src="https://github.com/hexschool/2022-web-layout-training/blob/main/week8-learning/logo.png?raw=true"
              alt="logo"
              width={200}
              height={32}
            />
          </h1>
        </a>
        <a  className="py-5 px-6 flex items-center text-[#4B4B4B]" href="#">
          <span className="pe-1">探索</span>
          <MdKeyboardArrowDown size={20} color="#909090"/>
        </a>
        <div className="px-2 flex items-center outline outline-1 outline-[#ECECEC] rounded-2xl">
          <label className="pe-2" htmlFor="search"><MdOutlineSearch size={24}/></label>
          <input className="py-5 me-10" type="search" id="search" placeholder="搜尋各種音樂、數學、程式及設計課程"/>
          <button type="submit" className="rounded-xl py-3 px-4 bg-[#0068FF] text-white">搜尋</button>
        </div>
      </nav>
    </div>
  );
}
