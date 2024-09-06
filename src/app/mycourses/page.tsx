"use client";

import Image from "next/image";
import MenuItem from "./MenuItem";
import TextList from "./TextList";
import CourseStatus from "./CourseStatus";
import MobileCarousel from "../../components/MobileCarousel";
import CourseList from "../../components/CourseList";

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

const MyCourses = () => {
  return (
    <main>
      <section className="bg-[#F9F9F9] px-3 py-10 lg:p-0">
        <div className="container">
          <div className="mb-8 lg:mb-0">
            <div className="mb-6 flex lg:mb-0 lg:py-20">
              <Image
                src="https://github.com/hexschool/2022-web-layout-training/blob/main/week8-learning/avatar-1.png?raw=true"
                alt="logo"
                width={80}
                height={80}
                priority={true}
                className="mr-2 lg:mr-6 lg:h-[100px] lg:w-[100px]"
              />
              <div className="flex flex-col justify-center">
                <h3 className="flex items-center text-[32px] font-semibold leading-[38.4px] tracking-[0.02em] lg:mb-4 lg:text-5xl lg:leading-[57.6px]">
                  Jessica
                </h3>
                <MenuItem className="hidden lg:flex"></MenuItem>
              </div>
              <TextList className="hidden items-center gap-4 lg:ml-auto lg:flex"></TextList>
            </div>
            <MenuItem className="flex justify-between lg:hidden"></MenuItem>
          </div>
          <TextList className="flex gap-4 lg:hidden"></TextList>
        </div>
      </section>
      <section className="container px-3 pb-[120px] pt-6 md:pb-[160px] md:pt-10 xl:px-0">
        <CourseStatus></CourseStatus>
        <MobileCarousel data={courses}></MobileCarousel>
        <CourseList data={courses}></CourseList>
      </section>
    </main>
  );
};

export default MyCourses;
