"use client";

import Image from "next/image";
import Link from "next/link";

import MobileCarousel from "../components/MobileCarousel";
import CourseList from "../components/CourseList";

import { FaLine, FaYoutube, FaFacebookF } from "react-icons/fa";

const socialIcons = [
  { icon: FaLine, link: "#" },
  { icon: FaYoutube, link: "#" },
  { icon: FaFacebookF, link: "#" },
];

const courses = [
  {
    id: 1,
    image:
      "https://github.com/hexschool/2022-web-layout-training/blob/main/week8-learning/course-5.png?raw=true",
    discount: "限時 8 折 🔥",
    title: "小白也會！從零開始學習 Python 程式設計",
    instructor: "Kelly Hsu",
    price: "NT$ 2,480",
    originalPrice: "NT$ 3,200",
    category: "程式開發",
    students: 420,
    rating: 4.0,
    reviews: 333,
  },
  {
    id: 2,
    image:
      "https://github.com/hexschool/2022-web-layout-training/blob/main/week8-learning/course-6.png?raw=true",
    discount: "限時 8 折 🔥",
    title: "全面掌握 JavaScript 開發技術",
    instructor: "Kelly Hsu",
    price: "NT$ 2,480",
    originalPrice: "NT$ 3,200",
    category: "程式開發",
    students: 420,
    rating: 4.0,
    reviews: 333,
  },
  {
    id: 3,
    image:
      "https://github.com/hexschool/2022-web-layout-training/blob/main/week8-learning/course-7.png?raw=true",
    title: "HTML & CSS 網頁設計基礎教程",
    instructor: "Kelly Hsu",
    price: "NT$ 2,480",
    originalPrice: "NT$ 3,200",
    category: "程式開發",
    students: 420,
    rating: 4.0,
    reviews: 333,
  },
  {
    id: 4,
    image:
      "https://github.com/hexschool/2022-web-layout-training/blob/main/week8-learning/course-8.png?raw=true",
    title: "更進一步！深入學習 Node.js 與後端開發",
    instructor: "Kelly Hsu",
    price: "NT$ 2,480",
    originalPrice: "NT$ 3,200",
    category: "程式開發",
    students: 420,
    rating: 4.0,
    reviews: 333,
  },
];

export default function Home() {
  return (
    <main>
      <section className="pb-12">
        <div className="h-[200px] bg-[url('https://github.com/hexschool/2022-web-layout-training/blob/main/week8-learning/hero-sm-5.png?raw=true')] bg-cover bg-center md:h-[400px] md:bg-[url('https://github.com/hexschool/2022-web-layout-training/blob/main/week8-learning/hero-5.png?raw=true')]"></div>
        <div className="container relative flex flex-col px-3 text-[#4B4B4B] 2xl:px-0">
          <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white p-2.5 md:p-5 xl:left-3 xl:top-10 xl:translate-x-0 2xl:left-0">
            <Image
              src="https://github.com/hexschool/2022-web-layout-training/blob/main/week1/hexschool.png?raw=true"
              alt="hexSchool"
              width={60}
              height={60}
              className="size-20 xl:size-[200px]"
            ></Image>
          </div>
          <div className="mt-16 space-y-4 text-sm md:text-base xl:ps-80">
            <h2 className="text-center text-[2rem] font-semibold leading-[2.4rem] text-black xl:text-start xl:text-5xl">
              六角學院
            </h2>
            <div className="flex items-center justify-center gap-x-3 xl:justify-start">
              <p>
                <span className="pe-1 font-semibold text-[#0068FF] md:text-xl">
                  4
                </span>
                堂課
              </p>
              <span className="h-4 w-px bg-[#909090]"></span>
              <p>
                <span className="pe-1 font-semibold text-[#0068FF] md:text-xl">
                  8463
                </span>
                收藏數
              </p>
              <span className="h-4 w-px bg-[#909090]"></span>
              <p>
                <span className="pe-1 font-semibold text-[#0068FF] md:text-xl">
                  20,218
                </span>
                個學生
              </p>
            </div>
            <p>
              六角學院 是一所線上程式開發學習單位，目前已累積 20,000
              名學員，讓更多人藉由線上學習在職涯規劃上有更多的選擇是我們的使命是，如果您贊同我們的理念，歡迎加入六角。
              <br />
              我們將深入了解您想發展的領域，每位實習生我們都會量身打造專屬於您的舞台，並讓您實際瞭解公司營運
              Know how。
            </p>
            <ul className="flex justify-center gap-x-4 text-[#4B4B4B] xl:justify-start">
              {socialIcons.map((item, index) => (
                <li key={`${item.icon}${index}`}>
                  <Link
                    href={item.link}
                    className="block rounded-full p-[11px] outline outline-1 outline-[#4B4B4B]"
                  >
                    <item.icon size={18}></item.icon>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="px-3 pb-[120px] 2xl:px-0">
        <div className="container">
          <div className="-mb-4 flex items-center gap-x-1.5">
            <Image
              src="https://github.com/hexschool/2022-web-layout-training/blob/main/week8-learning/deco/flower-5.png?raw=true"
              alt="flower"
              width={16}
              height={16}
            ></Image>
            <h3 className="text-xl font-semibold xl:text-2xl">
              六角學院開的課
            </h3>
          </div>
          <MobileCarousel data={courses}></MobileCarousel>
          <CourseList data={courses}></CourseList>
        </div>
      </section>
    </main>
  );
}
