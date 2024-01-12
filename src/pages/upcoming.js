import React from "react";
import Link from "next/link";

export default function upcoming() {
  return (
    <div>
      <div className="text-center flex flex-col justify-center item-center w-full h-[100vh]">
        <h1>Up Coming Feature</h1>
        <div className="flex justify-center gap-[5px]">
          <h2>Back to </h2>
          <Link href={"/"}>
            <h2 className="text-black">Home</h2>
          </Link>
        </div>
      </div>
    </div>
  );
}
