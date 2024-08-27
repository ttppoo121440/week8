import Image from "next/image";
import {
  MdKeyboardArrowDown,
  MdOutlineSearch,
  MdOutlineShoppingCart,
} from "react-icons/md";
import { LiaBellSolid } from "react-icons/lia";
import { BsList } from "react-icons/bs";

export default function Home() {
  return (
    <div className="pb-4 pt-10 md:container">
      <nav className="flex items-center rounded-full py-3 pe-[18px] ps-3 xl:px-10 xl:py-4 xl:shadow-[0_2px_40px_0px_rgba(0,102,255,0.1)]">
        <Image
          src="https://github.com/hexschool/2022-web-layout-training/blob/main/week8-learning/logo.png?raw=true"
          alt="logo"
          width={125}
          height={20}
          className="xl:h-[32px] xl:w-[200px]"
        />
        <a className="block py-4 pe-6" href="#">
          <h1></h1>
        </a>
        <a
          className="hidden items-center px-6 py-5 text-[#4B4B4B] xl:flex"
          href="#"
        >
          <span className="text-nowrap pe-1">探索</span>
          <MdKeyboardArrowDown size={20} color="#909090" />
        </a>
        <div className="hidden items-center gap-x-4 rounded-2xl px-2 outline outline-1 outline-[#ECECEC] md:flex">
          <label htmlFor="search">
            <MdOutlineSearch size={24} />
          </label>
          <input
            className="w-[272px] py-5"
            type="search"
            id="search"
            placeholder="搜尋各種音樂、數學、程式及設計課程"
          />
          <button
            type="submit"
            className="text-nowrap rounded-xl bg-[#0068FF] px-4 py-3 text-white"
          >
            搜尋
          </button>
        </div>
        <div className="ms-auto flex items-center gap-x-4">
          <a className="relative" href="#">
            <LiaBellSolid className="m-2 xl:mx-3" size={24} />
            <span className="absolute right-2 top-1 size-2 rounded-full bg-[#0068FF] text-xs"></span>
          </a>
          <a className="relative" href="#">
            <MdOutlineShoppingCart className="m-2 xl:mx-3" size={24} />
            <span className="absolute right-1.5 top-0.5 flex size-5 items-center justify-center rounded-full border-2 border-white bg-[#0068FF] text-xs text-white">
              2
            </span>
          </a>
          <div>
            <a href="#">
              <BsList className="m-2 md:hidden xl:mx-3" size={24} />
            </a>
            <a
              href="#"
              className="hidden text-nowrap rounded-xl bg-[#0068FF] px-4 py-3 text-white md:block"
            >
              登入 / 註冊
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
