import React from "react";
import Link from "next/link";

export default function navbar() {
  return (
    <div>
      <section id="navbar" className="sticky top-0 bg-[white]">
        <nav className="shadow-md shadow-[#5E50A1] flex justify-between py-[20px] container mx-auto px-[100px]">
          <img src="/images/logo-purple.png" alt="logo"></img>
          <div className="flex justify-between gap-[20px]">
            <Link href={"/login"}>
              <button className="hover:scale-[1.03] border-[#5E50A1] border-[2px] px-[15px] rounded-xl py-[5px]">
                Masuk
              </button>
            </Link>
            <Link href={"/register"}>
              <button className="hover:scale-[1.03] bg-[#5E50A1] border-[2px] px-[15px] rounded-xl py-[5px] border-[#5E50A1] text-[white]">
                Daftar
              </button>
            </Link>
          </div>
        </nav>
      </section>
    </div>
  );
}
