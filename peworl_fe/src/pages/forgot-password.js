import Link from "next/link";
import React from "react";

export default function ForgotPassword() {
  return (
    <div className="h-[100vh] w-[100%] bg-[#fff] flex flex-col justify-center items-center">
        <img alt="logo"src="/images/logo-purple.png" width="200px" className="mt-[-100px] mb-[50px]"></img>
      <h1 className="text-[30px]">Fitur ini akan segera hadir</h1>
      <span className="text-[20px]">stay tuned</span>
      <div className="mt-[20px] flex gap-[20px]">
        <Link href={"/"}>
          <button className="bg-[#FBB017] px-[20px] rounded-xl hover:scale-[1.05] py-[5px]">
            Home
          </button>
        </Link>
        <Link href={"/login"}>
          <button className="bg-[#FBB017] px-[20px] rounded-xl hover:scale-[1.05] py-[5px]">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
}
