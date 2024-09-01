import Image from "next/image";
import { FaLine } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import { LiaFacebookF } from "react-icons/lia";
import Link from "next/link";

const menu = [
  { title: "常見問題", link: "#" },
  { title: "關於我們", link: "#" },
  { title: "隱私權政策", link: "#" },
  { title: "使用者條款", link: "#" },
];

const socialIcons = [
  { icon: FaLine, link: "#" },
  { icon: IoLogoYoutube, link: "#" },
  { icon: LiaFacebookF, link: "#" },
];

const Footer = () => {
  return (
    <footer className="rounded-tl-[48px] rounded-tr-[48px] bg-[#282828] md:rounded-tl-[80px] md:rounded-tr-[80px]">
      <div className="container px-6 py-12 text-white md:px-2 md:py-[100px]">
        <div className="md:mb-4 md:flex">
          <Image
            className="mb-10 h-auto w-auto text-white md:mb-0"
            src="https://github.com/hexschool/2022-web-layout-training/blob/main/week8-learning/logo-white.png?raw=true"
            alt="logo"
            width={200}
            height={32}
          />
          <ul className="mb-10 md:mb-0 md:ml-auto md:flex">
            {menu.map((item, index) => (
              <li
                key={item.title}
                className={index === menu.length - 1 ? "" : "mb-6 md:mr-8"}
              >
                <a href="#" className="text-sm font-medium leading-5">
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col-reverse md:flex-row">
          <p className="hidden items-end text-sm leading-[21px] tracking-[2%] text-[#D4D4D4] md:flex">
            copyright © 2024 LEARNING 課程網站 All Rights Reserved.
          </p>
          <p className="flex items-end text-xs leading-[18px] tracking-[2%] text-[#D4D4D4] md:hidden md:text-sm md:leading-[21px]">
            copyright © 2024 課程網站 All Rights Reserved.
          </p>

          <ul className="mb-8 flex md:mb-0 md:ml-auto">
            {socialIcons.map((item, index) => (
              <li key={index} className={index === 0 ? "" : "ml-4"}>
                <Link
                  href={item.link}
                  className="flex h-10 w-10 items-center justify-center rounded-full border bg-[#282828] text-white"
                >
                  <item.icon size={20}></item.icon>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
