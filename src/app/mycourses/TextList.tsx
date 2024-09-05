import React from "react";

const items = [
  { title: "我的課程", count: 4 },
  { title: "我的收藏", count: 2 },
  { title: "作品成果", count: 5 },
];
const TextList = ({ className = "" }) => {
  return (
    <ul className={className}>
      {items.map((item, index) => (
        <li key={index} className="h-[83px] w-[106.33px] text-center">
          <h4 className="text-sm leading-[21px] tracking-[0.02em] text-[#4B4B4B]">
            {item.title}
          </h4>
          <h5 className="text-5xl font-semibold leading-[57.6px] tracking-[0.02em]">
            {item.count}
          </h5>
        </li>
      ))}
    </ul>
  );
};

export default TextList;
