import Image from "next/image";
import Link from "next/link";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import MobileCarousel from "../mycourses/MobileCarousel";

import { FaLine, FaYoutube, FaFacebookF } from "react-icons/fa";

const socialIcons = [
  { icon: FaLine, link: "#" },
  { icon: FaYoutube, link: "#" },
  { icon: FaFacebookF, link: "#" },
];

export default function Home() {
  return (
    <main className="container">
      <div className="h-[200px] bg-[url('https://github.com/hexschool/2022-web-layout-training/blob/main/week8-learning/hero-sm-5.png?raw=true')] bg-cover bg-center"></div>

      <div className="relative space-y-4 px-3 text-[#4B4B4B]">
        <div className="absolute -top-14 left-1/2 size-20 -translate-x-1/2 rounded-full bg-white">
          <Image
            src="https://github.com/hexschool/2022-web-layout-training/blob/main/week8-learning/icons/ic_%20hexschool.png?raw=true"
            alt="hexSchool"
            width={80}
            height={80}
          ></Image>
        </div>
        <h2 className="pt-10 text-center text-[2rem] font-semibold text-black">
          六角學院
        </h2>
        <div className="flex items-center justify-center gap-x-3">
          <p>
            <span className="pe-1 font-semibold text-[#0068FF]">4</span>
            堂課
          </p>
          <span className="h-4 w-px bg-[#909090]"></span>
          <p>
            <span className="pe-1 font-semibold text-[#0068FF]">8463</span>
            收藏數
          </p>
          <span className="h-4 w-px bg-[#909090]"></span>
          <p>
            <span className="pe-1 font-semibold text-[#0068FF]">20,218</span>
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
        <ul className="flex justify-center gap-x-4 text-[#4B4B4B]">
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
      <div className="pb-[120px]">
        <div className="mb-6 flex items-center">
          <Image
            src="https://github.com/hexschool/2022-web-layout-training/blob/main/week8-learning/deco/flower-5.png?raw=true"
            alt="flower"
            width={16}
            height={16}
            className="me-[6px]"
          ></Image>
          <h3 className="text-xl font-semibold">六角學院開的課</h3>
        </div>
        <MobileCarousel data={courses}></MobileCarousel>
      </div>
    </main>
  );
}
