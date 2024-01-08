import React from "react";
import Navbar from "../Component/navbar";
import Footer from "../Component/footer";
import axios from "axios";
import { useRouter } from "next/router";
import { getCookie } from "cookies-next";

function Detail(props) {
  const user = getCookie("user") ? JSON.parse(getCookie("user")) : null;

  const router = useRouter();
  const { Data } = props;
  return (
    <div>
      <Navbar />
      <section className="px-[100px] py-[100px] shadow-[#5E50A1] bg-[#F6F7F8]">
        <div className="shadow-xl shadow-[#5E50A1] rounded-xl overflow-hidden flex flex-col justify-center">
          <div className="py-[50px] bg-[#5E50A1]"></div>
          <img
            height="150px"
            width="150px"
            className="rounded-full mb-[10px] mt-[-75px] mx-auto hover:scale-[1.1]"
            src={Data?.photo}
          ></img>
          <div className="text-center flex flex-col">
            <h3 className="text-[35px]">{Data?.fullname}</h3>
            <span>{Data?.job}</span>
            <span>Freelancer</span>
            <div className="mx-auto d-flex align-items-center">
              <img src="/images/map-pin.png" className="mt-[25] w-[50px] h-[30px]"></img>
              <span className="text-[25px] mt-[-15]">{Data?.location}</span>
            </div>
            <div width="80%" className="px-[200px]">
              <p className="py-[20px] mb-[10px] text-[20px]">{Data?.desk}</p>
            </div>
            {user ? (
              <div>
                <button
                  onClick={() => router.push(`/hiring/${Data?.id}`)}
                  className="hover:scale-[1.03] py-[5px] px-[55px] bg-[#5E50A1] text-[25px] text-[white] rounded-xl"
                >
                  Hire
                </button>
              </div>
            ) : null}

            <div className="mt-[50px] px-[450px]">
              <h2 className="text-[30px] text-bolder">Skill</h2>
              <div className="flex flex-wrap gap-[20px] justify-center mt-[30px]">
                {Data?.skills.map((item, key) => (
                  <div key={key}>
                    <button className="hover:scale-[1.03] bg-[#FBB01799] border-2 border-[#FBB017] py-[5px] rounded-md px-[15px]">
                      {item}
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col mt-[70px] mb-[50px]">
              <div className="flex justify-center gap-[20px] mt-[10px]">
                <img src="/images/gmail.svg"></img>
                <p className="pt-[8px]">{Data?.socmed?.email}</p>
              </div>
              <div className="flex justify-center gap-[20px] mt-[10px]">
                <img src="/images/instagram.svg"></img>
                <p className="pt-[8px]">{Data?.socmed?.instagram}</p>
              </div>
              <div className="flex justify-center gap-[20px] mt-[10px]">
                <img src="/images/github.svg"></img>
                <p className="pt-[8px]">{Data?.socmed?.github}</p>
              </div>
              <div className="flex justify-center gap-[20px] mt-[10px]">
                <img src="/images/gitlab.svg"></img>
                <p className="pt-[8px]">{Data?.socmed?.gitlab}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export async function getServerSideProps(props) {
  const { id } = props.params;

  console.log(id);

  const req = await axios.get(`http://localhost:3000/api/list-talent?id=${id}`);
  return {
    props: req.data,
  };
}

export default Detail;
