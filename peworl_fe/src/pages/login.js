import React from "react";
import Link from "next/link";

export default function login() {
  return (
    <div>
      <div className="grid grid-cols-2 bg-[#EEF5FF]">
        <div className="h-[100vh]">
          <Link href={"/"}>
            <img
              alt="logo"
              src="/images/logo-white.png"
              className=" hover:scale-[1.03] absolute z-10 mt-[30px] ml-[50px]"
            ></img>
          </Link>
          <div className="flex absolute items-center h-[100vh]">
            <p className="w-[50%] text-[45px] drop-shadow-lg text-[white] z-10 ml-[50px]">
              Temukan developer berbakat & terbaik di berbagai bidang keahlian
            </p>
          </div>
          <div className="h-[100%] w-[50%] opacity-75 absolute bg-[#5E50A1]"></div>
          <img
            alt="background"
            src="/images/aut-bg.jpg"
            className="h-[100%] w-[100%] object-cover"
          ></img>
        </div>
        <div className="z-50 bg-[#EEF5FF] h-[100vh] mx-[50px] pt-[130px]">
          <h1 className="text-[32px]">Halo, Pewpeople</h1>
          <p className="capitalize">
            Temukan Talent yang sesuai dengan Kebutuhan Anda dengan fitur
            pencarian berdasarkan skill dari Peworld.
          </p>
          <label className="text-[#9EA0A5] text-muted mt-[20px] block">
            Email
          </label>
          <input
            id="email"
            placeholder="Email"
            className=" w-[100%] px-[20px] py-[10px] mt-[5px] rounded-md"
          ></input>
          <label className="text-[#9EA0A5] text-muted mt-[20px] block">
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Password"
            className=" w-[100%] px-[20px] py-[10px] mt-[5px] rounded-md"
          ></input>
          <div className=" mt-[5px] flex justify-end">
            <Link href={"/forgot-password"}>
              <p className="">Lupa kata sandi?</p>
            </Link>
          </div>
          <button className="bg-[#FBB017] text-[white] w-[100%] mt-[15px] rounded-md hover:scale-[1.01] py-[10px]">
            Masuk
          </button>
          <p className="text-center mt-[15px]">
            Anda belum punya akun?{" "}
            <Link href={"/register"}>
              <span className="text-[#FBB017]">Daftar disini</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
