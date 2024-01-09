import React from "react";
import Link from "next/link";
import { getCookie } from "cookies-next";

function Navbar() {
  const user = getCookie("user") ? JSON.parse(getCookie("user")) : null;

  console.log(user);

  return (
    <div>
      <section id="navbar" className="top-0 bg-[white]">
        <nav className="shadow-md shadow-[#5E50A1] flex md:justify-between h-[90px] py-[20px] px-[100px]">
          <div>
            <Link href={"/"}>
              <img
                src="/images/logo-purple.png"
                alt="logo"
                className="absolute md:flex h-[40px] ml-[-80px] md:ml-[0]"
              ></img>
            </Link>
          </div>
          <div className="hidden md:block">
            {user ? (
              <img
                alt="profile"
                src="https://www.mtsolar.us/wp-content/uploads/2020/04/avatar-placeholder.png"
                className="rounded-full"
                width="50px"
                height="50px"
              ></img>
            ) : (
              <div className="flex justify-between gap-[10px] md:gap-[20px]">
                <Link href={"/login"}>
                  <button className="hover:scale-[1.03] border-[#5E50A1] border-[2px] px-[15px] text-[black] rounded-xl py-[5px]">
                    Masuk
                  </button>
                </Link>
                <Link href={"/register"}>
                  <button className="hover:scale-[1.03] bg-[#5E50A1] border-[2px] px-[15px] rounded-xl py-[5px] border-[#5E50A1] text-[white]">
                    Daftar
                  </button>
                </Link>
              </div>
            )}
          </div>
          <div className="block md:hidden ml-[180px]">
          <Link href={"/login"}>
                  <button className="hover:scale-[1.03] border-[#5E50A1] border-[2px] px-[15px] text-[black] rounded-xl py-[5px]">
                    Masuk
                  </button>
                </Link>
          </div>
        </nav>
      </section>
    </div>
  );
}

export default Navbar;
