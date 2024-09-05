import React from "react";
import { FaPen } from "react-icons/fa6";
import { GoFileDirectoryFill } from "react-icons/go";
import { IoBookmarkSharp } from "react-icons/io5";

const menuItems = [
  {
    href: "#",
    icon: <GoFileDirectoryFill size={20} className="mr-2" />,
    text: "我的課程",
    className:
      "flex items-center rounded-[12px] bg-[#E5F4FF] px-3 py-2 text-sm font-semibold leading-[21px] tracking-[2ern] text-[#0068FF] mr-2 md:text-base md:leading-6 md:py-4 md:px-8",
  },
  {
    href: "#",
    icon: <IoBookmarkSharp size={20} className="mr-2" />,
    text: "我的收藏",
    className:
      "flex items-center px-3 py-2 text-sm font-semibold leading-[21px] tracking-[0.02em] text-[#909090] mr-2 md:text-base md:leading-6 md:py-4 md:px-8",
  },
  {
    href: "#",
    icon: <FaPen size={20} className="mr-2" />,
    text: "作品成果",
    className:
      "flex items-center px-3 py-2 text-sm font-semibold leading-[21px] tracking-[0.02em] text-[#909090] md:text-base md:leading-6 md:py-4 md:px-8",
  },
];
const MenuItem = ({ className = "" }) => {
  return (
    <ul className={className}>
      {menuItems.map((item, index) => (
        <li key={index} className={item.className}>
          <a href={item.href} className="flex items-center">
            {item.icon}
            {item.text}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default MenuItem;
