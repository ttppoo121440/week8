import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  MdKeyboardArrowDown,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdOutlineSearch,
  MdOutlineShoppingCart,
  MdOutlineSettings,
  MdOutlineStar,
} from "react-icons/md";
import { LiaBellSolid } from "react-icons/lia";
import { BsList, BsBookmarkFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { RiFileList2Line, RiPencilFill } from "react-icons/ri";
import { TbLogout } from "react-icons/tb";
import { AiOutlineNotification, AiFillCheckCircle } from "react-icons/ai";

const menu = [
  { title: "音樂" },
  { title: "攝影" },
  { title: "程式" },
  { title: "程式" },
  { title: "藝術" },
  { title: "人文" },
  { title: "行銷" },
  { title: "投資理財" },
  { title: "心靈成長" },
  { title: "職場技能" },
  { title: "生活品味" },
];

const menu_program = [
  { title: "程式入門" },
  { title: "網頁前端" },
  { title: "網頁後端" },
  { title: "網站架設" },
  { title: "資訊安全" },
  { title: "程式語言" },
  { title: "遊戲開發" },
  { title: "資料科學" },
  { title: "人工智慧" },
  { title: "量化分析" },
];

const menu_notification = [
  { title: "程式入門" },
  { title: "網頁前端" },
  { title: "網頁後端" },
  { title: "網站架設" },
  { title: "資訊安全" },
  { title: "程式語言" },
  { title: "遊戲開發" },
  { title: "資料科學" },
  { title: "人工智慧" },
  { title: "量化分析" },
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
                priority={true}
                className="min-h-[20px] min-w-[125px] md:h-[32px] md:w-[200px]"
              />
            </h1>
          </a>
          <DropdownMenu>
            <DropdownMenuTrigger className="hidden items-center gap-x-1 px-6 py-5 text-[#4B4B4B] outline-none xl:flex">
              <span className="whitespace-nowrap pe-1">探索</span>
              <MdKeyboardArrowDown size={20} color="#909090" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mt-6 hidden rounded-s-xl border-none bg-[#F9F9F9] px-3 pb-1 pt-3 shadow-none xl:block">
              <DropdownMenuLabel className="py-3 ps-6 font-normal text-[#0068FF]">
                探索全部
              </DropdownMenuLabel>
              {menu.map((item, index) => (
                <DropdownMenuSub key={`${item.title}${index}`}>
                  <DropdownMenuSubTrigger className="group flex min-w-52 items-center justify-between rounded-xl py-3 pe-3 ps-6 text-base hover:!bg-[#0068FF] hover:!font-semibold hover:text-white">
                    {item.title}
                    {(index + 1) * -48 - 12}
                    <MdKeyboardArrowRight
                      size={24}
                      className="size-6 text-[#909090] group-hover:text-white"
                    />
                  </DropdownMenuSubTrigger>
                  <DropdownMenuPortal>
                    <DropdownMenuSubContent
                      className="flex rounded-none border-y-0 shadow-none"
                      // alignOffset={(index + 1) * -48 - 12}
                      sideOffset={12}
                    >
                      <DropdownMenuItem>
                        <span>Email</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <span>Message</span>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <span>More...</span>
                      </DropdownMenuItem>
                    </DropdownMenuSubContent>
                  </DropdownMenuPortal>
                </DropdownMenuSub>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* <div className="group relative hidden xl:block">
            <a
              className="flex items-center gap-x-1 px-6 py-5 text-[#4B4B4B]"
              href="#"
            >
              <span className="whitespace-nowrap pe-1">探索</span>
              <MdKeyboardArrowDown size={20} color="#909090" />
            </a>
            <div className="absolute -left-12 hidden h-[624px] overflow-y-hidden pt-6 group-hover:flex">
              <div className="rounded-s-xl bg-[#F9F9F9] px-3 pb-1 pt-3">
                <p className="mb-2 py-3 ps-6">探索全部</p>
                <ul>
                  {menu.map((item, index) => (
<<<<<<< HEAD
                    <li className="rounded-xl" key={`${item.title}+${index}`}>
=======
                    <li key={`${item.title}${index}`}>
>>>>>>> fe4a968f2f06d5d064180156e96a13f4db96b349
                      <a
                        href="#"
                        className="group/subItem flex min-w-52 items-center justify-between rounded-xl py-3 pe-3 ps-6 hover:bg-[#0068FF] hover:font-semibold hover:text-white"
                      >
                        {item.title}
                        <MdKeyboardArrowRight
                          className="text-[#909090] group-hover/subItem:text-white"
                          size={24}
                        />
                      </a>
<<<<<<< HEAD
                      <div className="absolute left-full top-0 mt-6 border-x border-[#ECECEC] bg-white px-3 pt-3">
                        <p className="mb-2 py-3 ps-6">探索全部</p>
                        <ul>
                          {item.title &&
                            menu_program.map((subItem) => (
                              <li key={`${subItem.title}+${index}`}>
                                <a
                                  href="#"
                                  className="group/subSubItem flex min-w-52 items-center justify-between rounded-xl py-3 pe-3 ps-6 hover:bg-[#0068FF] hover:font-semibold hover:text-white"
                                >
                                  {subItem.title}
                                  <MdKeyboardArrowRight
                                    className="text-[#909090] group-hover/subSubItem:text-white"
                                    size={24}
                                  />
                                </a>
                              </li>
                            ))}
                        </ul>
                      </div>
=======
>>>>>>> fe4a968f2f06d5d064180156e96a13f4db96b349
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border-x border-[#ECECEC] bg-white px-3 pb-1 pt-3">
                <p className="mb-2 py-3 ps-6">探索全部</p>
                <ul>
                  {menu_program.map((subItem, subIndex) => (
                    <li key={subItem.title}>
                      <a
                        href="#"
                        className="group/subSubItem flex min-w-52 items-center justify-between rounded-xl py-3 pe-3 ps-6 hover:bg-[#0068FF] hover:font-semibold hover:text-white"
                      >
                        {subItem.title}
                        <MdKeyboardArrowRight
                          className="text-[#909090] group-hover/subSubItem:text-white"
                          size={24}
                        />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="min-w-[399px] rounded-e-xl bg-white px-3 pb-1 pt-3">
                <div className="flex items-center gap-x-2 pb-4">
                  <Image
                    src="https://github.com/hexschool/2022-web-layout-training/blob/main/week8-learning/icons/ic_fire.png?raw=true"
                    alt="fire"
                    width={24}
                    height={24}
                  ></Image>
                  <p className="whitespace-nowrap font-semibold">
                    熱門網頁前端課程
                  </p>
                </div>
                <ul>
                  <li className="flex w-full gap-x-2 border-t border-[#ECECEC] pb-6 pt-4">
                    <div className="relative after:absolute after:left-1 after:top-1 after:rounded-full after:bg-[#FFE0D7] after:px-2 after:py-1 after:tracking-[0.2rem] after:text-[#FF3A55] after:content-['8折']">
                      <Image
                        src="https://github.com/hexschool/2022-web-layout-training/blob/main/week8-learning/course-5.png?raw=true"
                        alt="course"
                        width={100}
                        height={100}
                        className="relative flex size-[100px] self-start rounded-xl object-cover"
                      ></Image>
                    </div>
                    <div>
                      <a href="#" className="mb-4 font-semibold">
                        小白也會！從零開始學習 Python 程式設計
                      </a>
                      <div className="flex items-center justify-between whitespace-nowrap border-b border-[#ECECEC] pb-2">
                        <div className="flex items-center gap-x-2">
                          <Image
                            src="https://github.com/hexschool/2022-web-layout-training/blob/main/week8-learning/avatar-2.png?raw=true"
                            alt="teacherAvatar"
                            width={32}
                            height={32}
                          ></Image>
                          <p className="text-[#4B4B4B]">Kelly Hsu</p>
                        </div>
                        <div className="flex flex-col items-end">
                          <p className="font-semibold text-[#0068FF]">
                            NT$ 2,480
                          </p>
                          <del className="text-xs text-[#808080]">
                            NT$ 3,200
                          </del>
                        </div>
                      </div>
                      <div className="flex justify-between py-2">
                        <p className="text-[#4B4B4B]">已有 420 位同學加入</p>
                        <div className="flex items-center gap-x-1">
                          <MdOutlineStar color="#F6BD2B" size={12} />
                          <p>4.0</p>
                          <p className="text-[#808080]">(333)</p>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="flex w-full gap-x-2 border-t border-[#ECECEC] pb-6 pt-4">
                    <div className="relative after:absolute after:left-1 after:top-1 after:rounded-full after:bg-[#FFE0D7] after:px-2 after:py-1 after:tracking-[0.2rem] after:text-[#FF3A55] after:content-['8折']">
                      <Image
                        src="https://github.com/hexschool/2022-web-layout-training/blob/main/week8-learning/course-5.png?raw=true"
                        alt="course"
                        width={100}
                        height={100}
                        className="relative flex size-[100px] self-start rounded-xl object-cover"
                      ></Image>
                    </div>
                    <div>
                      <a href="#" className="mb-4 font-semibold">
                        小白也會！從零開始學習 Python 程式設計
                      </a>
                      <div className="flex items-center justify-between whitespace-nowrap border-b border-[#ECECEC] pb-2">
                        <div className="flex items-center gap-x-2">
                          <Image
                            src="https://github.com/hexschool/2022-web-layout-training/blob/main/week8-learning/avatar-2.png?raw=true"
                            alt="teacherAvatar"
                            width={32}
                            height={32}
                          ></Image>
                          <p className="text-[#4B4B4B]">Kelly Hsu</p>
                        </div>
                        <div className="flex flex-col items-end">
                          <p className="font-semibold text-[#0068FF]">
                            NT$ 2,480
                          </p>
                          <del className="text-xs text-[#808080]">
                            NT$ 3,200
                          </del>
                        </div>
                      </div>
                      <div className="flex justify-between py-2">
                        <p className="text-[#4B4B4B]">已有 420 位同學加入</p>
                        <div className="flex items-center gap-x-1">
                          <MdOutlineStar color="#F6BD2B" size={12} />
                          <p>4.0</p>
                          <p className="text-[#808080]">(333)</p>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="flex w-full gap-x-2 border-t border-[#ECECEC] pb-6 pt-4">
                    <div className="relative after:absolute after:left-1 after:top-1 after:rounded-full after:bg-[#FFE0D7] after:px-2 after:py-1 after:tracking-[0.2rem] after:text-[#FF3A55] after:content-['8折']">
                      <Image
                        src="https://github.com/hexschool/2022-web-layout-training/blob/main/week8-learning/course-5.png?raw=true"
                        alt="course"
                        width={100}
                        height={100}
                        className="relative flex size-[100px] self-start rounded-xl object-cover"
                      ></Image>
                    </div>
                    <div>
                      <a href="#" className="mb-4 font-semibold">
                        小白也會！從零開始學習 Python 程式設計
                      </a>
                      <div className="flex items-center justify-between whitespace-nowrap border-b border-[#ECECEC] pb-2">
                        <div className="flex items-center gap-x-2">
                          <Image
                            src="https://github.com/hexschool/2022-web-layout-training/blob/main/week8-learning/avatar-2.png?raw=true"
                            alt="teacherAvatar"
                            width={32}
                            height={32}
                          ></Image>
                          <p className="text-[#4B4B4B]">Kelly Hsu</p>
                        </div>
                        <div className="flex flex-col items-end">
                          <p className="font-semibold text-[#0068FF]">
                            NT$ 2,480
                          </p>
                          <del className="text-xs text-[#808080]">
                            NT$ 3,200
                          </del>
                        </div>
                      </div>
                      <div className="flex justify-between py-2">
                        <p className="text-[#4B4B4B]">已有 420 位同學加入</p>
                        <div className="flex items-center gap-x-1">
                          <MdOutlineStar color="#F6BD2B" size={12} />
                          <p>4.0</p>
                          <p className="text-[#808080]">(333)</p>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div> */}
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
            <DropdownMenu>
              <DropdownMenuTrigger className="relative block rounded-xl px-3 py-2 outline-none before:absolute before:right-2 before:top-1 before:size-2 before:rounded-full before:bg-[#0068FF] before:content-[''] hover:bg-[#F9F9F9]">
                <LiaBellSolid size={24} />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="mt-8 hidden h-[297px] w-80 overflow-hidden rounded-s-xl border-none bg-[#FFFFFF] p-0 shadow-none xl:block">
                <DropdownMenuLabel className="flex items-center justify-end gap-x-2 border-b border-[#ECECEC] py-3 pe-4 text-[#0068FF]">
                  <AiFillCheckCircle size={18} />
                  全部標記為已讀
                </DropdownMenuLabel>
                {menu.map((item, index) => (
                  <DropdownMenuItem
                    className="flex gap-x-4 border-b border-[#ECECEC] px-4 py-3"
                    key={`${item.title}${index}`}
                  >
                    <div className="flex size-10 flex-shrink-0 items-center justify-center rounded-full bg-[#D4F9FE]">
                      <AiOutlineNotification color={"#2AAFFC"} size={24} />
                    </div>
                    <div>
                      <p>系統通知：6 月 30 日 02:00 網站系統排程更新</p>
                      <p>4 天前</p>
                    </div>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            {/* <div className="group relative">
              <a
                className="relative block rounded-xl px-3 py-2 before:absolute before:right-2 before:top-1 before:size-2 before:rounded-full before:bg-[#0068FF] before:content-[''] hover:bg-[#F9F9F9]"
                href="#"
              >
                <LiaBellSolid size={24} />
              </a>
              <div className="absolute hidden overflow-y-hidden pt-6 group-hover:flex">
                <ul>
                  <li>
                    <AiOutlineNotification />
                    <div>
                      <p>系統通知：6 月 30 日 02:00 網站系統排程更新</p>
                      <p>4 天前</p>
                    </div>
                  </li>
                  <li></li>
                  <li></li>
                </ul>
              </div>
            </div> */}
            <a className="relative block px-3 py-2" href="#">
              <MdOutlineShoppingCart size={24} />
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
                className="hidden whitespace-nowrap rounded-xl bg-[#0068FF] px-4 py-3 text-white md:block"
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
<<<<<<< HEAD
              <li key={`${item.title}+${index}`}>
=======
              <li key={`${item.title}${index}`}>
>>>>>>> fe4a968f2f06d5d064180156e96a13f4db96b349
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
            className="mx-6 my-3 block whitespace-nowrap rounded-xl bg-[#0068FF] py-4 text-center font-semibold text-white"
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
              <li key={`${item.title}+${index}`}>
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
            className="flex items-center gap-x-2 whitespace-nowrap px-6 py-3"
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
