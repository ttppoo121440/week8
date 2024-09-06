import Image from "next/image";
import React from "react";
import { IoStarSharp } from "react-icons/io5";

const CourseList = ({ data }: { data: Course[] }) => {
  return (
    <ul className="mt-10 hidden md:grid md:grid-cols-2 md:gap-6 xl:grid-cols-4">
      {data.map((course) => (
        <li key={course.id} className="relative">
          <Image
            src={course.image}
            alt="course"
            width={300}
            height={200}
            priority={true}
            className="mr-2 w-full rounded-tl-[20px] rounded-tr-[20px] md:m-0"
          />
          {course.discount && (
            <div className="absolute left-4 top-4 flex h-[37px] w-[101px] items-center justify-center rounded-full bg-[#FFE0D7]">
              <span className="text-sm font-semibold leading-[21px] tracking-[0.02em] text-[#FF3A55]">
                {course.discount}
              </span>
            </div>
          )}
          <div className="flex flex-grow flex-col shadow-card-shadow">
            <div className="flex-grow p-4">
              <h2 className="mb-4 text-xl font-semibold leading-6 tracking-[0.02em]">
                {course.title}
              </h2>
              <div className="flex items-center">
                <Image
                  src="https://github.com/hexschool/2022-web-layout-training/blob/main/week8-learning/avatar-2.png?raw=true"
                  alt="course"
                  width={32}
                  height={32}
                  priority={true}
                  className="mr-2 h-8 w-8 rounded-full"
                />
                <p className="leading-6 tracking-[0.02em] text-[#4B4B4B]">
                  {course.instructor}
                </p>
                <div className="ml-auto flex flex-col items-end">
                  <p className="text-xl font-bold leading-[30px] text-[#0068FF]">
                    {course.price}
                  </p>
                  <p className="text-sm leading-[21px] text-[#808080] line-through">
                    {course.originalPrice}
                  </p>
                </div>
              </div>
            </div>
            <div className="border-t">
              <div className="p-4">
                <div className="flex items-center">
                  <div className="flex flex-col">
                    <div className="mb-1 flex h-[29px] w-[81px] items-center justify-center rounded-full bg-[#ECECEC]">
                      {course.category}
                    </div>
                    <p className="text-sm">已有 {course.students} 位同學加入</p>
                  </div>
                  <div className="ml-auto">
                    <div className="flex">
                      <span className="mr-1 flex items-center justify-center">
                        <IoStarSharp
                          size={12}
                          color="#F6BD2B"
                          className="inline-block"
                        />
                      </span>
                      <span className="text-sm font-medium leading-[21px]">
                        {course.rating}
                      </span>
                      <span className="text-sm font-medium leading-[21px] text-[#808080]">
                        ({course.reviews})
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CourseList;
