"use client";
import CourseList from "@/components/CourseList";
import MobileCarousel from "@/components/MobileCarousel";
import { Button } from "@/components/ui/button";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { TiStarFullOutline } from "react-icons/ti";

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
const PaymentSuccess = () => {
  return (
    <main className="md:mt-20">
      <section className="container px-3 py-10 md:py-20">
        <div className="mb-10 flex items-center px-3 md:justify-center">
          <FaCheckCircle
            size={32}
            color="#7CD31F"
            className="md:h-14 md:w-14"
          />
          <div className="ml-4">
            <h3 className="mb-2 text-[32px] font-semibold leading-[38.4px] tracking-[0.02em] md:text-5xl">
              恭喜，Jessica！
            </h3>
            <h3 className="text-[32px] font-semibold leading-[38.4px] tracking-[0.02em] md:text-5xl">
              您已購買完成
            </h3>
          </div>
        </div>
        <div className="px-3">
          <p className="mb-10 tracking-[0.02em] text-[#4B4B4B] md:text-center md:leading-6">
            感謝您在 Learning
            購買了課程，我們已將訂單相關資訊發送至您的電子信箱。
          </p>
          <div className="text-center md:flex md:flex-row-reverse md:justify-center">
            <div className="mb-4 md:mb-0">
              <Button className="font-semibold leading-6 tracking-[0.02em]">
                查看訂單記錄
              </Button>
            </div>
            <div className="md:mr-4">
              <Button
                variant="outline"
                className="font-semibold leading-6 tracking-[0.02em]"
              >
                立即前往上課
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#F9F9F9] pb-20 pt-10">
        <div className="container px-3">
          <h3 className="flex items-center text-xl font-semibold leading-6 tracking-[0.02em]">
            <TiStarFullOutline size={16} color="#0068FF" className="mr-1" />
            更多程式學習相關課程
          </h3>
          <MobileCarousel data={courses}></MobileCarousel>
          <CourseList data={courses}></CourseList>
        </div>
      </section>
    </main>
  );
};

export default PaymentSuccess;
