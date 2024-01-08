import React from "react";
import { useRouter } from "next/router";

export default function CardTalent(props) {
  const { fullname, job, photo, skill, location, id } = props;
  const router = useRouter()
  return (
    <div>
      <div
        id="listCard"
        className="container mx-auto px-[100px] mt-[30px] mb-[50px]"
      >
        <div className="flex justify-between grid grid-cols-6 shadow-lg gap-[50px]">
          <div className="flex col-span-5 gap-[20px] py-[10px] ml-[30px]">
            <img
              src={photo}
              height="180px"
              width="180px"
              className=" rounded-full"
              alt="profile"
            ></img>
            <div className="flex flex-col gap-[5px]">
              <h4 className="text-[30px] capitalize">{fullname}</h4>
              <p className="text-[gray]">{job}</p>
              <div className="flex gap-[5px] mb-[10px] h-[25px]">
                <img
                  width="40px"
                  alt="locationIcon"
                  src="/images/map-pin.png"
                ></img>
                <p className="text-[15px]">{location}</p>
              </div>
              <div className="flex gap-[20px]">
                {skill.map((item, key) => (
                  <div key={key}>
                    <button className="hover:scale-[1.03] bg-[#FBB01799] border-2 border-[#FBB017] py-[5px] rounded-md px-[15px]">
                      {item}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex justify-center flex-col">
            <button onClick={() => router.push(`/detail/${id}`)}  className="rounded-xl bg-[#5E50A1] text-[white] py-[10px] hover:scale-[1.03] mr-[60px]">
              View Profile
            </button>
          </div>
          <hr className="border-[2px] col-span-6 mb-[30px] mx-[40px] mt-[-20px]" />
        </div>
      </div>
    </div>
  );
}
