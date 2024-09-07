import Image from "next/image";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSubContent,
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
import { BsList, BsBookmarkFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { RiFileList2Line, RiPencilFill } from "react-icons/ri";
import { TbLogout, TbBell, TbBellRinging } from "react-icons/tb";
import { AiOutlineNotification, AiFillCheckCircle } from "react-icons/ai";

const menu = [
  { title: "音樂", spacing: 68 },
  { title: "攝影", spacing: 116 },
  { title: "程式", spacing: 164 },
  { title: "程式", spacing: 212 },
  { title: "藝術", spacing: 260 },
  { title: "人文", spacing: 308 },
  { title: "行銷", spacing: 356 },
  { title: "投資理財", spacing: 404 },
  { title: "心靈成長", spacing: 452 },
  { title: "職場技能", spacing: 500 },
  { title: "生活品味", spacing: 548 },
];

const menu_program = [
  { title: "程式入門", spacing: 68 },
  { title: "網頁前端", spacing: 116 },
  { title: "網頁後端", spacing: 164 },
  { title: "網站架設", spacing: 212 },
  { title: "資訊安全", spacing: 260 },
  { title: "程式語言", spacing: 308 },
  { title: "遊戲開發", spacing: 356 },
  { title: "資料科學", spacing: 404 },
  { title: "人工智慧", spacing: 452 },
  { title: "量化分析", spacing: 500 },
];

const menu_course = [
  {
    cover:
      "https://github.com/hexschool/2022-web-layout-training/blob/main/week8-learning/course-5.png?raw=true",
    title: "小白也會！從零開始學習 Python 程式設計",
    avatar:
      "https://github.com/hexschool/2022-web-layout-training/blob/main/week8-learning/avatar-2.png?raw=true",
    teacher: "Kelly Hsu",
    price: {
      saleState: "NT$2480",
      original: "NT$3200",
    },
    students: 420,
    rating: 4.0,
    reviews: "333",
  },
  {
    cover:
      "https://github.com/hexschool/2022-web-layout-training/blob/main/week8-learning/course-5.png?raw=true",
    title: "小白也會！從零開始學習 Python 程式設計",
    avatar:
      "https://github.com/hexschool/2022-web-layout-training/blob/main/week8-learning/avatar-2.png?raw=true",
    teacher: "Kelly Hsu",
    price: {
      saleState: "已購買",
      original: "NT$3200",
    },
    students: 420,
    rating: 4.0,
    reviews: "333",
  },
  {
    cover:
      "https://github.com/hexschool/2022-web-layout-training/blob/main/week8-learning/course-5.png?raw=true",
    title: "小白也會！從零開始學習 Python 程式設計",
    avatar:
      "https://github.com/hexschool/2022-web-layout-training/blob/main/week8-learning/avatar-2.png?raw=true",
    teacher: "Kelly Hsu",
    price: {
      saleState: "NT$2480",
      original: "NT$3200",
    },
    students: 420,
    rating: 4.0,
    reviews: "333",
  },
];

const Navbar = () => {
  return (
    <div>
      <div className="md:container md:px-3 md:pb-4 md:pt-10 xl:px-0">
        <nav className="flex items-center rounded-full py-3 pe-[18px] ps-3 md:px-10 md:py-4 md:shadow-[0_2px_40px_0px_rgba(0,102,255,0.1)]">
          <Link href="#" className="py-4 pe-6">
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
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger className="hidden items-center gap-x-1 px-6 py-5 text-[#4B4B4B] outline-none xl:flex">
              <span className="whitespace-nowrap pe-1">探索</span>
              <MdKeyboardArrowDown size={20} color="#909090" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel className="mb-2">探索全部</DropdownMenuLabel>
              {menu.map((item, index) => (
                <DropdownMenuGroup key={`${item.title}${index}`}>
                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger>
                      {item.title}
                      <MdKeyboardArrowRight
                        className="text-[#909090] group-focus:text-white"
                        size={24}
                      />
                    </DropdownMenuSubTrigger>

                    <DropdownMenuPortal>
                      <DropdownMenuSubContent
                        className={`-top-[${item.spacing}px]`}
                        sideOffset={12}
                      >
                        <DropdownMenuLabel className="mb-2">
                          所有程式
                        </DropdownMenuLabel>
                        {menu_program.map((item) => (
                          <DropdownMenuGroup key={`${item.title}${index}`}>
                            <DropdownMenuSub>
                              <DropdownMenuSubTrigger>
                                {item.title}
                                <MdKeyboardArrowRight
                                  className="text-[#909090] group-focus:text-white"
                                  size={24}
                                />
                              </DropdownMenuSubTrigger>
                              <DropdownMenuPortal>
                                <DropdownMenuSubContent
                                  className={`min-w-[399px] rounded-e-xl px-6 pt-3 -top-[${item.spacing}px]`}
                                  sideOffset={12}
                                >
                                  <DropdownMenuLabel className="flex items-center gap-x-2 whitespace-nowrap border-b border-[#ECECEC] pb-4 ps-0 pt-0">
                                    <Image
                                      src="https://github.com/hexschool/2022-web-layout-training/blob/main/week8-learning/icons/ic_fire.png?raw=true"
                                      alt="fire"
                                      width={24}
                                      height={24}
                                    ></Image>
                                    熱門網頁前端課程
                                  </DropdownMenuLabel>
                                  {menu_course.map(
                                    (courseItem, courseIndex) => (
                                      <DropdownMenuGroup
                                        key={`${courseItem.title}${courseIndex}`}
                                      >
                                        <DropdownMenuItem className="mt-4 gap-x-2">
                                          <Image
                                            src={`${courseItem.cover}`}
                                            alt="cover"
                                            width={100}
                                            height={100}
                                            className="relative flex size-[100px] self-start rounded-xl object-cover"
                                          ></Image>
                                          <div>
                                            <Link
                                              className="mb-4 block font-semibold"
                                              href="#"
                                            >
                                              {courseItem.title}
                                            </Link>
                                            <div className="flex items-center justify-between whitespace-nowrap border-b border-[#ECECEC] pb-2">
                                              <div className="flex items-center gap-x-2">
                                                <Image
                                                  src="https://github.com/hexschool/2022-web-layout-training/blob/main/week8-learning/avatar-2.png?raw=true"
                                                  alt="teacherAvatar"
                                                  width={32}
                                                  height={32}
                                                ></Image>
                                                <p className="text-[#4B4B4B]">
                                                  {courseItem.teacher}
                                                </p>
                                              </div>
                                              <div className="flex flex-col items-end">
                                                <p
                                                  className={`font-semibold ${
                                                    courseItem.price
                                                      .saleState === "已購買"
                                                      ? "text-[#909090]"
                                                      : "text-[#0068FF]"
                                                  }`}
                                                >
                                                  {courseItem.price.saleState}
                                                </p>
                                                <del className="text-xs text-[#808080]">
                                                  {courseItem.price.original}
                                                </del>
                                              </div>
                                            </div>
                                            <div className="flex justify-between py-2">
                                              <p className="text-[#4B4B4B]">
                                                已有 {courseItem.students}{" "}
                                                位同學加入
                                              </p>
                                              <div className="flex items-center gap-x-1">
                                                <MdOutlineStar
                                                  color="#F6BD2B"
                                                  size={12}
                                                />
                                                <p>
                                                  {courseItem.rating.toFixed(1)}
                                                </p>
                                                <p className="text-[#808080]">
                                                  ({courseItem.reviews})
                                                </p>
                                              </div>
                                            </div>
                                          </div>
                                        </DropdownMenuItem>
                                      </DropdownMenuGroup>
                                    ),
                                  )}
                                </DropdownMenuSubContent>
                              </DropdownMenuPortal>
                            </DropdownMenuSub>
                          </DropdownMenuGroup>
                        ))}
                      </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                  </DropdownMenuSub>
                </DropdownMenuGroup>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
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
              <DropdownMenuTrigger className="relative block rounded-xl px-3 py-2 outline-none before:absolute before:right-2 before:top-1 before:size-2 before:rounded-full before:bg-[#0068FF] before:content-[''] focus:bg-[#F9F9F9]">
                <TbBell size={24} />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="mt-8 block h-[297px] w-80 overflow-hidden rounded-xl border-none bg-[#FFFFFF] p-0 shadow-none">
                <DropdownMenuLabel className="border-b border-[#ECECEC]">
                  <Link
                    className="ml-auto flex w-fit items-center gap-x-2 pe-4 text-sm text-[#0068FF]"
                    href="#"
                  >
                    <AiFillCheckCircle size={18} />
                    全部標記為已讀
                  </Link>
                </DropdownMenuLabel>
                <DropdownMenuGroup>
                  <DropdownMenuItem className="flex gap-x-4 border-b border-[#ECECEC] px-4 py-3">
                    <div className="flex size-10 flex-shrink-0 items-center justify-center rounded-full bg-[#D4F9FE]">
                      <AiOutlineNotification color="#2AAFFC" size={24} />
                    </div>
                    <div>
                      <p className="pb-2 text-[#4B4B4B]">
                        系統通知：6 月 30 日 02:00 網站系統排程更新
                      </p>
                      <p className="text-sm text-[#909090]">4 天前</p>
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex gap-x-4 border-b border-[#ECECEC] px-4 py-3">
                    <div className="flex size-10 flex-shrink-0 items-center justify-center rounded-full bg-[#FFE0D7]">
                      <TbBellRinging color="#FF3A55" size={24} />
                    </div>
                    <div>
                      <p className="pb-2 text-[#4B4B4B]">
                        募資開課：您購買的募資課程已成功開課！將於 3
                        天後公布課...
                      </p>
                      <p className="text-sm text-[#909090]">7 天前</p>
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex gap-x-4 border-b border-[#ECECEC] px-4 py-3">
                    <div className="flex size-10 flex-shrink-0 items-center justify-center rounded-full bg-[#FFE0D7]">
                      <TbBellRinging color="#FF3A55" size={24} />
                    </div>
                    <div>
                      <p className="pb-2 text-[#4B4B4B]">
                        募資開課：您購買的募資課程已成功開課！將於 3
                        天後公布課...
                      </p>
                      <p className="text-sm text-[#909090]">4 天前</p>
                    </div>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link className="relative block px-3 py-2" href="#">
              <MdOutlineShoppingCart size={24} />
              <span className="absolute right-1.5 top-0.5 flex size-5 items-center justify-center rounded-full border-2 border-white bg-[#0068FF] text-xs text-white">
                2
              </span>
            </Link>
            <div>
              <div className="noLogged hidden">
                <DropdownMenu>
                  <DropdownMenuTrigger className="block rounded-xl px-3 py-2 outline-none focus:bg-[#F9F9F9] md:hidden">
                    <BsList size={24} />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="m-0 block h-screen w-screen bg-[#FFFFFF] p-0">
                    <div>
                      <div className="px-6 pt-4">
                        <DropdownMenuLabel className="mb-2">
                          探索全部
                        </DropdownMenuLabel>
                        {menu.map((item, index) => (
                          <DropdownMenuGroup key={`${item.title}${index}`}>
                            <DropdownMenuSub>
                              <DropdownMenuItem className="rounded-xl border-none p-3 ps-6 focus:bg-[#0068FF] focus:text-white">
                                {item.title}
                                <MdKeyboardArrowRight
                                  className="text-[#909090] group-focus:text-white"
                                  size={24}
                                />
                              </DropdownMenuItem>
                            </DropdownMenuSub>
                          </DropdownMenuGroup>
                        ))}
                      </div>
                    </div>
                    <div className="fixed bottom-[62px] w-screen bg-white">
                      <hr className="border-[#ECECEC]" />
                      <Link
                        href="./logIn"
                        className="mx-6 my-3 block whitespace-nowrap rounded-xl bg-[#0068FF] py-4 text-center font-semibold text-white"
                      >
                        登入/註冊
                      </Link>
                    </div>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <div className="Logged block">
                <DropdownMenu>
                  <DropdownMenuTrigger className="block rounded-xl px-3 py-2 outline-none focus:bg-[#F9F9F9] md:hidden">
                    <BsList size={24} />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="m-0 block h-screen w-screen bg-[#FFFFFF] p-0">
                    <Tabs defaultValue="explore" className="w-full">
                      <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="explore">探索</TabsTrigger>
                        <TabsTrigger value="member">我的會員</TabsTrigger>
                      </TabsList>
                      <TabsContent value="explore">
                        <div className="px-6 py-4">
                          <Link
                            className="mb-2 flex items-center rounded-xl border-b border-[#ECECEC] px-6 py-3"
                            href="#"
                          >
                            <MdKeyboardArrowLeft size={24} />
                            <p className="mx-auto">所有程式</p>
                          </Link>
                          <ul>
                            {menu_program.map((item, index) => (
                              <li key={`${item.title}${index}`}>
                                <Link
                                  href="#"
                                  className="group flex items-center justify-between rounded-xl py-3 pe-3 ps-6 focus:bg-[#0068FF] focus:font-semibold focus:text-white"
                                >
                                  {item.title}
                                  <MdKeyboardArrowRight
                                    className="text-[#909090] group-focus:text-white"
                                    size={24}
                                  />
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </TabsContent>
                      <TabsContent value="member">
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
                              <Link
                                className="flex items-center gap-x-2 px-6 py-3"
                                href="#"
                              >
                                <CgProfile size={24} color="#909090" />
                                個人檔案
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="flex items-center gap-x-2 px-6 py-3"
                                href="#"
                              >
                                <BsBookmarkFill size={24} color="#909090" />
                                我的收藏
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="flex items-center gap-x-2 px-6 py-3"
                                href="#"
                              >
                                <MdOutlineSettings size={24} color="#909090" />
                                帳號設定
                              </Link>
                            </li>
                          </ul>
                          <ul className="pt-4 text-[#4B4B4B]">
                            <li>
                              <Link
                                className="flex items-center gap-x-2 px-6 py-3"
                                href="#"
                              >
                                <RiFileList2Line size={24} color="#909090" />
                                訂單紀錄
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="flex items-center gap-x-2 px-6 py-3"
                                href="#"
                              >
                                <RiPencilFill size={24} color="#909090" />
                                作業成果
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <Link
                          href="#"
                          className="fixed bottom-[62px] flex w-full items-center gap-x-2 whitespace-nowrap border-t border-[#ECECEC] bg-white px-12 py-6"
                        >
                          <TbLogout size={24} color="#909090" />
                          登出
                        </Link>
                      </TabsContent>
                    </Tabs>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              <Link
                href="#"
                className="hidden whitespace-nowrap rounded-xl bg-[#0068FF] px-4 py-3 text-white"
              >
                登入 / 註冊
              </Link>

              <DropdownMenu>
                <DropdownMenuTrigger className="hidden items-center gap-x-2 font-semibold text-[#4B4B4B] outline-none md:inline-flex">
                  <Image
                    src="https://github.com/hexschool/2022-web-layout-training/blob/main/week8-learning/avatar-1.png?raw=true"
                    alt="avatar"
                    width={44}
                    height={44}
                  />
                  Jessica
                </DropdownMenuTrigger>
                <DropdownMenuContent className="absolute -right-24 mt-8 hidden w-[237px] space-y-4 rounded-xl border-none bg-[#FFFFFF] py-6 shadow-none md:block">
                  <DropdownMenuLabel className="p-0" asChild>
                    <Link className="flex items-center gap-x-2" href="#">
                      <Image
                        src="https://github.com/hexschool/2022-web-layout-training/blob/main/week8-learning/avatar-1.png?raw=true"
                        alt="avatar"
                        width={44}
                        height={44}
                      />
                      <div>
                        <p>Jessica</p>
                        <p className="text-sm text-[#909090]">學習初心者</p>
                      </div>
                    </Link>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator className="bg-[#ECECEC]" />
                  <DropdownMenuGroup asChild>
                    <ul>
                      <DropdownMenuItem className="border-none p-0" asChild>
                        <li className="group rounded-xl text-[#4B4B4B] focus:!bg-[#0068FF] focus:text-white">
                          <Link
                            href="#"
                            className="flex w-full items-center gap-x-2 py-3 ps-6"
                          >
                            <CgProfile
                              className="text-[#909090] group-focus:text-white"
                              size={24}
                            />
                            個人檔案
                          </Link>
                        </li>
                      </DropdownMenuItem>
                      <DropdownMenuItem className="border-none p-0" asChild>
                        <li className="group rounded-xl text-[#4B4B4B] focus:!bg-[#0068FF] focus:text-white">
                          <Link
                            href="#"
                            className="flex w-full items-center gap-x-2 py-3 ps-6"
                          >
                            <BsBookmarkFill
                              className="text-[#909090] group-focus:text-white"
                              size={24}
                            />
                            我的收藏
                          </Link>
                        </li>
                      </DropdownMenuItem>
                      <DropdownMenuItem className="border-none p-0" asChild>
                        <li className="group rounded-xl text-[#4B4B4B] focus:!bg-[#0068FF] focus:text-white">
                          <Link
                            href="#"
                            className="flex w-full items-center gap-x-2 py-3 ps-6"
                          >
                            <MdOutlineSettings
                              className="text-[#909090] group-focus:text-white"
                              size={24}
                            />
                            帳號設定
                          </Link>
                        </li>
                      </DropdownMenuItem>
                    </ul>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator className="bg-[#ECECEC]" />
                  <DropdownMenuGroup asChild>
                    <ul>
                      <DropdownMenuItem className="border-none p-0" asChild>
                        <li className="group rounded-xl text-[#4B4B4B] focus:!bg-[#0068FF] focus:text-white">
                          <Link
                            href="#"
                            className="flex w-full items-center gap-x-2 py-3 ps-6"
                          >
                            <RiFileList2Line
                              className="text-[#909090] group-focus:text-white"
                              size={24}
                            />
                            訂單紀錄
                          </Link>
                        </li>
                      </DropdownMenuItem>
                      <DropdownMenuItem className="border-none p-0" asChild>
                        <li className="group rounded-xl text-[#4B4B4B] focus:!bg-[#0068FF] focus:text-white">
                          <Link
                            href="#"
                            className="flex w-full items-center gap-x-2 py-3 ps-6"
                          >
                            <RiPencilFill
                              className="text-[#909090] group-focus:text-white"
                              size={24}
                            />
                            作業成果
                          </Link>
                        </li>
                      </DropdownMenuItem>
                    </ul>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator className="bg-[#ECECEC]" />
                  <DropdownMenuItem className="border-none p-0" asChild>
                    <Link
                      href="#"
                      className="group flex w-full items-center gap-x-2 rounded-xl py-3 ps-6 text-[#4B4B4B] focus:!bg-[#0068FF] focus:text-white"
                    >
                      <TbLogout
                        className="text-[#909090] group-focus:text-white"
                        size={24}
                      />
                      登出
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
