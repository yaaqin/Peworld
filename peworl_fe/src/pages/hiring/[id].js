import React from "react";
import Navbar from "../Component/navbar";
import Footer from "../Component/footer";
import axios from "axios";
import Link from "next/link";
import { getCookie } from "cookies-next";


function Hiring(props) {
  const { Data } = props;
  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-5">
        <div className="col-span-2 py-[50px] px-[50px] bg-[#EEF5FF] ">
          <div className="h-[750px] w-[497px] bg-[#fff] rounded-xl py-[30px] shadow-qin px-[50px]">
            <div className="flex justify-center">
              <img
                alt="profile"
                src={Data.photo}
                width="150px"
                height="150px"
                className="bg-[cyan] rounded-full"
              ></img>
            </div>
            <h3 className="text-[35px] mt-[15px] mb-[10px]">{Data.fullname}</h3>
            <p>{Data.job}</p>
            <div className="flex gap-[15px] my-[15px]">
              <img
                width="20px"
                alt="icon location"
                src="/images/map-pin.png"
              ></img>
              <p>{Data.location}</p>
            </div>
            <h6 className="capitalize">{Data.desk}</h6>
            <h5 className="mt-[20px] text-[25px]">Skill</h5>
            <div className="flex gap-[15px] mt-[15px] flex-wrap">
              {Data?.skills.map((item, key) => (
                <div key={key}>
                  <button className="hover:scale-[1.03] bg-[#FBB01799] border-2 border-[#FBB017] py-[5px] rounded-md px-[15px]">
                    {item}
                  </button>
                </div>
              ))}
            </div>
            <div className="mt-[140px] ml-[300px]">
              <Link href={"/talent-list"}>
                <button className="hover:scale-[1.03] bg-[#5E50A1] text-[#fff] px-[10px] py-[5px] rounded-md">Talent-list</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-[#EEF5FF] py-[50px] col-span-3">
          <div className="bg-[#EEF5FF]">
            <h2 className="text-[35px]">Hubungi {Data.fullname}</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              euismod ipsum et dui rhoncus auctor.
            </p>
            <label className="text-[#9EA0A5] text-muted mt-[20px] block">
              Email
            </label>
            <input
              id="email"
              placeholder="Email"
              className=" w-[95%] px-[20px] py-[10px] mt-[5px] rounded-md shadow-qin"
            ></input>
            <label className="text-[#9EA0A5] text-muted mt-[20px] block">
              Email
            </label>
            <input
              id="email"
              placeholder="Email"
              className=" w-[95%] px-[20px] py-[10px] mt-[5px] rounded-md shadow-qin"
            ></input>
            <label className="text-[#9EA0A5] text-muted mt-[20px] block">
              Email
            </label>
            <input
              id="email"
              placeholder="Email"
              className=" w-[95%] px-[20px] py-[10px] mt-[5px] rounded-md shadow-qin"
            ></input>
            <button className="bg-[#FBB017] text-[white] w-[95%] mt-[15px] rounded-md hover:scale-[1.01] mt-[30px] py-[10px]">
              Kirim
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}


export async function getServerSideProps({request, res, params}) {
  const { id } = params;

  const user = getCookie("user", { request, res });
  const token = getCookie("token", { request, res });

  // if (!user && !token) {
  //   return {
  //     redirect: {
  //       permanent: false,
  //       destination: `/talent-list`,
  //     },
  //   };
  // }
  const req = await axios.get(`http://localhost:3000/api/list-talent?id=${id}`);
  return {
    props: req.data,
  };
}

export default Hiring;
