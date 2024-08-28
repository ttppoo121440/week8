import Image from "next/image";
import {
  MdKeyboardArrowDown,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdOutlineSearch,
  MdOutlineShoppingCart,
  MdOutlineSettings,
} from "react-icons/md";
import { LiaBellSolid } from "react-icons/lia";
import { BsList, BsBookmarkFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { RiFileList2Line, RiPencilFill } from "react-icons/ri";
import { TbLogout } from "react-icons/tb";

const menu = [
  { title: "音樂", link: "#" },
  { title: "攝影", link: "#" },
  { title: "程式", link: "#" },
  { title: "程式", link: "#" },
  { title: "藝術", link: "#" },
  { title: "人文", link: "#" },
  { title: "行銷", link: "#" },
  { title: "投資理財", link: "#" },
  { title: "心靈成長", link: "#" },
  { title: "職場技能", link: "#" },
  { title: "生活品味", link: "#" },
];

const menu_program = [
  { title: "程式入門", link: "#" },
  { title: "網頁前端", link: "#" },
  { title: "網頁後端", link: "#" },
  { title: "網站架設", link: "#" },
  { title: "資訊安全", link: "#" },
  { title: "程式語言", link: "#" },
  { title: "遊戲開發", link: "#" },
  { title: "資料科學", link: "#" },
  { title: "人工智慧", link: "#" },
  { title: "量化分析", link: "#" },
];

const Navbar = () => {
  return (
    <div>
      <div className="md:container md:pb-4 md:pt-10">
        <nav className="flex items-center rounded-full py-3 pe-[18px] ps-3 md:px-10 md:py-4 md:shadow-[0_2px_40px_0px_rgba(0,102,255,0.1)]">
          <a className="py-4 pe-6" href="#">
            <h1>
              <Image
                src="https://github.com/hexschool/2022-web-layout-training/blob/main/week8-learning/logo.png?raw=true"
                alt="logo"
                width={125}
                height={20}
                className="min-h-[20px] min-w-[125px] md:h-[32px] md:w-[200px]"
              />
            </h1>
          </a>
          <a
            className="hidden items-center px-6 py-5 text-[#4B4B4B] lg:flex"
            href="#"
          >
            <span className="text-nowrap pe-1">探索</span>
            <MdKeyboardArrowDown size={20} color="#909090" />
          </a>
          <div className="hidden items-center justify-between gap-x-4 rounded-2xl px-2 outline outline-1 outline-[#ECECEC] lg:flex lg:max-w-[425px] lg:flex-1">
            <label
              className="flex w-full items-center gap-x-2"
              htmlFor="search"
            >
              <MdOutlineSearch size={24} />
              <input
                className="w-full py-5"
                type="search"
                id="search"
                placeholder="搜尋各種音樂、數學、程式及設計課程"
              />
            </label>
            <button
              type="submit"
              className="whitespace-nowrap rounded-xl bg-[#0068FF] px-4 py-3 text-white"
            >
              搜尋
            </button>
          </div>
          <div className="ms-auto flex items-center md:gap-x-4">
            <a
              className="relative before:absolute before:right-2 before:top-1 before:size-2 before:rounded-full before:bg-[#0068FF] before:content-['']"
              href="#"
            >
              <LiaBellSolid className="m-2 mx-3" size={24} />
            </a>
            <a className="relative" href="#">
              <MdOutlineShoppingCart className="m-2 mx-3" size={24} />
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
              <a className="hidden items-center gap-x-2 font-semibold text-[#4B4B4B]">
                <Image
                  src="https://github.com/hexschool/2022-web-layout-training/blob/main/week8-learning/avatar-1.png?raw=true"
                  alt="avatar"
                  width={44}
                  height={44}
                />
                Jessica
              </a>
            </div>
          </div>
        </nav>
      </div>

      <div className="text-[#333333]">
        <div className="px-6 py-4">
          <p className="mb-2 py-3 ps-6">探索全部</p>
          <ul>
            {menu.map((item, index) => (
              <li key={item.title}>
                <a
                  href="#"
                  className="group flex items-center justify-between rounded-xl py-3 pe-3 ps-6 hover:bg-[#0068FF] hover:font-semibold hover:text-white"
                >
                  {item.title}
                  <MdKeyboardArrowRight
                    className="text-[#909090] group-hover:text-white"
                    size={24}
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="fixed bottom-0 w-full">
          <hr className="border-[#ECECEC]" />
          <a
            href="#"
            className="mx-6 my-3 block text-nowrap rounded-xl bg-[#0068FF] py-4 text-center font-semibold text-white"
          >
            登入/註冊
          </a>
        </div>
      </div>

      <div className="text-[#333333]">
        <nav className="border-b border-[#ECECEC]">
          <ul className="flex text-[#909090]">
            <li className="relative mx-auto py-4 font-semibold text-[#0068FF] before:absolute before:bottom-0 before:left-1/2 before:h-1 before:w-8 before:-translate-x-1/2 before:transform before:rounded before:bg-[#0068FF] before:content-['']">
              探索
            </li>
            <li className="mx-auto py-4">我的會員</li>
          </ul>
        </nav>
        <div className="px-6 py-4">
          <a className="mb-2 flex items-center rounded-xl border-b border-[#ECECEC] px-6 py-3">
            <MdKeyboardArrowLeft size={24} />
            <p className="mx-auto">所有程式</p>
          </a>
          <ul>
            {menu_program.map((item, index) => (
              <li key={item.title}>
                <a
                  href="#"
                  className="group flex items-center justify-between rounded-xl py-3 pe-3 ps-6 hover:bg-[#0068FF] hover:font-semibold hover:text-white"
                >
                  {item.title}
                  <MdKeyboardArrowRight
                    className="text-[#909090] group-hover:text-white"
                    size={24}
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div>
        <nav className="border-b border-[#ECECEC]">
          <ul className="flex text-[#909090]">
            <li className="mx-auto py-4">探索</li>
            <li className="relative mx-auto py-4 font-semibold text-[#0068FF] before:absolute before:bottom-0 before:left-1/2 before:h-1 before:w-8 before:-translate-x-1/2 before:transform before:rounded before:bg-[#0068FF] before:content-['']">
              我的會員
            </li>
          </ul>
        </nav>
        <div className="px-6 py-4">
          <div className="flex items-center gap-x-2 rounded-xl px-6 py-4">
            <Image
              src="https://github.com/hexschool/2022-web-layout-training/blob/main/week8-learning/avatar-1.png?raw=true"
              alt="avatar"
              width={44}
              height={44}
            />
            <div>
              <p className="font-semibold">Jessica</p>
              <p className="mx-auto text-sm leading-snug text-[#909090]">
                學習初心者
              </p>
            </div>
          </div>
          <ul className="border-y border-[#ECECEC] py-4 text-[#4B4B4B]">
            <li>
              <a className="flex items-center gap-x-2 px-6 py-3" href="#">
                <CgProfile size={24} color="#909090" />
                個人檔案
              </a>
            </li>
            <li>
              <a className="flex items-center gap-x-2 px-6 py-3" href="#">
                <BsBookmarkFill size={24} color="#909090" />
                我的收藏
              </a>
            </li>
            <li>
              <a className="flex items-center gap-x-2 px-6 py-3" href="#">
                <MdOutlineSettings size={24} color="#909090" />
                帳號設定
              </a>
            </li>
          </ul>
          <ul className="pt-4 text-[#4B4B4B]">
            <li>
              <a className="flex items-center gap-x-2 px-6 py-3" href="#">
                <RiFileList2Line size={24} color="#909090" />
                訂單紀錄
              </a>
            </li>
            <li>
              <a className="flex items-center gap-x-2 px-6 py-3" href="#">
                <RiPencilFill size={24} color="#909090" />
                作業成果
              </a>
            </li>
          </ul>
        </div>
        <div className="fixed bottom-0 w-full border-t border-[#ECECEC] bg-white px-6 py-3">
          <a
            href="#"
            className="flex items-center gap-x-2 text-nowrap px-6 py-3"
          >
            <TbLogout size={24} color="#909090" />
            登出
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
