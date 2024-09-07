"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { PiEyeBold, PiEyeClosedBold } from "react-icons/pi";

const accountLogIn = [
  {
    account: "google",
    image:
      "https://github.com/hexschool/2022-web-layout-training/blob/main/week8-learning/icons/ic_google.png?raw=true",
    login: "使用 Google 帳號登入",
  },
  {
    account: "facebook",
    image:
      "https://github.com/hexschool/2022-web-layout-training/blob/main/week8-learning/icons/ic_facebook.png?raw=true",
    login: "使用 Facebook 帳號登入",
  },
  {
    account: "apple",
    image:
      "https://github.com/hexschool/2022-web-layout-training/blob/main/week8-learning/icons/ic_apple.png?raw=true",
    login: "使用 Apple 帳號登入",
  },
];

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const isFormValid = email !== "" && password !== "" && confirmPassword !== "";

  return (
    <div>
      <div className="mx-auto flex w-full max-w-[1920px] items-center justify-between">
        <Image
          src="https://github.com/hexschool/2022-web-layout-training/blob/main/week8-learning/login.png?raw=true"
          alt="logIn"
          width={728}
          height={1000}
          className="hidden xl:block xl:py-10 xl:ps-10"
        ></Image>
        <div className="mx-auto w-full space-y-6 px-6 py-[60px] text-[#4B4B4B] xl:max-w-[540px] xl:space-y-10">
          <div className="space-y-4">
            <h2 className="pb-2 text-[2rem] font-semibold leading-[2.4rem] text-black xl:pb-6 xl:text-5xl">
              歡迎加入 Learning
            </h2>
            {accountLogIn.map((item, index) => (
              <Link
                className="block rounded-xl border border-[#ECECEC] py-4 pe-8 ps-4"
                key={`${item.account}${index}`}
                href="#"
              >
                <div className="flex w-full xl:max-w-[492px]">
                  <Image
                    src={`${item.image}`}
                    alt={`${item.account}`}
                    width={24}
                    height={24}
                  ></Image>
                  <p className="flex-1 text-center">{item.login}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-black">
              或使用 Learning 帳號登入
            </h3>
            <div>
              <label className="block pb-2" htmlFor="email">
                電子郵件<span className="ps-1 text-[#FF3A55]">*</span>
              </label>
              <input
                type="email"
                id="email"
                className="w-full rounded-xl border p-4 outline-none"
                placeholder="請輸入電子信箱"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-2">
              <label className="block pb-2" htmlFor="confirmpassword">
                密碼<span className="ps-1 text-[#FF3A55]">*</span>
              </label>
              <div className="flex items-center justify-between rounded-xl border px-4">
                <input
                  type={showPassword ? "text" : "password"}
                  id="confirmpassword"
                  className="w-full py-4 outline-none"
                  placeholder="請輸入密碼"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {password && (
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className=""
                  >
                    {showPassword ? (
                      <PiEyeBold size={20} />
                    ) : (
                      <PiEyeClosedBold size={20} />
                    )}
                  </button>
                )}
              </div>
            </div>
            <div>
              <label className="block pb-2" htmlFor="confirmPassword">
                確認密碼<span className="ps-1 text-[#FF3A55]">*</span>
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirmPassword"
                  className="w-full rounded-xl border p-4 outline-none"
                  placeholder="請輸入確認密碼"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                {confirmPassword && (
                  <button
                    type="button"
                    className="absolute right-4 top-1/2 -translate-y-1/2 transform"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? (
                      <PiEyeBold size={20} />
                    ) : (
                      <PiEyeClosedBold size={20} />
                    )}
                  </button>
                )}
              </div>
            </div>
          </div>
          <div>
            <button
              className={`mb-4 w-full rounded-xl py-4 text-center font-semibold ${isFormValid ? "text-white" : "text-[#909090]"} ${isFormValid ? "bg-[#0068FF]" : "bg-[#ECECEC]"}`}
              disabled={!isFormValid}
            >
              立即登入
            </button>
            <div className="flex justify-between">
              <p>
                建立帳號即表示您同意我們的
                <Link className="mx-1 underline" href="#">
                  服務條款
                </Link>
                及
                <Link className="ms-1 underline" href="#">
                  隱私權政策
                </Link>
              </p>
            </div>
          </div>
          <p>
            沒有 Learning 帳號嗎？
            <Link
              className="ps-2 font-semibold text-[#0068FF] underline"
              href="#"
            >
              立即註冊
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
