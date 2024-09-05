import React from "react";

const courseStatus = [
  {
    text: "所有課程 (4)",
    href: "#",
    isActive: true,
  },
  {
    text: "正在上課中",
    href: "#",
    isActive: false,
  },
  {
    text: "等待開課",
    href: "#",
    isActive: false,
  },
  {
    text: "已完課",
    href: "#",
    isActive: false,
  },
];
const CourseStatus = () => {
  return (
    <ul className="flex justify-between md:justify-normal">
      {courseStatus.map((item, index) => (
        <li key={index} className="md:mr-8">
          <a
            href={item.href}
            className={`leading-6 tracking-[0.02em] ${
              item.isActive
                ? "pb-3 font-semibold text-[#0068FF]"
                : "text-[#666666]"
            }`}
          >
            {item.text}
            {item.isActive && (
              <span className="mx-auto mt-3 block h-1 w-8 bg-[#0068FF]"></span>
            )}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default CourseStatus;
